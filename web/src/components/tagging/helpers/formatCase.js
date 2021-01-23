const formatCase = (str) => {
  const words = str.split(" ");
  if (!words.length) return "";
  const firstLetter = str.charAt(0);
  if (firstLetter === firstLetter.toUpperCase()) return str;
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default formatCase;
