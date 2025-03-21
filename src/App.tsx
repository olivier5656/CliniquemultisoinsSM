import React, { useEffect } from 'react';
import { Phone, Mail, Facebook, Home, Users, Heart, Activity, Star } from 'lucide-react';
import ProductCarousel from './components/ProductCarousel';
import TestimonialCard from './components/TestimonialCard';
import ContactForm from './components/ContactForm';
import { products } from './data/products';
import { testimonials } from './data/testimonials';

function App() {
  // Fonction pour gérer le défilement doux
  useEffect(() => {
    // Sélectionner tous les liens qui commencent par #
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Ajouter un écouteur d'événement à chaque lien
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obtenir l'ID de la cible à partir de l'attribut href
        const targetId = this.getAttribute('href');
        
        // Trouver l'élément cible
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Faire défiler doucement jusqu'à l'élément cible
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-[#e4dcd1] text-gray-800 relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d6cec3] rounded-full -mr-32 -mt-32 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#f0e8dd] rounded-full -ml-20 -mb-20 opacity-20"></div>
        
        <div className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <img src="https://i.imgur.com/LhHzOV1.png" alt="Logo" className="h-28 mr-2" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="hover:text-gray-600 transition">Accueil</a>
            <a href="#insuffisance" className="hover:text-gray-600 transition">Insuffisance Veineuse</a>
            <a href="#clientele" className="hover:text-gray-600 transition">À qui s'adresse</a>
            <a href="#apropos" className="hover:text-gray-600 transition">À propos</a>
            <a href="#produits" className="hover:text-gray-600 transition">Produits</a>
            <a href="#temoignages" className="hover:text-gray-600 transition">Témoignages</a>
            <a href="#contact" className="hover:text-gray-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="bg-[#f0e8dd] text-gray-800 py-20 relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#e4dcd1] rounded-full -mr-40 opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#d6cec3] rounded-full -mb-20 opacity-30"></div>
        
        <div className="container mx-auto px-4 flex flex-col relative z-10">
          <h1 className="text-3xl md:text-6xl mb-12 text-left pl-4 mt-8" style={{ fontFamily: "'Great Vibes', cursive" }}>
            <span className="text-gray-800 inline-block transform hover:scale-105 transition-transform duration-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              Clinique Multi-Soins SM
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Soulagez vos jambes avec nos bas supports de qualité</h2>
            <p className="text-xl mb-8 text-gray-700">
              Confort, soutien et style pour vos jambes fatiguées. Nos bas supports sont conçus pour vous accompagner tout au long de la journée.
            </p>
            <div className="flex mb-8">
              <a href="#contact" className="bg-[#e4dcd1] text-gray-800 px-8 py-4 text-lg rounded-md font-medium hover:bg-[#d6cec3] transition flex items-center relative overflow-hidden group">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#e4dcd1] to-[#d6cec3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Nous contacter
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            {/* Image principale avec cadre médical */}
            <div className="relative mx-auto" style={{ maxWidth: "80%" }}>
              <div className="absolute inset-0 border-8 border-[#f0e8dd] rounded-full transform -rotate-3"></div>
              <div className="absolute inset-0 border-4 border-[#d6cec3] rounded-full transform rotate-2"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://i.imgur.com/25fwzZQ.png"
                  alt="Professionnel de santé" 
                  className="w-full h-auto object-cover object-top"
                  style={{ maxHeight: '600px' }}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Stéphanie Morin</h3>
              <p className="text-gray-700">Infirmière clinicienne</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Service à domicile banner */}
      <section className="bg-[#e4dcd1] text-gray-800 py-6 relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 left-1/3 w-20 h-20 bg-[#d6cec3] rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-[#f0e8dd] rounded-full opacity-20"></div>
        
        <div className="container mx-auto px-4 flex items-center justify-center relative z-10">
          <Home className="h-6 w-6 mr-3" />
          <h3 className="text-xl font-semibold">Service à domicile disponible dans toute la région</h3>
        </div>
      </section>

      {/* Insuffisance veineuse section - avec image en couleur naturelle et transparente */}
      <section id="insuffisance" className="py-16 relative overflow-hidden">
        {/* Image de fond avec overlay transparent */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/42GF9lY.png"
            alt="Insuffisance veineuse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">L'insuffisance veineuse : comprendre pour mieux agir</h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2 text-left">
              <p className="text-gray-700 mb-4">
                L'insuffisance veineuse est un trouble circulatoire qui se caractérise par une difficulté des veines à retourner le sang vers le cœur, principalement au niveau des jambes. Ce phénomène provoque une stagnation du sang dans les membres inférieurs, entraînant divers symptômes inconfortables.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Les symptômes courants incluent :</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Sensation de jambes lourdes et fatiguées</li>
                <li>Gonflement des chevilles et des mollets</li>
                <li>Douleurs ou crampes dans les jambes</li>
                <li>Démangeaisons et sensations de brûlure</li>
                <li>Varices ou veines apparentes</li>
                <li>Changements de couleur de la peau</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Sans traitement approprié, l'insuffisance veineuse peut progresser et entraîner des complications plus graves comme des ulcères veineux, des thromboses, des phlébites et même du lymphoedème.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                <strong>Les bas de compression médicale</strong> constituent l'un des traitements les plus efficaces pour soulager les symptômes et prévenir l'aggravation de l'insuffisance veineuse. Ils exercent une pression graduée sur les jambes, plus forte au niveau de la cheville et diminuant vers le haut, ce qui favorise le retour veineux et réduit la stagnation du sang.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Comment fonctionnent les bas de compression ?</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Ils exercent une pression précise et contrôlée sur les jambes</li>
                <li>Ils améliorent la circulation sanguine et le retour veineux</li>
                <li>Ils réduisent l'enflure et la sensation de jambes lourdes</li>
                <li>Ils préviennent l'apparition ou l'aggravation des varices</li>
                <li>Ils soulagent la douleur et l'inconfort</li>
              </ul>
              <p className="text-gray-700">
                Nos bas de compression sont disponibles en différentes classes de compression pour répondre à vos besoins spécifiques, qu'ils soient préventifs ou thérapeutiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* À qui s'adresse section */}
      <section id="clientele" className="py-16 bg-[#f0e8dd] relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-[#e4dcd1] rounded-full opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#d6cec3] rounded-full opacity-50"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-white rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">À qui s'adressent nos produits?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e4dcd1] to-[#f0e8dd] opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <Heart className="h-12 w-12 text-gray-700 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Problèmes veineux et lymphoedème/lipoedèimplements</h3>
                <p className="text-gray-700">
                  Pour la clientèle ayant de l'insuffisance veineuse, souffrant d'ulcère veineux, ou présentant des symptômes de mauvaise circulation. Ainsi que pour la clientèle souffrant de lymphoedème/lipoedème afin de réduire l'enflure.
                </p>
              </div>
            </div>
            
            <div className="relative p-6 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e4dcd1] to-[#f0e8dd] opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-12 w-12 text-gray-700 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Travailleurs et sportifs</h3>
                <p className="text-gray-700">
                  Pour les travailleurs en position debout ou assise prolongée pour favoriser le retour veieux, pour les sportifs cherchant à améliorer leurs performances et leur récupération.
                </p>
              </div>
            </div>
            
            <div className="relative p-6 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e4dcd1] to-[#f0e8dd] opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <Activity className="h-12 w-12 text-gray-700 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Voyageurs et femmes enceintes</h3>
                <p className="text-gray-700">
                  Pour maximiser le confort des voyageurs et prévenir le risque de phlébite
pour les femmes enceintes afin de diminuer l'enflure des jambes et prévenir l'apparition de varices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos section */}
      <section id="apropos" className="py-16 bg-white relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-20 right-0 w-48 h-48 bg-[#f0e8dd] rounded-full -mr-24 opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#e4dcd1] rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">À propos de Stéphanie Morin</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img 
                src="https://i.imgur.com/hvsdPCg.jpeg"
                alt="Stéphanie Morin" 
                className="rounded-full shadow-xl w-full h-auto object-cover aspect-square"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Expertise et expérience</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <p className="text-gray-700">• Infirmière clinicienne depuis plus de 25 ans</p>
                </li>
                <li className="flex items-start">
                  <p className="text-gray-700">• Spécialisée dans le domaine de l'insuffisance veineuse et du lymphoedème</p>
                </li>
                <li className="flex items-start">
                  <p className="text-gray-700">• Vente de bas support et vêtements compressifs avec un service personnalisé</p>
                </li>
                <li className="flex items-start">
                  <p className="text-gray-700">• Service à domicile sans frais supplémentaire</p>
                </li>
                <li className="flex items-start">
                  <p className="text-gray-700">• Autres services offerts à domicile : soins de plaies et lavage d'oreilles</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features - avec design original */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-[#f0e8dd] w-full"></div>
        <div className="bg-[#f0e8dd] py-16 relative overflow-hidden">
          {/* Formes décoratives */}
          <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#e4dcd1] rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 right-0 w-60 h-60 bg-[#d6cec3] rounded-full -mr-20 opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Pourquoi choisir nos bas supports?</h2>
            
            {/* Design épuré avec séparations par lignes minces */}
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#e4dcd1] flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Qualité médicale</h3>
                <p className="text-gray-700 max-w-lg">
                  Nos bas supports sont conçus selon les normes médicales les plus strictes pour un soutien optimal et une efficacité thérapeutique maximale.
                </p>
                <div className="w-24 h-0.5 bg-[#d6cec3] mt-8 rounded-full"></div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#e4dcd1] flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Confort durable</h3>
                <p className="text-gray-700 max-w-lg">
                  Matériaux respirants et durables pour un confort tout au long de la journée, même lors des utilisations prolongées.
                </p>
                <div className="w-24 h-0.5 bg-[#d6cec3] mt-8 rounded-full"></div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#e4dcd1] flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                   </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Design élégant</h3>
                <p className="text-gray-700 max-w-lg">
                  Des designs modernes et élégants qui s'adaptent à tous les styles vestimentaires pour un look discret et professionnel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-[#f0e8dd] w-full"></div>
      </section>

      {/* Products */}
      <section id="produits" className="py-16 bg-white relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-[#f0e8dd] rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-[#e4dcd1] rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#d6cec3] rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos produits populaires</h2>
          
          {/* Carrousel de produits */}
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* Testimonials - Nouveau design */}
      <section id="temoignages" className="py-16 bg-gradient-to-b from-white to-[#f0e8dd] to-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Témoignages de nos clients</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Bouton pour laisser un témoignage */}
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-[#e4dcd1] text-gray-800 rounded-lg hover:bg-[#d6cec3] transition-colors duration-300"
            >
              Partagez votre expérience
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-[#f0e8dd] text-gray-800 relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#e4dcd1] rounded-full -mr-20 -mt-20 opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-[#d6cec3] rounded-full -mb-10 opacity-30"></div>
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-white rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
              <p className="mb-4">
                Vous avez des questions sur nos produits?
              </p>
              <p className="mb-8">
                N'hésitez pas à nous contacter. Notre équipe est là pour vous aider.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Service à domicile</h3>
              <p className="mb-4">
                Stéphanie Morin, infirmière clinicienne, se déplace à votre domicile pour :
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-700">
                <li>Évaluer vos besoins spécifiques</li>
                <li>Prendre vos mesures précises</li>
                <li>Vous conseiller sur le choix des bas adaptés</li>
                <li>Vous montrer comment les mettre correctement</li>
                <li>Assurer un suivi personnalisé</li>
              </ul>
              <p className="mb-8">Disponible dans toute la région, sur rendez-vous.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-700" />
                  <span>+1 819-359-9002</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-700" />
                  <span>fanric1@gmail.com</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61553259999251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#e4dcd1] text-gray-800 p-4 rounded-full hover:bg-[#d6cec3] transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e4dcd1] text-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="https://i.imgur.com/LhHzOV1.png" alt="Logo" className="h-16" />
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">© 2025 Clinique Multi-Soins SM. Tous droits réservés.</p>
              <p>Conçu avec soin pour votre bien-être.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;