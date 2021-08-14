export class Modle {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);  // give access to template element in the dom that has the id
    this.modelTemplateEl = document.getElementById('modal-template');   // the model itself
  }

  show() {
    if ('content' in document.createElement('template')) { // check if the template is supported by the browser
      const modelElements = document.importNode(this.modelTemplateEl.content, true);  // this will give me access to the template content
      
      this.modelElement = modelElements.querySelector('.modal');  // * selecting the property - to use it in all method 
      this.backdropElement = modelElements.querySelector('.backdrop');  // * selecting the property - to use it in all method 

      const contentElement = document.importNode(this.contentTemplateEl.content, true); // give access to the actual content in the dom

      // add to the page

      this.modelElement.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', this.modelElement);  // * add to the dom
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);  // * add to the dom

    } else {
      // fallback code
      alert(this.fallbackText); // show if template not supported
    }
  }

  hide() {
    if (this.modelElement) {
      document.body.removeChild(this.modelElement);
      document.body.removeChild(this.backdropElement);
      this.modelElement = null; // * tell js that this property is cleared and the reference of the doom element id no longer needed and can be cleaned up
      this.backdropElement = null;  // * tell js that this property is cleared and the reference of the doom element id no longer needed and can be cleaned up
    }
  }
}