import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const accessKeys = () => {
  return db.accessKey.findMany();
};

export const accessKey = ({ id }) => {
  return db.accessKey.findOne({
    where: { id },
  });
};

export const accessKeyByKey = ({ key }) => {
  return db.accessKey.findOne({
    where: { key },
  });
};

export const createAccessKey = ({ input }) => {
  return db.accessKey.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateAccessKey = ({ id, input }) => {
  return db.accessKey.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteAccessKey = ({ id }) => {
  return db.accessKey.delete({
    where: { id },
  });
};

export const AccessKey = {
  owner: (_obj, { root }) =>
    db.accessKey.findOne({ where: { id: root.id } }).owner(),
  usedBy: (_obj, { root }) =>
    db.accessKey.findOne({ where: { id: root.id } }).usedBy(),
};