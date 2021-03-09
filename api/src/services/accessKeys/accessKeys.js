import { db } from "src/lib/db";

export const accessKeys = () => {
  return db.accessKey.findMany();
};

export const accessKey = ({ id }) => {
  return db.accessKey.findUnique({
    where: { id },
  });
};

export const accessKeyByKey = ({ key }) => {
  return db.accessKey.findUnique({
    where: { key },
  });
};

export const createAccessKey = ({ input }) => {
  return db.accessKey.create({
    data: input,
  });
};

export const updateAccessKey = ({ id, input }) => {
  return db.accessKey.update({
    data: input,
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
    db.accessKey.findUnique({ where: { id: root.id } }).owner(),
  usedBy: (_obj, { root }) =>
    db.accessKey.findUnique({ where: { id: root.id } }).usedBy(),
};
