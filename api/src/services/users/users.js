import { db } from "src/lib/db";
import { requireAuth } from "src/lib/auth";
import { context } from "@redwoodjs/api";
import { accessKeyByKey } from "src/services/accessKeys/accessKeys";
import analytics from "src/lib/analytics";
import { generateSlug } from "../utils";

export const users = () => {
  return db.user.findMany();
};

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  });
};

export const userBySubject = ({ subject }) => {
  return db.user.findUnique({
    where: { subject },
  });
};

export const createUser = async ({ input }) => {
  requireAuth();
  const subject = context.currentUser.sub || context.currentUser.jwt.sub;
  const { key, firstNames, lastNames, picture } = input;

  const checkUser = await userBySubject({ subject });
  if (checkUser) {
    analytics.track({
      userId: subject,
      event: "User creation error",
      properties: {
        subject,
        error:
          "Attempted to create a user, but one already exists for this subject",
      },
    });
    throw new Error("You've already verified a valid key. Refresh the page.");
  }

  const foundKey = await accessKeyByKey({ key });
  if (!foundKey) {
    analytics.track({
      userId: subject,
      event: "User creation error",
      properties: {
        subject,
        key,
        error: "Attempted to verify with invalid key",
      },
    });
    throw new Error("That's not a valid archive key");
  }

  const user = await db.user.create({
    data: {
      subject,
      slug: generateSlug(),
      verifiedByKey: { connect: { id: foundKey.id } },
      profile: {
        create: {
          firstNames,
          lastNames,
          picture,
        },
      },
      roles: {
        connectOrCreate: {
          where: { roleName: "verifiedCecilian" },
          create: {
            roleName: "verifiedCecilian",
            accessLevel: 0,
          },
        },
      },
    },
  });
  analytics.track({
    userId: subject,
    event: "User created",
    properties: {
      subject,
      key,
    },
  });
  return user;
};

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  });
};

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  });
};

export const User = {
  profile: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).profile(),
  accessKey: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).accessKey(),
  verifiedByKey: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).verifiedByKey(),
  roles: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).roles(),
  archiveItemsCreated: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).archiveItemsCreated(),
  collectionsOwned: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).collectionsOwned(),
  collectionsCreated: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).collectionsCreated(),
  ArchiveItem: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).ArchiveItem(),
  ArchiveFile: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).ArchiveFile(),
  ArchiveCollection: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).ArchiveCollection(),
  CollectionItem: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).CollectionItem(),
};
