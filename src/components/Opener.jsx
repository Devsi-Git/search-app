function Opener({ handleSearch, setsearchValue, setWord, searchValue }) {
  const results = handleSearch();

  return (
    <div>
      <ul className="flex flex-col gap-1 rounded-3xl w- w-90 max-h-65 overflow-y-scroll [scrollbar-width:none]">
        {results.map((result, index) => (
          <li
            key={index}
            className="bg-cyan-50 px-3 py-2 cursor-pointer"
            onClick={(e) => {
              setsearchValue("");
              setWord(e.target.textContent);
            }}
          >
            {result}
          </li>
        ))}
      </ul>
      {searchValue ? (
        <p className="mt-1 mr-2 text-sm"> {results.length} نتیجه یافت شد </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Opener;
