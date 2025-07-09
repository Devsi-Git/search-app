import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Opener({ handleSearch, setsearchValue, setWord, searchValue }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const results = handleSearch();

  const moveUp = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const moveDown = () => {
    if (selectedIndex < results.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return searchValue.length > 1 ? (
    <div className="flex items-center gap-2">
      <div>
        <ul className="flex flex-col self-center gap-1 rounded-3xl w-80 max-h-65 overflow-y-scroll [scrollbar-width:none]">
          {results.map((result, index) => (
            <li
              key={index}
              className={` ${
                index === selectedIndex ? "bg-cyan-100" : ""
              } bg-cyan-50 px-3 py-2 cursor-pointer`}
              onClick={(e) => {
                setsearchValue("");
                setWord(e.target.textContent);
              }}
            >
              {result}
            </li>
          ))}
        </ul>
        <p className="mt-1 mr-2 text-sm"> {results.length} نتیجه یافت شد </p>
      </div>
      {results.length > 0 ? (
        <div className="flex flex-col gap-1">
          <button
            className="bg-cyan-100 p-3 rounded-xl hover:scale-90 transition-all"
            onClick={moveUp}
          >
            <FaArrowUp />
          </button>
          <button
            className="bg-cyan-100 p-3 rounded-xl hover:scale-90 transition-all"
            onClick={moveDown}
          >
            <FaArrowDown />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
}

export default Opener;
