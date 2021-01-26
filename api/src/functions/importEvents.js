import { createEvent } from "src/services/events/events";
import { years } from "src/services/years/years";

const data = {};

export const handler = async (event, context) => {
  const allYears = await years();
  const eventInputs = data.events
    .filter((event) => event.type !== "SHOW")
    .sort((a, b) => {
      if (a?.year?.name < b?.year?.name) {
        return -1;
      }
      if (a?.year?.name > b?.year?.name) {
        return 1;
      }
      return 0;
    })
    .map((event) => ({
      type: event?.type,
      name: event?.name,
      inherentYearId: allYears.find((year) => year.slug === event?.year?.name)
        ?.id,
    }));
  // eventInputs.reduce(
  //   (acc, input) =>
  //     acc.then((a) => createEvent({ input }).then((r) => a.concat([r]))),
  //   Promise.resolve([])
  // );
  // https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "importEvents function ran",
      events: eventInputs,
    }),
  };
};
