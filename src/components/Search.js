import { useState } from 'react';

const Search = ({ companies, setResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredCompanies = companies.filter(
      (company) =>
        company.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.software.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredCompanies);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Search for company, domain or software..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="p-2 ml-2 bg-blue-500 text-white rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
