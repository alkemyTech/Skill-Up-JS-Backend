const createUpdateTransaction = {
  amount: {
    exists: { errorMessage: 'Amount is required' },
    trim: true,
    isFloat: {
      options: {
        locale: 'en-US',
      },
      errorMessage:
        'Invalid value. Only integer or decimal numbers separated by a point are accepted',
    },
  },
  concept: {
    exists: { errorMessage: 'Concept is required' },
    trim: true,
    isLength: {
      errorMessage: 'Concept has invalid length (max 25)',
      options: { max: 25 },
    },
  },
  date: {
    exists: { errorMessage: 'Date date is required' },
    trim: true,
    isDate: {
      format: 'YYYY-MM-DD',
      errorMessage: 'Invalid date. Accepted format YYYYY-MM-DD',
    },
  },
  type: {
    exists: { errorMessage: 'Type is required' },
    isIn: {
      options: ['topup', 'payment'],
      errorMessage: 'The allowed values are topup and payment',
    },
  },
  accountId: {
    exists: { errorMessage: 'Account id is required' },
    trim: true,
    isInt: { errorMessage: 'Account id must be a integer number' },
    toInt: true,
  },
  toAccountId: {
    exists: { errorMessage: 'toAccountId is required' },
    trim: true,
    isInt: { errorMessage: 'toAccountId must be a integer number' },
    toInt: true,
  },
  userId: {
    exists: { errorMessage: 'User id is required' },
  },
};

module.exports = createUpdateTransaction;
