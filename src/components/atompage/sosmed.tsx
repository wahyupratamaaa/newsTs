import React from 'react';

type SosmedProps = {
  sosmedArray: string[];
  id?: string;
};

const Sosmed: React.FC<SosmedProps> = ({ sosmedArray }) => {
  return (
    <>
      {sosmedArray.map((sosmedArray, id) => (
        <div
          key={id}
          className='text-sm font-medium text-black w-auto h-auto py-3 px-4 rounded-2xl bg-white mr-4'
        >
          {sosmedArray}
        </div>
      ))}
    </>
  );
};

export default Sosmed;
