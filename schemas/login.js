exports.login = {
    password: {
      exists: { errorMessage: 'Password is required' },
      isString: { errorMessage: 'Password should be a string' },
      isStrongPassword: {
        errorMessage:
            'Password should be at least 8 characters and contain uppercase letters, lowercase letters, numbers and special characters',
      },
    },
    email: {
        exists: { errorMessage: 'E-mail is required' },
        isEmail: { errorMessage: 'Please provide a valid e-mail' },
    },
  };