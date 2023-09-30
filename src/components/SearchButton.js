import React from 'react';

const SearchButton = ({ onSearch }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onSearch}
    >
      Search
    </button>
  );
};

export default SearchButton;