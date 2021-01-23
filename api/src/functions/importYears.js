import { createYear } from "src/services/years/years";

const data = {
  years: {},
};

export const handler = async (event, context) => {
  const yearInputs = Object.keys(data.years)
    .sort()
    .map((year) => ({ slug: year, name: year }));
  yearInputs.reduce(
    (acc, input) =>
      acc.then((a) => createYear({ input }).then((r) => a.concat([r]))),
    Promise.resolve([])
  );
  // https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "importYears function ran",
    }),
  };
};
