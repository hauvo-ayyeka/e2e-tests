beforeEach(function () {
  const state = {
    user: null,

    setUser(value) {
      this.user = value
    }
  };

  Object.assign(this, state);
});