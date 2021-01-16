import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const userRoles = () => {
  return db.userRole.findMany();
};

export const userRole = ({ id }) => {
  return db.userRole.findUnique({
    where: { id },
  });
};

export const createUserRole = ({ input }) => {
  return db.userRole.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateUserRole = ({ id, input }) => {
  return db.userRole.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteUserRole = ({ id }) => {
  return db.userRole.delete({
    where: { id },
  });
};

export const UserRole = {
  users: (_obj, { root }) =>
    db.userRole.findUnique({ where: { id: root.id } }).users(),
};
