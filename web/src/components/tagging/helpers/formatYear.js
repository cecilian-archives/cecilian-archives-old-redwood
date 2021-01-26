const formatLabel = (year) => {
  const events = year.events
    .filter((event) => event.type === "SHOW")
    .map((event) => event.name)
    .sort();
  const eventPhrase = events.length ? events.join("; ") : null;
  return eventPhrase;
};

export const formatYearAsOption = (year, selectedOptions = []) => ({
  key: year.slug,
  label: year.name,
  extension: formatLabel(year),
  picture: null,
  selected: selectedOptions.map((option) => option.key).includes(year?.slug),
});

export const formatYearForInput = (yearName) => ({
  slug: yearName,
  name: yearName,
});
