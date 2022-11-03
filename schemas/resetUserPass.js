const resetUserPassSchema = {
  password: {
    exists: { errorMessage: 'Password is required' },
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
  password_confirmation: {
    exists: { errorMessage: 'Password confirmation is required' },
    trim: true,
    custom: {
      options: (value, { req }) => value === req.body.password,
      errorMessage: 'Passwords must match',
    },
  },
};

module.exports = resetUserPassSchema;
