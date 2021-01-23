export const formatYearAsOption = (year, selectedOptions = []) => ({
  key: year?.slug,
  label: year?.name,
  picture: null,
  selected: selectedOptions.map((option) => option.key).includes(year?.slug),
});

export const formatYearForInput = (yearName) => ({
  slug: yearName,
  name: yearName,
});
