import { db } from "src/lib/db";
import { generateSlug } from "../utils";

export const archiveItems = () => {
  return db.archiveItem.findMany();
};

export const archiveItem = ({ id }) => {
  return db.archiveItem.findUnique({
    where: { id },
  });
};

export const createArchiveItem = ({ input }) => {
  return db.archiveItem.create({
    data: {
      ...input,
      slug: generateSlug(),
    },
  });
};

export const updateArchiveItem = ({ id, input }) => {
  return db.archiveItem.update({
    data: input,
    where: { id },
  });
};

export const deleteArchiveItem = ({ id }) => {
  return db.archiveItem.delete({
    where: { id },
  });
};

export const ArchiveItem = {
  collections: (_obj, { root }) =>
    db.archiveItem.findUnique({ where: { id: root.id } }).collections(),
  author: (_obj, { root }) =>
    db.archiveItem.findUnique({ where: { id: root.id } }).author(),
  tags: (_obj, { root }) =>
    db.archiveItem.findUnique({ where: { id: root.id } }).tags(),
  cecilians: (_obj, { root }) =>
    db.archiveItem.findUnique({ where: { id: root.id } }).cecilians(),
  files: (_obj, { root }) =>
    db.archiveItem.findUnique({ where: { id: root.id } }).files(),
  createdBy: (_obj, { root }) =>
    db.archiveItem.findUnique({ where: { id: root.id } }).createdBy(),
  updatedBy: (_obj, { root }) =>
    db.archiveItem.findUnique({ where: { id: root.id } }).updatedBy(),
};
