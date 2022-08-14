import React from 'react';
import DocsIcon from './../icons/DocsIcon';
import RecentIcon from './../icons/RecentIcon';
import StarredIcon from './../icons/StarredIcon';

const FilterWindow = () => {
  return (
    <div className="absolute right-0 z-10 w-full max-w-xs mt-2 bg-white rounded-md shadow top-full text-back">
      <div className="p-4">
        <ul>
          <li className="mb-3">
            <button className="flex items-center justify-start w-full gap-4 px-4 py-3 text-lg font-bold rounded-md hover:text-white hover:bg-secondary">
              <DocsIcon />
              All
            </button>
          </li>
          <li className="mb-3">
            <button className="flex items-center justify-start w-full gap-4 px-4 py-3 text-lg font-bold rounded-md hover:text-white hover:bg-secondary">
              <RecentIcon />
              Recent
            </button>
          </li>
          <li>
            <button className="flex items-center justify-start w-full gap-4 px-4 py-3 text-lg font-bold rounded-md hover:text-white hover:bg-secondary">
              <StarredIcon />
              Starred
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterWindow;
