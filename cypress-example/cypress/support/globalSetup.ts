beforeEach(function () {
  cy.log('I run before every test in every spec file!!!!!!')
  const state = {
    user: null,

    setUser(value) {
      this.user = value
    }
  };

  Object.assign(this, state);
});