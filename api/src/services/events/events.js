import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const events = () => {
  return db.event.findMany();
};

export const searchEvents = ({ needle, skip, take }) => {
  if (!needle) return events();
  return db.event.findMany({
    where: {
      name: {
        contains: needle,
        mode: "insensitive",
      },
    },
    orderBy: [
      {
        inherentYear: {
          id: "desc",
        },
      },
      { name: "asc" },
    ],
    skip: skip || undefined,
    take: take || undefined,
  });
};

export const event = ({ id }) => {
  return db.event.findUnique({
    where: { id },
  });
};

export const createEvent = ({ input }) => {
  return db.event.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateEvent = ({ id, input }) => {
  return db.event.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteEvent = ({ id }) => {
  return db.event.delete({
    where: { id },
  });
};

export const Event = {
  inherentYear: (_obj, { root }) =>
    db.event.findUnique({ where: { id: root.id } }).inherentYear(),
  roles: (_obj, { root }) =>
    db.event.findUnique({ where: { id: root.id } }).roles(),
  inTags: (_obj, { root }) =>
    db.event.findUnique({ where: { id: root.id } }).inTags(),
};
