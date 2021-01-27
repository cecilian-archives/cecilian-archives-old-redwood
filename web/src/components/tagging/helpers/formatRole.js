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
  picture: null,
  selected: selectedOptions.map((option) => option.key).includes(role?.id),
});

export const formatRoleForInput = ({ type, name, event }) => ({
  type,
  name,
  inherentEventId: event?.id || undefined,
});
