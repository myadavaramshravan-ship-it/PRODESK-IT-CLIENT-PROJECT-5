const sanitizeText = (text) => {
  if (!text) return "";

  return text
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/script/gi, "")
    .trim();
};

module.exports = sanitizeText;