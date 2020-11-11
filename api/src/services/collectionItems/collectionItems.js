import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const collectionItems = () => {
  return db.collectionItem.findMany();
};

export const collectionItem = ({ id }) => {
  return db.collectionItem.findOne({
    where: { id },
  });
};

export const createCollectionItem = ({ input }) => {
  return db.collectionItem.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateCollectionItem = ({ id, input }) => {
  return db.collectionItem.update({
    data: foreignKeyReplacement(input),
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
    db.collectionItem.findOne({ where: { id: root.id } }).item(),
  collection: (_obj, { root }) =>
    db.collectionItem.findOne({ where: { id: root.id } }).collection(),
  addedBy: (_obj, { root }) =>
    db.collectionItem.findOne({ where: { id: root.id } }).addedBy(),
};
