const InputSearch = ({ children, keyword, setKeyword }) => {
  return (
    <input
      name="film"
      onChange={(e) =>
        setKeyword({ ...keyword, [e.target.name]: e.target.value })
      }
      value={keyword.film}
      type={"search"}
      className="rounded-md px-2 py-1 w-56 sm:max-w-sm"
      placeholder={children}
    />
  );
};

export default InputSearch;
