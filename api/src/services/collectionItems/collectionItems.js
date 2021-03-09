import { db } from "src/lib/db";

export const collectionItems = () => {
  return db.collectionItem.findMany();
};

export const collectionItem = ({ id }) => {
  return db.collectionItem.findUnique({
    where: { id },
  });
};

export const createCollectionItem = ({ input }) => {
  return db.collectionItem.create({
    data: input,
  });
};

export const updateCollectionItem = ({ id, input }) => {
  return db.collectionItem.update({
    data: input,
    where: { id },
  });
};

export const deleteCollectionItem = ({ id }) => {
  return db.collectionItem.delete({
    where: { id },
  });
};

export const CollectionItem = {
  item: (_obj, { root }) =>
    db.collectionItem.findUnique({ where: { id: root.id } }).item(),
  collection: (_obj, { root }) =>
    db.collectionItem.findUnique({ where: { id: root.id } }).collection(),
  addedBy: (_obj, { root }) =>
    db.collectionItem.findUnique({ where: { id: root.id } }).addedBy(),
};
