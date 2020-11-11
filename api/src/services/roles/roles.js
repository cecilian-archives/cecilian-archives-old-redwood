import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const roles = () => {
  return db.role.findMany();
};

export const role = ({ id }) => {
  return db.role.findOne({
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
    db.role.findOne({ where: { id: root.id } }).inherentEvent(),
  inTags: (_obj, { root }) =>
    db.role.findOne({ where: { id: root.id } }).inTags(),
};
