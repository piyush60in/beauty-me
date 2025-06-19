
import { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c63c?w=150&h=150&fit=crop&crop=face',
      content: 'TechFlow has revolutionized our business processes. The AI-powered solutions have increased our efficiency by 300%.',
      backContent: 'Working with TechFlow for over 2 years has been transformative. Their support team is exceptional and the technology keeps evolving.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Innovation Labs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Outstanding support and cutting-edge technology. Our team productivity has never been higher.',
      backContent: 'The integration process was seamless. TechFlow understood our unique requirements and delivered beyond expectations.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, Future Corp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The integration was seamless and the results were immediate. Highly recommend TechFlow to any growing business.',
      backContent: 'TechFlow has become an integral part of our operations. The ROI has been incredible and measurable from day one.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg group perspective-1000 h-64"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden p-8 bg-gray-800 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="relative overflow-hidden rounded-full mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full transition-transform duration-500"
                        style={{
                          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px) scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.05})`
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 p-8 bg-gray-700 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="relative overflow-hidden rounded-full mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "{testimonial.backContent}"
                  </p>
                  <div className="mt-4 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
