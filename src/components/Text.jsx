//eslint-disable-next-line
import { motion } from "framer-motion";

function Text({ text, words }) {
  const highlightWords = (text, words) => {
    if (words === "" || words.length === 0) return text;

    const regexPattern = words
      .filter((word) => word)
      .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");

    if (!regexPattern) return text;

    const regex = new RegExp(`(${regexPattern})`, "g");

    const parts = text.split(regex);

    return parts.map((part, index) =>
      words.includes(part) ? (
        <motion.mark
          initial={{ scaleX: 0.5 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
          className="inline-block bg-cyan-200 rounded-md"
          key={index}
        >
          {part}
        </motion.mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-200 max-sm:w-120 max-md:w-150 max-lg:w-170 max-lg:text-sm text-center leading-7">
      {highlightWords(text, words)}
    </div>
  );
}

export default Text;
