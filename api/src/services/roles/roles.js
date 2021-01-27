import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const roles = () => {
  return db.role.findMany();
};

export const searchRoles = ({ needle, skip, take }) => {
  if (!needle) return roles();
  return db.role.findMany({
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

export const role = ({ id }) => {
  return db.role.findUnique({
    where: { id },
  });
};

export const createRole = ({ input }) => {
  return db.role.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateRole = ({ id, input }) => {
  return db.role.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteRole = ({ id }) => {
  return db.role.delete({
    where: { id },
  });
};

export const Role = {
  inherentEvent: (_obj, { root }) =>
    db.role.findUnique({ where: { id: root.id } }).inherentEvent(),
  inTags: (_obj, { root }) =>
    db.role.findUnique({ where: { id: root.id } }).inTags(),
};
