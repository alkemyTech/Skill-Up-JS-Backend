exports.login = {
    password: {
      exists: { errorMessage: 'Password is required' },
      isString: { errorMessage: 'Password should be a string' },
    },
    email: {
        exists: { errorMessage: 'E-mail is required' },
        isEmail: { errorMessage: 'Please provide a valid e-mail' },
    },
  };