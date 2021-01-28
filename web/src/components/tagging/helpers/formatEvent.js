const formatLabel = (event) => {
  const year = event.inherentYear;
  const yearPhrase = year ? year.name : null;
  return yearPhrase;
};

export const formatEventAsOption = (event, selectedOptions = []) => ({
  key: event.id,
  label: event.name,
  extension: formatLabel(event),
  relations: { inherentYear: event?.inherentYear?.name },
  picture: null,
  selected: selectedOptions.map((option) => option.key).includes(event?.id),
});

export const formatEventTagDisplay = (tag) => {
  const { inherentYear, year: tagYear } = tag.relations;
  const year = inherentYear || tagYear;
  if (year) return `${tag.label} (${year?.name || year})`;
  return tag.label;
};

export const formatEventForInput = ({
  type,
  name,
  year,
  startDate,
  endDate,
}) => ({
  type,
  name,
  inherentYearId: year?.id || undefined,
  startDate: startDate || undefined,
  endDate: endDate || undefined,
});

export const sortEventsByYear = (events) => {
  // This is a workaround until we can sort by
  // relation fields in Prisma: https://github.com/prisma/prisma/issues/5008
  if (!events) return [];
  return events.slice().sort((a, b) => {
    if (String(a?.inherentYear?.name) < String(b?.inherentYear?.name)) return 1;
    if (String(a?.inherentYear?.name) > String(b?.inherentYear?.name))
      return -1;
    return 0;
  });
};

export const eventSelectionSorter = (_) => (events) => {
  if (!events) return [];
  return events.slice().sort((a, b) => {
    if (String(a?.relations?.inherentYear) < String(b?.relations?.inherentYear))
      return -1;
    if (String(a?.relations?.inherentYear) > String(b?.relations?.inherentYear))
      return 1;
    if (String(a?.relations?.year) < String(b?.relations?.year)) return -1;
    if (String(a?.relations?.year) > String(b?.relations?.year)) return 1;
    if (String(a?.name) < String(b?.name)) return -1;
    if (String(a?.name) > String(b?.name)) return 1;
    return 0;
  });
};
