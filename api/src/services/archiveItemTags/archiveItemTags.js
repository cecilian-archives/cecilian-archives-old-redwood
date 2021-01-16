import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const archiveItemTags = () => {
  return db.archiveItemTag.findMany();
};

export const archiveItemTag = ({ id }) => {
  return db.archiveItemTag.findUnique({
    where: { id },
  });
};

export const createArchiveItemTag = ({ input }) => {
  return db.archiveItemTag.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateArchiveItemTag = ({ id, input }) => {
  return db.archiveItemTag.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteArchiveItemTag = ({ id }) => {
  return db.archiveItemTag.delete({
    where: { id },
  });
};

export const ArchiveItemTag = {
  item: (_obj, { root }) =>
    db.archiveItemTag.findUnique({ where: { id: root.id } }).item(),
  tag: (_obj, { root }) =>
    db.archiveItemTag.findUnique({ where: { id: root.id } }).tag(),
};
