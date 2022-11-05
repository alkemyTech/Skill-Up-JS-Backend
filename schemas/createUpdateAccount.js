const createUpdateAccountSchema = {
  money: {
    exists: { errorMessage: 'Money field is required' },
    trim: true,
    isFloat: {
      options: {
        locale: 'en-US',
      },
      errorMessage:
        'Invalid value. Only integer or decimal numbers separated by a point are accepted',
    },
  },
  isBlocked: {
    exists: { errorMessage: 'isBlocked field is required' },
    trim: true,
    isBoolean: {
      options: {
        loose: false,
        errorMessage:
          "Invalid value. Only 'false', 'true', '0' and '1' are accepted",
      },
    },
  },
  userId: {
    exists: { errorMessage: 'User id is required' },
  },
};

module.exports = createUpdateAccountSchema;
