export const generateSlug = (length = 10) => {
  // A 10-character slug allows 8.5M random generations
  // before having a 1% chance of collision
  // (by analysis of the birthday problem)
  return Math.random()
    .toString(36)
    .substring(2, length + 2)
    .toLowerCase();
};

// super hacky workaround function by @rob 🚀
// https://redwoodjs.com/docs/schema-relations#manual-workaround-to-scaffold-relational-models
export const foreignKeyReplacement = (input) => {
  let output = input;
  const foreignKeys = Object.keys(input).filter((k) => k.match(/Id$/));
  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, "");
    const value = input[key];
    delete output[key];
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    });
  });
  return output;
};
