import { db } from "src/lib/db";

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
    data: input,
  });
};

export const updateUserContact = ({ id, input }) => {
  return db.userContact.update({
    data: input,
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
