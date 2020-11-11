import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const tags = () => {
  return db.tag.findMany();
};

export const tag = ({ id }) => {
  return db.tag.findOne({
    where: { id },
  });
};

export const createTag = ({ input }) => {
  return db.tag.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateTag = ({ id, input }) => {
  return db.tag.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteTag = ({ id }) => {
  return db.tag.delete({
    where: { id },
  });
};

export const Tag = {
  role: (_obj, { root }) => db.tag.findOne({ where: { id: root.id } }).role(),
  event: (_obj, { root }) => db.tag.findOne({ where: { id: root.id } }).event(),
  year: (_obj, { root }) => db.tag.findOne({ where: { id: root.id } }).year(),
  cecilians: (_obj, { root }) =>
    db.tag.findOne({ where: { id: root.id } }).cecilians(),
  archiveItems: (_obj, { root }) =>
    db.tag.findOne({ where: { id: root.id } }).archiveItems(),
};
