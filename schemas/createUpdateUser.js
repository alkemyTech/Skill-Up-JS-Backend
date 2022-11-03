const createUpdateUserSchema = {
  first_name: {
    exists: { errorMessage: 'First name is required' },
    trim: true,
    isLength: {
      errorMessage: 'First name has invalid length (min 3, max 10)',
      options: { min: 3, max: 10 },
    },
  },
  last_name: {
    exists: { errorMessage: 'Last name is required' },
    trim: true,
    isLength: {
      errorMessage: 'Last name has invalid length (min 3, max 10)',
      options: { min: 3, max: 10 },
    },
  },
  email: {
    exists: {
      errorMessage: 'Email is required',
    },
    trim: true,
    isEmail: {
      errorMessage: 'Email is invalid',
    },
  },
  roleId: {
    exists: { errorMessage: 'Role id is required' },
    trim: true,
    isIn: {
      options: ['1', '2'],
      errorMessage: 'The allowed values for the role id are 1 and 2',
    },
  },
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

module.exports = createUpdateUserSchema;
