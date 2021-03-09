import { db } from "src/lib/db";
import { generateSlug } from "../utils";

export const archiveFiles = () => {
  return db.archiveFile.findMany();
};

export const archiveFile = ({ id }) => {
  return db.archiveFile.findUnique({
    where: { id },
  });
};

export const createArchiveFile = ({ input }) => {
  return db.archiveFile.create({
    data: {
      ...input,
      slug: generateSlug(),
    },
  });
};

export const updateArchiveFile = ({ id, input }) => {
  return db.archiveFile.update({
    data: input,
    where: { id },
  });
};

export const deleteArchiveFile = ({ id }) => {
  return db.archiveFile.delete({
    where: { id },
  });
};

export const ArchiveFile = {
  items: (_obj, { root }) =>
    db.archiveFile.findUnique({ where: { id: root.id } }).items(),
  deletedBy: (_obj, { root }) =>
    db.archiveFile.findUnique({ where: { id: root.id } }).deletedBy(),
};
