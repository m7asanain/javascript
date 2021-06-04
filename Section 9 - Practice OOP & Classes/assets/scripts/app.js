class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}

class Tooltip {
    constructor(closeNotifierFunction) {
        this.closeNotifier = closeNotifierFunction;
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    }

    detach = () => {
        this.element.remove();
        // this.element.parentElement.removeChild(this.element);    // for older browser
    }

    attach() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'DUMMY!';
        tooltipElement.addEventListener('click', this.closeTooltip);
        this.element = tooltipElement;
        document.body.append(tooltipElement);
    }
}

class ProjectItem {
    hasActiceTooltip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListHadler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler() {
        if (this.hasActiceTooltip) {
            return;
        }
        const tooltip = new Tooltip(() => {
            this.hasActiceTooltip = false;
        });
        tooltip.attach();
        this.hasActiceTooltip = true;
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const morreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        morreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'finish' : 'Activate';
        switchBtn.addEventListener('click', this.updateProjectListHadler.bind(null, this.id));
    }

    update(updateProjectListFn, type) {
        this.updateProjectListHadler = updateProjectListFn;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
    porjects = [];

    constructor(type) {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        for (const projItem of projItems) {
            this.porjects.push(new ProjectItem(projItem.id, this.switchProject.bind(this), this.type));
        }
        console.log(this.porjects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.porjects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        // const productsIndex = this.products.findIndex(p => p.id === productId);
        // this.products.slice(productsIndex, 1);
        this.switchHandler(this.porjects.find(p => p.id === projectId));
        this.porjects = this.porjects.filter(p => p.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }
}

App.init();