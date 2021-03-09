import { db } from "src/lib/db";

export const archiveItemCecilians = () => {
  return db.archiveItemCecilian.findMany();
};

export const archiveItemCecilian = ({ id }) => {
  return db.archiveItemCecilian.findUnique({
    where: { id },
  });
};

export const createArchiveItemCecilian = ({ input }) => {
  return db.archiveItemCecilian.create({
    data: input,
  });
};

export const updateArchiveItemCecilian = ({ id, input }) => {
  return db.archiveItemCecilian.update({
    data: input,
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
    db.archiveItemCecilian.findUnique({ where: { id: root.id } }).cecilian(),
  item: (_obj, { root }) =>
    db.archiveItemCecilian.findUnique({ where: { id: root.id } }).item(),
};
