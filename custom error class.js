class DevcampError extends Error {
    constructor(msg = 'An error occurred', ...params) {
      super(...params);

      this.msg = msg;
    }
  }


  function siteComponent(func) {
    return func();
  }

  try {
    console.log(siteComponent('oops'));
  } catch(e) {
    throw new DevcampError('DevcampError', e);
  }