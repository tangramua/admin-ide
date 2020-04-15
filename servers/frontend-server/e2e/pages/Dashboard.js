
const I = actor();

module.exports = {
  root: '#dashboard',
  controls: {
    createBtn: 'New Workspace',
  },
  createWorkspace() {
    I.click(this.controls.createBtn);
  },
  waitForLoad() {
    I.waitForVisible(this.controls.createBtn, 5000);
  },
};
