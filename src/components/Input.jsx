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
        className="bg-cyan-50 px-4 max-lg:px-3 py-3 max-lg:py-2 rounded-full focus:outline-0 ring-1 ring-sky-200 focus:ring-2 focus:ring-offset-3 w-90 max-[31.5rem]:w-65 max-md:w-80 text-gray-700 placeholder:text-gray-400 max-md:placeholder:text-xs placeholder:text-sm transition-all"
      />
      <button
        onClick={() => {
          setWord(searchValue);
          setsearchValue("");
        }}
        className="flex justify-center items-center bg-cyan-200 p-2 rounded-full w-10 max-lg:w-9 h-10 max-lg:h-9 hover:scale-90 transition-all cursor-pointer"
      >
        <FiSearch />
      </button>
    </div>
  );
}

export default Input;
