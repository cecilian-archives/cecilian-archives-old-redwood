import { db } from "src/lib/db";
import { generateSlug } from "../utils";

export const cecilians = () => {
  return db.cecilian.findMany();
};

export const searchCecilians = ({ needle, skip, take }) => {
  if (!needle) return [];
  return db.cecilian.findMany({
    where: {
      OR: [
        {
          displayName: {
            contains: needle,
            mode: "insensitive",
          },
        },
        {
          otherNames: {
            contains: needle,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: [{ displayName: "asc" }],
    skip: skip || undefined,
    take: take || undefined,
  });
};

export const cecilian = ({ id }) => {
  return db.cecilian.findUnique({
    where: { id },
  });
};

export const createCecilian = ({ input }) => {
  return db.cecilian.create({
    data: {
      ...input,
      slug: generateSlug(),
    },
  });
};

export const updateCecilian = ({ id, input }) => {
  return db.cecilian.update({
    data: input,
    where: { id },
  });
};

export const deleteCecilian = ({ id }) => {
  return db.cecilian.delete({
    where: { id },
  });
};

export const Cecilian = {
  user: (_obj, { root }) =>
    db.cecilian.findUnique({ where: { id: root.id } }).user(),
  tags: (_obj, { root }) =>
    db.cecilian.findUnique({ where: { id: root.id } }).tags(),
  inArchiveItems: (_obj, { root }) =>
    db.cecilian.findUnique({ where: { id: root.id } }).inArchiveItems(),
  authoredArchiveItems: (_obj, { root }) =>
    db.cecilian.findUnique({ where: { id: root.id } }).authoredArchiveItems(),
};
