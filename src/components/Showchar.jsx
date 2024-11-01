import React from 'react';

const Showchar = () => {
  return (
    <div className="container mx-auto px-8 mb-6 md:w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 justify-items-center mt-20 flex-wrap md:ml-20 md:w-full">
      <div className="w-full max-w-xs flex flex-col items-center justify-center">
  <p className="text-5xl md:text-7xl sm:text-3xl font-semibold leading-none flex items-center">
    2000<span className="text-yellow-500 ml-1">+</span>
  </p>
  <p className="text-2xl md:text-xl sm:text-lg font-light text-center mt-1">Company</p>
</div>


        {/* Experience */}
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <p className="text-5xl md:text-7xl sm:text-3xl font-semibold leading-none">10 <span className="text-yellow-500">+</span></p>
          <p className="text-2xl md:text-xl sm:text-lg font-light text-center mt-1">Years Exp</p>
        </div>

        {/* Hours Of Digital */}
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <p className="text-5xl md:text-7xl sm:text-3xl font-semibold leading-none">800 <span className="text-yellow-500">+</span></p>
          <p className="text-2xl md:text-xl sm:text-lg font-light text-center mt-1">Hours Of Digital</p>
        </div>

        {/* Tracked Revenue */}
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <p className="text-5xl md:text-7xl sm:text-3xl font-semibold leading-none">150 <span className="text-yellow-500">+</span></p>
          <p className="text-2xl md:text-xl sm:text-lg font-light text-center mt-1">In Tracked Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Showchar;
