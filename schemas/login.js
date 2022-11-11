const loginSchema = {
  email: {
    exists: { bail: true, errorMessage: 'Email is required' },
    trim: true,
    isEmail: {
      errorMessage: 'Email is invalid',
    },
  },
  password: {
    exists: { bail: true, errorMessage: 'Password is required' },
    trim: true,
    isStrongPassword: {
      minLength: 8,
      maxLength: 15,
      minLowecase: 1,
      minUppercase: 1,
      minSymbols: 1,
    },
    errorMessage:
      'Password must be at least 8 characters and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.',
  },
};

module.exports = loginSchema;
