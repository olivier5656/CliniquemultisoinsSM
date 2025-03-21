import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Type pour les produits
export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalProducts = products.length;
  const itemsToShow = 3;

  // Fonction pour créer un tableau circulaire des produits
  // Cela garantit que le carrousel ne montre jamais un écran blanc
  const getCircularProducts = () => {
    // Dupliquer les produits pour créer un effet de boucle infinie
    return [...products, ...products, ...products];
  };

  const circularProducts = getCircularProducts();

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    let nextIndex = (currentIndex + 1) % totalProducts;
    setCurrentIndex(nextIndex);
    
    // Animation fluide
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-out';
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = '';
          setIsTransitioning(false);
        }
      }, 500);
    } else {
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    let prevIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    setCurrentIndex(prevIndex);
    
    // Animation fluide
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-out';
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = '';
          setIsTransitioning(false);
        }
      }, 500);
    } else {
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Fonction pour obtenir les indices des éléments à afficher
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < itemsToShow; i++) {
      indices.push((currentIndex + i) % totalProducts);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();
  
  // Calculer l'offset pour le carrousel
  // Nous ajoutons totalProducts pour garantir que nous avons toujours des éléments visibles
  const startIndex = currentIndex + totalProducts;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Flèche gauche */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#e4dcd1] text-white p-3 rounded-full shadow-lg hover:bg-[#d6cec3] transition-all duration-300 focus:outline-none"
        aria-label="Produit précédent"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      {/* Carrousel */}
      <div 
        ref={carouselRef} 
        className="flex justify-center gap-4 px-12"
        style={{
          transform: `translateX(calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * 16}px))`,
          transition: 'transform 500ms ease-out'
        }}
      >
        {circularProducts.map((product, index) => (
          <div key={index} className="w-1/3 h-[400px] flex-shrink-0">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                style={{
                  objectPosition: product.name === "Athletic Support" ? "center bottom" : "center center"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold">{product.name}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#e4dcd1] text-white p-3 rounded-full shadow-lg hover:bg-[#d6cec3] transition-all duration-300 focus:outline-none"
        aria-label="Produit suivant"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Indicateurs de page */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setCurrentIndex(index);
              
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 500ms ease-out';
                setTimeout(() => {
                  if (carouselRef.current) {
                    carouselRef.current.style.transition = '';
                    setIsTransitioning(false);
                  }
                }, 500);
              } else {
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              visibleIndices.includes(index) ? 'w-6 bg-[#e4dcd1]' : 'w-2 bg-[#f0e8dd]'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;