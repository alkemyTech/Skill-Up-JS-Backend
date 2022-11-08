const createUpdateTransaction = {
  amount: {
    exists: { bail: true, errorMessage: 'Amount is required' },
    trim: true,
    isFloat: {
      options: {
        locale: 'en-US',
        min: 0.1,
      },
      errorMessage:
        'Invalid value. Only integer or decimal numbers separated by a point are accepted',
    },
  },
  concept: {
    exists: { bail: true, errorMessage: 'Concept is required' },
    trim: true,
    isLength: {
      errorMessage: 'Concept has invalid length (max 25)',
      options: { min: 0, max: 25 },
    },
  },
  category: {
    exists: { bail: true, errorMessage: 'Category is required' },
    isIn: {
      options: ['Egress', 'Income'],
      errorMessage: 'The allowed values are Egress and Income',
    },
  },
  accountId: {
    exists: { bail: true, errorMessage: 'Account id is required' },
    trim: true,
    isUUID: {
      errorMessage: 'Account id invalid',
    },
  },
  toAccountId: {
    exists: { bail: true, errorMessage: 'toAccountId is required' },
    trim: true,
    isUUID: {
      errorMessage: 'Account id invalid',
    },
  },
};

module.exports = createUpdateTransaction;
