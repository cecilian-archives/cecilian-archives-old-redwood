const formatLabel = (role) => {
  const event = role.inherentEvent;
  const year = event?.inherentYear?.name || null;
  const yearPhrase = year ? `(${year})` : null;
  const eventPhrase = event
    ? yearPhrase
      ? `${event.name} ${yearPhrase}`
      : event.name
    : null;
  return eventPhrase;
};

export const formatRoleAsOption = (role, selectedOptions = []) => ({
  key: role.id,
  label: role.name,
  type: role.type,
  extension: formatLabel(role),
  relations: { event: role?.inherentEvent },
  picture: null,
  selected: selectedOptions.map((option) => option.key).includes(role?.id),
});

export const formatRoleForInput = ({ type, name, event }) => ({
  type,
  name,
  inherentEventId: event?.id || undefined,
});

export const roleSelectionSorter = (types) => (roles) => {
  if (!roles) return [];
  const typenames = Object.fromEntries(
    types?.enumValues?.map((val, idx) => [val.name, idx])
  );
  return roles.slice().sort((a, b) => {
    if (typenames[a?.type] < typenames[b?.type]) return -1;
    if (typenames[a?.type] > typenames[b?.type]) return 1;
    if (String(a?.label) < String(b?.label)) return -1;
    if (String(a?.label) > String(b?.label)) return 1;
    return 0;
  });
};
