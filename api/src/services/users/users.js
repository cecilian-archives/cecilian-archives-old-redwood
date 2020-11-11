import { db } from "src/lib/db";
import { generateSlug, foreignKeyReplacement } from "../utils";

export const users = () => {
  return db.user.findMany();
};

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  });
};

export const createUser = ({ input }) => {
  return db.user.create({
    data: {
      ...foreignKeyReplacement(input),
      slug: generateSlug(),
    },
  });
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
    db.user.findOne({ where: { id: root.id } }).profile(),
  accessKey: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).accessKey(),
  verifiedByKey: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).verifiedByKey(),
  roles: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).roles(),
  archiveItemsCreated: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).archiveItemsCreated(),
  collectionsOwned: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).collectionsOwned(),
  collectionsCreated: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).collectionsCreated(),
  UserContact: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).UserContact(),
  ArchiveItem: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).ArchiveItem(),
  ArchiveFile: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).ArchiveFile(),
  ArchiveCollection: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).ArchiveCollection(),
  CollectionItem: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).CollectionItem(),
};
