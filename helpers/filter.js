const filterElements = (args) => {
  const filterCondition = {};

  for (const property in args) {
    if (args[property]) {
      filterCondition[property] = args[property];
    }
  }

  return filterCondition;
};

module.exports = {
  filterElements,
};
