import { db } from "src/lib/db";

export const years = () => {
  return db.year.findMany();
};

export const searchYears = ({ needle, skip, take }) => {
  if (!needle) return years();
  return db.year.findMany({
    where: {
      name: {
        contains: needle,
        mode: "insensitive",
      },
    },
    orderBy: [{ name: "asc" }],
    skip: skip || undefined,
    take: take || undefined,
  });
};

export const year = ({ id }) => {
  return db.year.findUnique({
    where: { id },
  });
};

export const yearBySlug = ({ slug }) => {
  return db.year.findUnique({
    where: { slug },
  });
};

export const createYear = ({ input }) => {
  return db.year.create({
    data: input,
  });
};

export const updateYear = ({ id, input }) => {
  return db.year.update({
    data: input,
    where: { id },
  });
};

export const deleteYear = ({ id }) => {
  return db.year.delete({
    where: { id },
  });
};

export const Year = {
  events: (_obj, { root }) =>
    db.year.findUnique({ where: { id: root.id } }).events(),
  inTags: (_obj, { root }) =>
    db.year.findUnique({ where: { id: root.id } }).inTags(),
};
