const createUpdateDepositSchema = {
  userId: {
    exists: { errorMessage: 'User id is required' },
    trim: true,
  },
  accountId: {
    exists: { errorMessage: 'Account id is required' },
    trim: true,
    isInt: { errorMessage: 'Account id must be a integer number' },
    toInt: true,
  },
  amount: {
    exists: { errorMessage: 'Amount is required' },
    trim: true,
    isDecimal: {
      options: {
        locale: 'en-US',
      },
      errorMessage:
        'Invalid value. Only integer or decimal numbers separated by a point are accepted',
    },
  },
  creationDate: {
    exists: { errorMessage: 'Creation date date is required' },
    trim: true,
    isDate: {
      format: 'YYYY-MM-DD',
      errorMessage: 'Invalid date. Accepted format YYYYY-MM-DD',
    },
  },
  closingDate: {
    exists: { errorMessage: 'Closing date is required' },
    trim: true,
    isDate: {
      format: 'YYYY-MM-DD',
      errorMessage: 'Invalid date. Accepted format YYYYY-MM-DD',
    },
    custom: {
      options: (value, { req }) =>
        Date.parse(value) > Date.parse(req.body.creationDate),
      errorMessage:
        'Invalid date. The closing date must be greater than the opening date.',
    },
  },
};

module.exports = createUpdateDepositSchema;
