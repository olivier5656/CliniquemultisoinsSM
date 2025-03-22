import React from 'react';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f0e8dd] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <img 
          src="https://i.imgur.com/LhHzOV1.png" 
          alt="Clinique Multi-Soins SM Logo" 
          className="h-24 mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page non trouvée</h1>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas. Mais ne vous inquiétez pas,
          nos bas supports sont toujours disponibles sur notre page d'accueil !
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#e4dcd1] text-gray-800 rounded-lg hover:bg-[#d6cec3] transition-colors duration-300"
        >
          <Home className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;