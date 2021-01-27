const formatCase = (str) => {
  const words = str.split(" ");
  if (!words.length) return "";
  const firstLetter = str.charAt(0);
  if (firstLetter === firstLetter.toUpperCase()) return str;
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

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
  return yearPhrase && `(active ${yearPhrase})`;
};

export const formatCecilianAsOption = (cecilian, selectedOptions = []) => ({
  key: cecilian.slug,
  label: cecilian.displayName,
  extension: formatLabel(cecilian),
  picture: cecilian?.user?.picture,
  selected: selectedOptions
    .map((option) => option.key)
    .includes(cecilian?.slug),
});

export const formatCecilianForInput = (cecilianName) => ({
  displayName: formatCase(cecilianName),
});

export const cecilianSelectionSorter = (_) => (cecilians) => {
  if (!cecilians) return [];
  return cecilians.slice().sort((a, b) => {
    if (String(a?.label) < String(b?.label)) return -1;
    if (String(a?.label) > String(b?.label)) return 1;
    return 0;
  });
};
