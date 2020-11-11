import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const years = () => {
  return db.year.findMany();
};

export const year = ({ id }) => {
  return db.year.findOne({
    where: { id },
  });
};

export const createYear = ({ input }) => {
  return db.year.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateYear = ({ id, input }) => {
  return db.year.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteYear = ({ id }) => {
  return db.year.delete({
    where: { id },
  });
};

export const Year = {
  events: (_obj, { root }) =>
    db.year.findOne({ where: { id: root.id } }).events(),
  inTags: (_obj, { root }) =>
    db.year.findOne({ where: { id: root.id } }).inTags(),
};
