import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Home() {
  const [selectedLink, setSelectedLink] = useState(null);

 
  const linkContentMap = {
    link1: <div>Content for Link 1</div>,
    link2: <div>Content for link 2</div>,
    link3: <div>Content for Link 3</div>,
    // Add more links and corresponding content here as needed
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className='flex max-w-7xl p-4 mx-auto gap-4 '>
      <div className='w-1/3 h-screen'>
        <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
          {/* Search Bar */}
          <div className="flex  max-w-5xl ">
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 px-3 py-3 ml-2  sm:py-3 border border-gray-300 rounded-l-md shadow-md focus:outline-none  text-sm sm:text-base border-r-0" 
            />
            <button 
              className="flex items-center border-l-0 mr-2 justify-center px-4 sm:px-5   bg-slate-700 text-gray-100 rounded-r-md shadow-md hover:bg-slate-600 focus:outline-none  text-sm sm:text-base"
            >
              <FaSearch className="text-gray-100" />
              <span className="ml-2">Search</span>
            </button>
          </div>

          {/* Links Section */}
          <div className="rounded-md overflow-hidden">
            <div className="p-4 h-screen overflow-y-auto flex flex-col gap-5">
              {Object.keys(linkContentMap).map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-blue-500 hover:underline" 
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-auto text-gray-500 text-sm">
            &copy; 2024 MyWebsite | All rights reserved
          </div>
        </div>
      </div>
      
      <div className='w-2/3'>
        <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
          {/* Display selected link's content */}
          {selectedLink && linkContentMap[selectedLink]}
        </div>
      </div>
    </div>
  );
}


