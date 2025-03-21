import React from 'react';
import { Star, Quote } from 'lucide-react';

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  role: string;
  avatar: string;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icône de citation */}
      <div className="mb-6 text-[#e4dcd1]">
        <Quote className="h-10 w-10" />
      </div>
      
      {/* Texte du témoignage */}
      <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
      
      {/* Étoiles */}
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[#e4dcd1] fill-current" />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;