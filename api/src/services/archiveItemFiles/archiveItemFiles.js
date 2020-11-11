import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const archiveItemFiles = () => {
  return db.archiveItemFile.findMany();
};

export const archiveItemFile = ({ id }) => {
  return db.archiveItemFile.findOne({
    where: { id },
  });
};

export const createArchiveItemFile = ({ input }) => {
  return db.archiveItemFile.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateArchiveItemFile = ({ id, input }) => {
  return db.archiveItemFile.update({
    data: foreignKeyReplacement(input),
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
    db.archiveItemFile.findOne({ where: { id: root.id } }).file(),
  item: (_obj, { root }) =>
    db.archiveItemFile.findOne({ where: { id: root.id } }).item(),
};
