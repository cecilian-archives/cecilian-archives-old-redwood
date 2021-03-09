import { requireAuth } from "src/lib/auth";
import { db } from "src/lib/db";

export const userProfiles = () => {
  return db.userProfile.findMany();
};

export const userProfile = ({ id }) => {
  return db.userProfile.findUnique({
    where: { id },
  });
};

export const myProfile = async () => {
  requireAuth("verifiedCecilian");
  const userProfile = await db.user
    .findUnique({
      where: { slug: context.currentUser.slug },
    })
    .profile();
  return userProfile;
};

export const createUserProfile = ({ input }) => {
  return db.userProfile.create({
    data: input,
  });
};

export const updateUserProfile = ({ id, input }) => {
  return db.userProfile.update({
    data: input,
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
    db.userProfile.findUnique({ where: { id: root.id } }).user(),
  cecilian: (_obj, { root }) =>
    db.userProfile.findUnique({ where: { id: root.id } }).cecilian(),
  contactDetails: (_obj, { root }) =>
    db.userProfile.findUnique({ where: { id: root.id } }).contactDetails(),
  accessKeys: (_obj, { root }) =>
    db.userProfile.findUnique({ where: { id: root.id } }).accessKeys(),
  anniversary60: (_obj, { root }) =>
    db.userProfile.findUnique({ where: { id: root.id } }).anniversary60(),
};
