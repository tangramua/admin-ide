const {  } = require('../mock');

const I = actor();

module.exports = {
  sections: {
    workspace: {
      fields: {
        name: '#name',
        team: '#teamId',
        description: '#description',
        inactivity: '#spec.inactivity',
      },
      fillSection(workspace) {
        I.fillField(this.fields.name, workspace.name);
        I.fillField(this.fields.description, workspace.description);
      },
    },
    images: {
      root: '#images',
      controls: {
        image: image => `.ant-table-row[data-row-key="${image}"]`,
      },
      fields: {
        select: 'input[type="checkbox"]',
      },
      selectImages(images) {
        Array
          .from(images)
          .forEach(image => this.selectImage(image));
      },
      selectImage(image) {
        const row = this.controls.image(image);

        I.waitForVisible(row, 5);
        I.checkOption(`${row} ${this.fields.select}`);
      }
    },
    charts: {
      root: '#charts',
      controls: {
        chart: chart => `.ant-table-row[data-row-key="${chart}"]`,
      },
    },
    project: {
      root: '#projects',
      buttons: {
        addProject: '#add-project',
      },
      controls: {
        repo: repo => `.ant-table-row[data-row-key="${repo}"]`,
        pane: status => `.ant-tabs-tabpane[aria-hidden="${status}"]`,
        tab: index => `.ant-tabs-tab[role="tab"]:nth-child(${index})`,
        source: source => `.ant-radio-button[data-source="${source}"]`,
      },
      fields: {
        url: '#source-url',
        name: '#project-name',
        branch: '#source-branch',
        source: '.project-source',
        repositories: '#repos-list',
        description: '#project-description',
      },
      actions: {
        addProject(project = {}, index = 1) {
          I.click(`${this.root} ${this.buttons.addProject}`);

          I.click(this.controls.tab(index));

          I.fill(this.fields.name, project.name);
          I.fill(this.fields.description, project.description);
        },
      },
    },
  },
  fillForm(workspace) {
    const imagesSection = this.sections.images;
    const projectSection = this.sections.project;
    const workspaceSection = this.sections.workspace;

    workspaceSection.fillSection(workspace);
    imagesSection.selectImages(workspace.env);
  }
};
