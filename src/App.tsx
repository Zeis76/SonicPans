import React from 'react';
import { Mail, Phone, Send, Package, Shield, Clock, Star, ChevronRight } from 'lucide-react';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import CompanyInfo from './components/CompanyInfo';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Mail className="w-4 h-4" />
            <span>kontakt@beispiel.de</span>
            <Phone className="w-4 h-4" />
            <span>+49 123 456789</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 hover:text-blue-200">
              <Send className="w-4 h-4" />
              <span>Nachricht senden</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductGallery />
          <ProductDetails />
        </div>

        <div className="mt-12">
          <CompanyInfo />
        </div>
      </main>
    </div>
  );
}

export default App;