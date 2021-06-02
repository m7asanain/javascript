class Tooltip {}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', );
    }
}

class ProjectList {
    products = [];

    constructor(type) {
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        for (const projItem of projItems) {
            this.products.push(new ProjectItem(projItem.id))
        }
        console.log(this.products);
    }

    addProject() {

    }

    switchProject(productId) {
        // const productsIndex = this.products.findIndex(p => p.id === productId);
        // this.products.slice(productsIndex, 1);
        this.addProject();
        this.products = this.products.filter(p => p.id !== productId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}

App.init();