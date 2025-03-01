import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Maximize, ZoomIn, ZoomOut, Globe } from 'lucide-react';

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Sample country data - you would replace this with your actual data
  const countries = [
    { id: 'usa', name: 'United States', color: '#2563eb', d: "M170,120 L220,120 L220,150 L170,150 Z", info: "Population: 331 million" },
    { id: 'canada', name: 'Canada', color: '#dc2626', d: "M170,90 L220,90 L220,119 L170,119 Z", info: "Population: 38 million" },
    { id: 'brazil', name: 'Brazil', color: '#16a34a', d: "M220,180 L250,180 L250,210 L220,210 Z", info: "Population: 212 million" },
    { id: 'russia', name: 'Russia', color: '#9333ea', d: "M300,90 L400,90 L400,120 L300,120 Z", info: "Population: 144 million" },
    { id: 'china', name: 'China', color: '#ea580c', d: "M350,130 L390,130 L390,160 L350,160 Z", info: "Population: 1.4 billion" },
    { id: 'india', name: 'India', color: '#0891b2', d: "M350,160 L380,160 L380,180 L350,180 Z", info: "Population: 1.38 billion" },
    { id: 'australia', name: 'Australia', color: '#ca8a04', d: "M380,220 L410,220 L410,240 L380,240 Z", info: "Population: 25 million" },
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    // This is the callback function you can use in your UI
    if (onCountrySelect) {
      onCountrySelect(country);
    }
  };

  // This is the callback function you'd integrate with your UI
  const onCountrySelect = (country) => {
    console.log(`Selected country: ${country.name}`);
    // You can replace this with your actual callback logic
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-full bg-gray-800 overflow-hidden rounded-lg">
      {/* Map controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
        <button 
          onClick={handleZoomIn}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ZoomIn className="w-5 h-5 text-gray-700" />
        </button>
        <button 
          onClick={handleZoomOut}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ZoomOut className="w-5 h-5 text-gray-700" />
        </button>
        <button 
          onClick={() => { setZoom(1); setPosition({ x: 0, y: 0 }); }}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <Maximize className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Map title */}
      <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-75 p-2 rounded-lg">
        <div className="flex items-center">
          <Globe className="w-5 h-5 mr-2 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Interactive World Map</h2>
        </div>
      </div>
      
      {/* Map container */}
      <motion.div
        drag
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
        style={{ 
          x: position.x,
          y: position.y,
          scale: zoom,
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <svg 
          viewBox="0 0 500 300" 
          className="w-full h-full"
          style={{ touchAction: "none" }}
        >
          {/* Ocean background */}
          <rect x="0" y="0" width="500" height="300" fill="#1e3a8a" />
          
          {/* Simple continent outlines */}
          <path d="M50,100 C100,80 150,90 200,100 C250,110 300,90 350,100 C400,110 450,130 480,150 C450,200 400,250 350,230 C300,210 250,250 200,220 C150,190 100,220 50,200 C30,180 30,150 50,100 Z" 
                fill="#64748b" stroke="#475569" strokeWidth="2" />
          
          {/* Countries */}
          {countries.map((country) => (
            <motion.path
              key={country.id}
              d={country.d}
              fill={country.color}
              stroke="#fff"
              strokeWidth="1"
              initial={{ opacity: 0.8 }}
              whileHover={{ 
                opacity: 1, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onClick={() => handleCountryClick(country)}
              cursor="pointer"
            />
          ))}
        </svg>
      </motion.div>

      {/* Country info panel */}
      {selectedCountry && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs"
        >
          <div className="flex items-center mb-2">
            <Info className="w-5 h-5 mr-2 text-blue-600" />
            <h3 className="font-bold text-lg">{selectedCountry.name}</h3>
          </div>
          <div 
            className="w-6 h-6 rounded-sm mr-2 mb-2" 
            style={{ backgroundColor: selectedCountry.color }}
          />
          <p className="text-gray-700">{selectedCountry.info}</p>
          <button 
            onClick={() => setSelectedCountry(null)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default WorldMap;