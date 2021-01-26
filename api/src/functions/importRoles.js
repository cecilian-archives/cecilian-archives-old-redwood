import { createRole } from "src/services/roles/roles";

const data = {
  roles: [
    {
      type: "COMMITTEE",
      name: "President",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Vice-President",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Secretary",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Treasurer",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Stores Manager",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Producer",
      event: null,
    },
    {
      type: "PERFORMANCE",
      name: "Joe Casey",
      event: 95,
    },
    {
      type: "COMMITTEE",
      name: "Social",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Past President",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Membership",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Director",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Orchestra Manager",
      event: null,
    },
    {
      type: "SOCIETY",
      name: "Honorary Member",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Fundraising",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Media",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Company Manager",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Website",
      event: null,
    },
    {
      type: "SOCIETY",
      name: "Guest Speaker",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Committee Member",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Business Manager",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Front of House Manager",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Costume Manager",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Sponsorship",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Musical Director",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Conductor",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Stores Manager/Tech Liaison",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Publicity",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Ticket Manager",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "Technical Manager",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Choreographer",
      event: null,
    },
    {
      type: "SOCIETY",
      name: "Honorary President",
      event: null,
    },
    {
      type: "PRODUCTION",
      name: "Stage Manager",
      event: null,
    },
    {
      type: "PERFORMANCE",
      name: "The Pirate King",
      event: 1,
    },
    {
      type: "PRODUCTION",
      name: "Technical Director",
      event: null,
    },
    {
      type: "SOCIETY",
      name: "Honorary Vice-President",
      event: null,
    },
    {
      type: "COMMITTEE",
      name: "University Affairs",
      event: null,
    },
  ],
};

export const handler = async (event, context) => {
  const roleInputs = data.roles
    .filter((role) => role.type !== "PERFORMANCE")
    .map((role) => ({
      type: role?.type,
      name: role?.name,
      // inherentEventId: role?.event || undefined,
    }));
  roleInputs.reduce(
    (acc, input) =>
      acc.then((a) => createRole({ input }).then((r) => a.concat([r]))),
    Promise.resolve([])
  );
  // https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "importRoles function ran",
      roles: roleInputs,
    }),
  };
};
