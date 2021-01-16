import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const userContacts = () => {
  return db.userContact.findMany();
};

export const userContact = ({ id }) => {
  return db.userContact.findUnique({
    where: { id },
  });
};

export const createUserContact = ({ input }) => {
  return db.userContact.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateUserContact = ({ id, input }) => {
  return db.userContact.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteUserContact = ({ id }) => {
  return db.userContact.delete({
    where: { id },
  });
};

export const UserContact = {
  user: (_obj, { root }) =>
    db.userContact.findUnique({ where: { id: root.id } }).user(),
  UserProfile: (_obj, { root }) =>
    db.userContact.findUnique({ where: { id: root.id } }).UserProfile(),
};
