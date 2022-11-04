exports.transactions = {
    user: {
      exists: {
        errorMessage: 'User id is required',
        options: { checkFalsy: true },
      },
      notEmpty: {
        errorMessage: 'User Id is empty',
      },
      isInt: {
        errorMessage: 'User Id must be an integer/number',
      },
    },
    category: {
      exists: {
        errorMessage: 'Category is required',
        options: { checkFalsy: true },
      },
      notEmpty: {
        errorMessage: 'Category Id is empty',
      },
      isInt: {
        errorMessage: 'Category Id must be an integer/number',
      },
    },
    amount: {
      exists: { errorMessage: 'Amount is required' },
      isNumeric: { errorMessage: 'Amount should be a float' },
      notEmpty: {
        errorMessage: 'Amount is empty',
      },
    },
    date: {
      exists: { errorMessage: 'Date is required' },
      isISO8601: { errorMessage: 'Please specify the date in the format yyyy-mm-ddThh:mm:ss' },
      toDate: { errorMessage: 'Please specify the date in the format yyyy-mm-ddThh:mm:ss' },
      notEmpty: {
        errorMessage: 'Date is empty',
      },
    },
  };