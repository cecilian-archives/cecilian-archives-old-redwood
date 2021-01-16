import { db } from "src/lib/db";
import { foreignKeyReplacement } from "../utils";

export const anniversary60Profiles = () => {
  return db.anniversary60Profile.findMany();
};

export const anniversary60Profile = ({ id }) => {
  return db.anniversary60Profile.findUnique({
    where: { id },
  });
};

export const createAnniversary60Profile = ({ input }) => {
  return db.anniversary60Profile.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateAnniversary60Profile = ({ id, input }) => {
  return db.anniversary60Profile.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteAnniversary60Profile = ({ id }) => {
  return db.anniversary60Profile.delete({
    where: { id },
  });
};

export const Anniversary60Profile = {
  userProfile: (_obj, { root }) =>
    db.anniversary60Profile
      .findUnique({ where: { id: root.id } })
      .userProfile(),
};
