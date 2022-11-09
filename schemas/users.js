exports.user = {
    firstName: {
      exists: {
        errorMessage: 'First Name is required',
        options: { checkFalsy: true },
      },
      isString: { errorMessage: 'First Name should be a string' },
    },
    lastName: {
      exists: {
        errorMessage: 'Last Name name is required',
        options: { checkFalsy: true },
      },
      isString: { errorMessage: 'Last name should be a string' },
    },
    password: {
      exists: { errorMessage: 'Password is required' },
      isString: { errorMessage: 'Password should be a string' },
      isStrongPassword: {
        errorMessage:
            'Password should be at least 8 characters and contain uppercase letters, lowercase letters, numbers and special characters',
      },
    },
    email: {
      isEmail: { errorMessage: 'Please provide a valid e-mail' },
    },
  };