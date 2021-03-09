import { db } from "src/lib/db";

export const archiveItemFiles = () => {
  return db.archiveItemFile.findMany();
};

export const archiveItemFile = ({ id }) => {
  return db.archiveItemFile.findUnique({
    where: { id },
  });
};

export const createArchiveItemFile = ({ input }) => {
  return db.archiveItemFile.create({
    data: input,
  });
};

export const updateArchiveItemFile = ({ id, input }) => {
  return db.archiveItemFile.update({
    data: input,
    where: { id },
  });
};

export const deleteArchiveItemFile = ({ id }) => {
  return db.archiveItemFile.delete({
    where: { id },
  });
};

export const ArchiveItemFile = {
  file: (_obj, { root }) =>
    db.archiveItemFile.findUnique({ where: { id: root.id } }).file(),
  item: (_obj, { root }) =>
    db.archiveItemFile.findUnique({ where: { id: root.id } }).item(),
};
