'use client';
import React, {useState} from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// TODO: EDIT LINK LOGIC
const itemsPerPage = 3;

const TableComponent = ({ data }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const goToPage = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const goToPreviousPage = (event) => {
    setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1));
  };

  const goToNextPage = (event) => {
    setCurrentPage((prevCurrentPage) => Math.min(prevCurrentPage + 1, totalPages));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Test Name</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Material</th>
            <th scope="col" className="px-6 py-3">Density</th>
            <th scope="col" className="px-6 py-3">Specific Heat Capacity</th>
            <th scope="col" className="px-6 py-3">TC Distance</th>
            <th scope="col" className="px-6 py-3">Diffusivity</th>
            <th scope="col" className="px-6 py-3">Conductivity</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        
              <td className="px-6 py-4">{row.testName}</td>
              <td className="px-6 py-4">{row.date}</td>
              <td className="px-6 py-4">{row.material}</td>
              <td className="px-6 py-4">{row.density}</td>
              <td className="px-6 py-4">{row.specificHeatCapacity}</td>
              <td className="px-6 py-4">{row.tcDistance}</td>
              <td className="px-6 py-4">{row.diffusivity}</td>
              <td className="px-6 py-4">{row.conductivity}</td>
              <td className="px-6 py-4">
              
                <a href="#" className="font-medium text-red-600 dark:red-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(endIndex, data.length)}</span> of{' '}
              <span className="font-medium">{data.length}</span> results
            </p>
          </div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href='#'
              onClick={goToPreviousPage}
              className={`relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                currentPage === 1 ? ' cursor-not-allowed opacity-50' : ''
              }`}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            {/* You could add page number buttons here */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
              <a
                key={number}
                href="#"
                onClick={(event) => goToPage(number, event)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  currentPage === number
                    ? 'bg-red-600 text-white'
                    : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                } focus:z-20 focus:outline-offset-0`}
              >
                {number}
              </a>
              ))}
            <a
              href='#'
              onClick={goToNextPage}
              className={`relative inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                currentPage === totalPages ? ' cursor-not-allowed opacity-50' : ''
              }`}
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;

