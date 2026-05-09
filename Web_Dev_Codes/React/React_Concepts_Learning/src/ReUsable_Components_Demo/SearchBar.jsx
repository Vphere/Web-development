function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search user..."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;