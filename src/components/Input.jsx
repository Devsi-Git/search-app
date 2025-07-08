import { FiSearch } from "react-icons/fi";

function Input({ setWord, setsearchValue, searchValue }) {
  return (
    <div className="flex items-center gap-3">
      <input
        value={searchValue}
        onChange={(e) => {
          setsearchValue(e.target.value);
        }}
        placeholder="چه چیزی رو میخای سرچ کنی؟"
        type="text"
        className="bg-cyan-50 px-4 py-3 rounded-full focus:outline-0 ring-1 ring-sky-200 focus:ring-2 focus:ring-offset-3 w-90 text-gray-700 placeholder:text-gray-400 placeholder:text-sm transition-all"
      />
      <button
        onClick={() => {
          setWord(searchValue);
          setsearchValue("");
        }}
        className="flex justify-center items-center bg-cyan-200 p-2 rounded-full w-10 h-10 hover:scale-90 transition-all"
      >
        <FiSearch />
      </button>
    </div>
  );
}

export default Input;
