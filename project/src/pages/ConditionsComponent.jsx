import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const ConditionsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
    <HeaderComponent />
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <button
        onClick={toggleVisibility}
        className="w-full text-center py-3 px-4 mb-4 text-lg font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {isVisible ? 'Verstecke AGB und Datenschutz' : 'AGB und Datenschutz anzeigen'}
      </button>
      
      {isVisible && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Allgemeine Geschäftsbedingungen</h2>
            <p className="text-gray-600">
              Hiermit erklären Sie sich mit den Allgemeinen Geschäftsbedingungen einverstanden. Diese enthalten die Bedingungen für die Nutzung unserer Website und den Erwerb unserer Produkte.
              {/* Weitere AGB-Details hier */}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">Datenschutzrichtlinien</h2>
            <p className="text-gray-600">
              Der Schutz Ihrer Daten ist uns wichtig. Diese Datenschutzrichtlinie beschreibt, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen.
              {/* Weitere Datenschutzdetails hier */}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">Rückgabebedingungen</h2>
            <p className="text-gray-600">
              Wenn Sie mit Ihrem Kauf nicht zufrieden sind, können Sie das Produkt innerhalb von 14 Tagen nach Erhalt zurückgeben.
              {/* Weitere Rückgabebedingungen hier */}
            </p>
          </div>
        </div>
      )}
    </div>
    <FooterComponent />
    </>
  );
};

export default ConditionsComponent;
