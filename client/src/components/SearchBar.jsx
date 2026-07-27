function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search customer or vehicle..."
      aria-label="Search Bookings"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;