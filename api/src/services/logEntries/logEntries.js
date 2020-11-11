import { db } from "src/lib/db";

export const logEntries = () => {
  return db.logEntry.findMany();
};

export const logEntry = ({ id }) => {
  return db.logEntry.findOne({
    where: { id },
  });
};

export const createLogEntry = ({ input }) => {
  return db.logEntry.create({
    data: input,
  });
};

export const updateLogEntry = ({ id, input }) => {
  return db.logEntry.update({
    data: input,
    where: { id },
  });
};

export const deleteLogEntry = ({ id }) => {
  return db.logEntry.delete({
    where: { id },
  });
};
