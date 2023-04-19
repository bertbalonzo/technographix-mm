const Results = ({ results }) => {
    return (
      <div className="mt-4">
        {results.map((result, index) => (
          <div key={index} className="p-4 mb-2 bg-gray-100 rounded">
            <h2 className="text-xl font-bold">{result.company}</h2>
            <p className="text-sm">{result.domain}</p>
            <p className="text-sm">{result.software}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Results;

  
  