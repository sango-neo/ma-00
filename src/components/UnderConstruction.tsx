

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img 
        src="/assets/animated/under-construction-trans.gif"
        alt="Under Construction Animation"
        className="mb-8"
        width={192}
        height={192}
      />
      

      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Under Construction
      </h1>
      
      <p className="text-gray-600 text-center max-w-md">
        This page is currently under construction. Please check back later for updates!
      </p>
    </div>
  );
};

export default UnderConstruction; 