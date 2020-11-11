import { db } from "src/lib/db";
import { generateSlug, foreignKeyReplacement } from "../utils";

export const archiveCollections = () => {
  return db.archiveCollection.findMany();
};

export const archiveCollection = ({ id }) => {
  return db.archiveCollection.findOne({
    where: { id },
  });
};

export const createArchiveCollection = ({ input }) => {
  return db.archiveCollection.create({
    data: {
      ...foreignKeyReplacement(input),
      slug: generateSlug(),
    },
  });
};

export const updateArchiveCollection = ({ id, input }) => {
  return db.archiveCollection.update({
    data: input,
    where: { id },
  });
};

export const deleteArchiveCollection = ({ id }) => {
  return db.archiveCollection.delete({
    where: { id },
  });
};

export const ArchiveCollection = {
  owner: (_obj, { root }) =>
    db.archiveCollection.findOne({ where: { id: root.id } }).owner(),
  items: (_obj, { root }) =>
    db.archiveCollection.findOne({ where: { id: root.id } }).items(),
  createdBy: (_obj, { root }) =>
    db.archiveCollection.findOne({ where: { id: root.id } }).createdBy(),
  updatedBy: (_obj, { root }) =>
    db.archiveCollection.findOne({ where: { id: root.id } }).updatedBy(),
};
