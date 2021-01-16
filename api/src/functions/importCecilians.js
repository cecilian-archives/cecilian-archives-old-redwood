import { createCecilian } from "src/services/cecilians/cecilians";

const names = [];

export const handler = async (event, context) => {
  await Promise.all(
    names.map(async (name) => {
      await createCecilian({ input: { displayName: name, otherNames: [] } });
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: "importCecilians function ran",
    }),
  };
};
