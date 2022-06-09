const Search = ({ children }) => {
  return (
    <input
      value={children}
      className="bg-yellow-600 w-20 text-white px-4 py-1 rounded-lg cursor-pointer"
      type={"submit"}
    />
  );
};

export default Search;
