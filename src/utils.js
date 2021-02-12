export const filterOptionsFromPropRepoList = (repoList, property) => {
  const options = [];
  const propertyOptions = repoList.map((repo) => repo[property]);
  for (let property of propertyOptions) {
    for (let el of property) {
      if (!options.includes(el)) {
        options.push(el);
      }
    }
  }
  return options.map((option) => ({
    value: option,
    label: option,
    type: property,
  }));
};
