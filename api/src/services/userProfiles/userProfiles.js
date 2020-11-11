import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const userProfiles = () => {
  return db.userProfile.findMany();
};

export const userProfile = ({ id }) => {
  return db.userProfile.findOne({
    where: { id },
  });
};

export const createUserProfile = ({ input }) => {
  return db.userProfile.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateUserProfile = ({ id, input }) => {
  return db.userProfile.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteUserProfile = ({ id }) => {
  return db.userProfile.delete({
    where: { id },
  });
};

export const UserProfile = {
  user: (_obj, { root }) =>
    db.userProfile.findOne({ where: { id: root.id } }).user(),
  cecilian: (_obj, { root }) =>
    db.userProfile.findOne({ where: { id: root.id } }).cecilian(),
  contactDetails: (_obj, { root }) =>
    db.userProfile.findOne({ where: { id: root.id } }).contactDetails(),
  anniversary60: (_obj, { root }) =>
    db.userProfile.findOne({ where: { id: root.id } }).anniversary60(),
};
