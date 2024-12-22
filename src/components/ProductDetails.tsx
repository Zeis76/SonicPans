import React from 'react';
import { Shield, Clock, Package, Star, Music, Wrench, Award } from 'lucide-react';

export default function ProductDetails() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Premium Handpan - Mandala Edition</h1>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <span className="text-gray-600">4.9/5 (83 Bewertungen)</span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <span className="text-gray-600">Preis:</span>
          <div className="text-right">
            <span className="text-2xl font-bold">€330.00</span>
            <p className="text-sm text-gray-500">Inkl. MwSt. & Versand</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Produktdetails:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Handgefertigt aus hochwertigem Nitrierstahl</li>
            <li>9 Töne in harmonischer Stimmung</li>
            <li>Durchmesser: 53 cm</li>
            <li>Höhe: 24 cm</li>
            <li>Gewicht: ca. 4,5 kg</li>
            <li>Einzigartiges Mandala-Design auf der Oberseite</li>
            <li>Geflochtener Randschutz aus Naturfasern</li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
            <Music className="w-6 h-6 text-blue-600" />
            <span className="mt-2 text-sm text-center">Professionelle Stimmung</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
            <Wrench className="w-6 h-6 text-blue-600" />
            <span className="mt-2 text-sm text-center">2 Jahre Garantie</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
            <Award className="w-6 h-6 text-blue-600" />
            <span className="mt-2 text-sm text-center">Meisterqualität</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Lieferumfang:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Handpan mit Mandala-Design</li>
            <li>Gepolsterte Tragetasche</li>
            <li>Pflegeset mit Mikrofasertuch</li>
            <li>Stimmungszertifikat</li>
            <li>Detaillierte Spielanleitung</li>
          </ul>
        </div>

        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Jetzt kaufen
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
            Zum Warenkorb hinzufügen
          </button>
        </div>
      </div>
    </div>
  );
}