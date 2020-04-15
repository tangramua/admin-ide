
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    login(user, target = '/dashboard') {
      const auth = user.auth; 

      this.amOnPage(`/login?redirect=${target}`);

      this.waitForVisible(auth.provider, 2);

      this.click(auth.provider);
      this.waitForNavigation();

      this.waitForElement(auth.fields.username, 10);
      this.fillField(auth.fields.username, auth.credentials.username);
      
      if (auth.steps) { this.click(auth.fields.next); }
      
      this.waitForVisible(auth.fields.password, 10);
      
      this.click(auth.fields.password);
      this.fillField(auth.fields.password, auth.credentials.password);

      if (auth.steps) { 
        this.click(auth.fields.next); 
      } else {
        this.click(auth.submit);
      }

      this.waitForNavigation();
      this.waitInUrl(target, 10);
    }
  });
}
