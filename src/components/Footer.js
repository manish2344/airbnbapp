import React from 'react';

const Footer = () => {
  const categories = [
    'Corporate Events', 'Team Building', 'Workshops', 'Training Programs', 'Leadership', 'Skill Development', 'CSR Activities', 'Employee Engagement'
  ];

  const popularLocations = [
    { name: 'Mumbai', type: 'Corporate Office' },
    { name: 'Delhi', type: 'Sales & Marketing' },
    { name: 'Bangalore', type: 'R&D Center' },
    { name: 'Hyderabad', type: 'Operations Hub' },
    { name: 'Pune', type: 'Training Center' },
    { name: 'Chennai', type: 'Customer Support' },
    { name: 'Kolkata', type: 'Regional Office' },
    { name: 'Ahmedabad', type: 'Finance & Accounting' },
    { name: 'Noida', type: 'Technology Services' },
    { name: 'Gurgaon', type: 'Consulting & Advisory' },
    { name: 'Jaipur', type: 'Training & Development' },
    { name: 'Indore', type: 'Client Services' },
    { name: 'Chandigarh', type: 'Outreach Programs' },
    { name: 'Lucknow', type: 'Resource Management' },
    { name: 'Nagpur', type: 'Employee Relations' },
    { name: 'Vizag', type: 'Product Development' },
    { name: 'Coimbatore', type: 'Manufacturing Unit' },
  ];

  const footerLinks = [
    {
      title: 'About Us',
      links: ['Our Journey', 'Vision & Mission', 'Leadership Team']
    },
    {
      title: 'Services',
      links: ['Consulting', 'Corporate Training', 'Skill Development']
    },
    {
      title: 'Contact',
      links: ['Reach Us', 'Career Opportunities', 'Customer Support']
    }
  ];

  return (
    <footer className="bg-gray-100 pt-8 pb-6 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4 text-center">GMIndia - Empowering Growth</h2>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category, index) => (
            <span key={index} className="cursor-pointer px-3 py-1 bg-white rounded text-sm hover:bg-gray-200">
              {category}
            </span>
          ))}
        </div>
        
        {/* Popular Locations */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {popularLocations.map((location, index) => (
            <div key={index} className="bg-white p-3 border rounded hover:shadow-md">
              <h3 className="font-medium">{location.name}</h3>
              <p className="text-sm text-gray-500">{location.type}</p>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium mb-2">{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="text-sm text-gray-600 mb-1 hover:underline">
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs mt-4">
        © 2024 GMIndia - All rights reserved. | Designed by Manish
      </div>
    </footer>
  );
};

export default Footer;
