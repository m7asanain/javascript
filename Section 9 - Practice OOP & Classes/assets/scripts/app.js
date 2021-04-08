class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const projItem = document.querySelectorAll(`#${type}-projects li`);
    console.log(projItem);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
  }
}

App.init();