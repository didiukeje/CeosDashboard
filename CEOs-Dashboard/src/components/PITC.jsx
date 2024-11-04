const PITC = ({ value, title }) => {
  return (
    <div className="w-[75px] h-[60px] bg-white rounded-lg shadow-md p-3 flex flex-col justify-center items-start">
      {/* Reduced width and height, smaller padding */}
      
      <h2 className="text-sm font-medium text-gray-800">{value}</h2> {/* Reduced font size for value */}
      
      <p className="text-[10px] text-gray-500">{title}</p> {/* Further reduced font size for title */}
    </div>
  );
};

export default PITC;
