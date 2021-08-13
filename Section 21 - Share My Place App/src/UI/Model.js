export class Modle {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);  // give access to template element in the dom that has the id
    this.modelTemplateEl = document.getElementById('modal-template');   // the model itself
  }

  show() {
    if ('content' in document.createElement('template')) { // check if the template is supported by the browser
      const modelElements = document.importNode(this.modelTemplateEl.content, true);  // this will give me access to the template content
      
      const modelElement = modelElements.querySelector('.modal');  // * selecting element
      const backdropElement = modelElements.querySelector('.backdrop');  // * selecting element

      const contentElement = document.importNode(this.contentTemplateEl.content, true); // give access to the actual content in the dom

      // add to the page

      modelElement.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', modelElement);  // * add to the dom
      document.body.insertAdjacentElement('afterbegin', backdropElement);  // * add to the dom

    } else {
      // fallback code
      alert(this.fallbackText); // show if template not supported
    }
  }

  hide() {

  }
}