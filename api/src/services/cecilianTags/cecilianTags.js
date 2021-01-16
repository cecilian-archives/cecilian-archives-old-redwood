import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const cecilianTags = () => {
  return db.cecilianTag.findMany();
};

export const cecilianTag = ({ id }) => {
  return db.cecilianTag.findUnique({
    where: { id },
  });
};

export const createCecilianTag = ({ input }) => {
  return db.cecilianTag.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateCecilianTag = ({ id, input }) => {
  return db.cecilianTag.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteCecilianTag = ({ id }) => {
  return db.cecilianTag.delete({
    where: { id },
  });
};

export const CecilianTag = {
  cecilian: (_obj, { root }) =>
    db.cecilianTag.findUnique({ where: { id: root.id } }).cecilian(),
  tag: (_obj, { root }) =>
    db.cecilianTag.findUnique({ where: { id: root.id } }).tag(),
};
