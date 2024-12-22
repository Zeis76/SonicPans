import React from 'react';

export default function CompanyInfo() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Über uns</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Unternehmensprofil</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Firmensitz:</span>
              <span>Freiburg, Deutschland</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Gründungsjahr:</span>
              <span>2012</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Handgefertigte Instrumente:</span>
              <span>500+ pro Jahr</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Hauptprodukte:</span>
              <span>Handpans, Zubehör</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Qualitätsmerkmale</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1621447980929-6438f2f89965?auto=format&fit=crop&w=200&q=80" 
                alt="Handgefertigt"
                className="w-16 h-16 mx-auto mb-2 object-cover rounded"
              />
              <span className="text-sm">Handgefertigt</span>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1617494532490-144ed7cd4d3c?auto=format&fit=crop&w=200&q=80" 
                alt="Meisterqualität"
                className="w-16 h-16 mx-auto mb-2 object-cover rounded"
              />
              <span className="text-sm">Meisterqualität</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}