const formatLabel = (cecilian) => {
  const years = cecilian.tags
    .filter((tag) => tag.tag.type === "YEAR")
    .map((tag) => tag.tag.year.name)
    .sort();
  const firstYear = years[0];
  const lastYear = years[years.length - 1];
  const yearPhrase = years.length
    ? years.length === 1
      ? firstYear
      : `${firstYear}–${lastYear}`
    : null;
  return `${cecilian.displayName}${
    yearPhrase ? ` (active ${yearPhrase})` : ""
  }`;
};

const formatCecilianAsOption = (cecilian, selectedOptions = []) => ({
  key: cecilian?.slug,
  label: formatLabel(cecilian),
  picture: cecilian?.user?.picture,
  selected: selectedOptions
    .map((option) => option.key)
    .includes(cecilian?.slug),
});

export default formatCecilianAsOption;
