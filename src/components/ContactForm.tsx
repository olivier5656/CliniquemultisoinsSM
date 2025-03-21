import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Commander vos bas supports</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e4dcd1]"
          placeholder="Votre nom"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e4dcd1]"
          placeholder="Votre email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e4dcd1]"
          placeholder="Votre numéro de téléphone"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product" className="block text-gray-700 font-medium mb-2">Produit souhaité</label>
        <select
          id="product"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e4dcd1]"
        >
          <option value="">Sélectionnez un produit</option>
          <option value="support-plus">Support Plus</option>
          <option value="daily-comfort">Daily Comfort</option>
          <option value="athletic-support">Athletic Support</option>
          <option value="medical-grade">Medical Grade</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e4dcd1]"
          placeholder="Précisez votre demande, taille, couleur, etc."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#e4dcd1] text-gray-800 py-4 px-6 rounded-md hover:bg-[#d6cec3] transition font-medium text-xl relative overflow-hidden shadow-lg group"
      >
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#e4dcd1] to-[#d6cec3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative flex items-center justify-center">
          Nous contacter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2 animate-bounce"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </form>
  );
};

export default ContactForm;