import { db } from "src/lib/db";
import { generateSlug, foreignKeyReplacement } from "../utils";

export const cecilians = () => {
  return db.cecilian.findMany();
};

export const cecilian = ({ id }) => {
  return db.cecilian.findOne({
    where: { id },
  });
};

export const createCecilian = ({ input }) => {
  return db.cecilian.create({
    data: {
      ...foreignKeyReplacement(input),
      slug: generateSlug(),
    },
  });
};

export const updateCecilian = ({ id, input }) => {
  return db.cecilian.update({
    data: input,
    where: { id },
  });
};

export const deleteCecilian = ({ id }) => {
  return db.cecilian.delete({
    where: { id },
  });
};

export const Cecilian = {
  user: (_obj, { root }) =>
    db.cecilian.findOne({ where: { id: root.id } }).user(),
  tags: (_obj, { root }) =>
    db.cecilian.findOne({ where: { id: root.id } }).tags(),
  inArchiveItems: (_obj, { root }) =>
    db.cecilian.findOne({ where: { id: root.id } }).inArchiveItems(),
  authoredArchiveItems: (_obj, { root }) =>
    db.cecilian.findOne({ where: { id: root.id } }).authoredArchiveItems(),
};
