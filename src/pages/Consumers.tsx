
const Consumers = () => {
  const consumers = [
    {
      company: 'TechStart Inc.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      industry: 'Technology',
      since: '2022',
      growth: '+250%',
      description: 'Increased operational efficiency and reduced costs significantly'
    },
    {
      company: 'Innovation Labs',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
      industry: 'Research',
      since: '2021',
      growth: '+180%',
      description: 'Accelerated research processes with AI-powered analytics'
    },
    {
      company: 'Future Corp',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop',
      industry: 'Manufacturing',
      since: '2020',
      growth: '+320%',
      description: 'Streamlined manufacturing with IoT integration'
    },
    {
      company: 'Digital Solutions',
      logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop',
      industry: 'Consulting',
      since: '2023',
      growth: '+150%',
      description: 'Enhanced client services with advanced analytics platform'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Valued Consumers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies have transformed their operations with our solutions
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Consumer Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consumers.map((consumer, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="relative overflow-hidden rounded-lg mr-4">
                  <img 
                    src={consumer.logo} 
                    alt={consumer.company}
                    className="w-16 h-16 rounded-lg animate-bounce"
                    style={{
                      animation: `bounce 2s infinite ${index * 0.5}s, rotate 4s linear infinite ${index * 0.3}s`
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{consumer.company}</h3>
                  <p className="text-gray-600">{consumer.industry}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-500">Client Since</div>
                  <div className="font-semibold text-gray-900">{consumer.since}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Growth</div>
                  <div className="font-semibold text-green-600">{consumer.growth}</div>
                </div>
              </div>
              
              <p className="text-gray-700">{consumer.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Consumers;
