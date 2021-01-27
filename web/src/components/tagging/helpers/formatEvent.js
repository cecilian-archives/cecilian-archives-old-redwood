const formatLabel = (event) => {
  const year = event.inherentYear;
  const yearPhrase = year ? year.name : null;
  return yearPhrase;
};

export const formatEventAsOption = (event, selectedOptions = []) => ({
  key: event.id,
  label: event.name,
  extension: formatLabel(event),
  picture: null,
  selected: selectedOptions.map((option) => option.key).includes(event?.id),
});

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
