import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const archiveItemCecilians = () => {
  return db.archiveItemCecilian.findMany();
};

export const archiveItemCecilian = ({ id }) => {
  return db.archiveItemCecilian.findOne({
    where: { id },
  });
};

export const createArchiveItemCecilian = ({ input }) => {
  return db.archiveItemCecilian.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateArchiveItemCecilian = ({ id, input }) => {
  return db.archiveItemCecilian.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteArchiveItemCecilian = ({ id }) => {
  return db.archiveItemCecilian.delete({
    where: { id },
  });
};

export const ArchiveItemCecilian = {
  cecilian: (_obj, { root }) =>
    db.archiveItemCecilian.findOne({ where: { id: root.id } }).cecilian(),
  item: (_obj, { root }) =>
    db.archiveItemCecilian.findOne({ where: { id: root.id } }).item(),
};
