const createUpdateRoleSchema = {
  name: {
    exists: { errorMessage: 'Name is required' },
    trim: true,
    isLength: {
      errorMessage: 'Name has invalid length (min 2, max 12)',
      options: { min: 2, max: 12 },
    },
  },
  description: {
    exists: { errorMessage: 'Description is required' },
    trim: true,
    isLength: {
      errorMessage: 'Description has invalid length (min 3, max 50)',
      options: { min: 3, max: 50 },
    },
  },
};

module.exports = createUpdateRoleSchema;
