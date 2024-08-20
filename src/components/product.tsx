import React from 'react';

const ProductsServices: React.FC = () => {
  const services = [
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive sales.',
      icon: '📄', // You can replace this with an actual icon from a library like FontAwesome
    },
    {
      title: 'E-commerce Solutions',
      description: 'Fully customized e-commerce platforms that boost your online sales.',
      icon: '🛒',
    },
    {
      title: 'Portfolio Websites',
      description: 'Elegant portfolio websites to showcase your work and attract clients.',
      icon: '🎨',
    },
    {
      title: 'Content Management Systems',
      description: 'Easy-to-use CMS solutions for managing your website content efficiently.',
      icon: '📝',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site’s visibility on search engines with our SEO services.',
      icon: '🔍',
    },
    {
      title: 'Responsive Design',
      description: 'Websites that look great on all devices, from desktops to smartphones.',
      icon: '📱',
    },
    {
      title: 'Web Hosting',
      description: 'Reliable and secure web hosting solutions to keep your site online 24/7.',
      icon: '🌐',
    },
    {
      title: 'Custom Web Applications',
      description: 'Tailored web applications to meet the specific needs of your business.',
      icon: '💻',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-navy-900 mb-12">
        Our Products and Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-5xl mb-4 text-indigo-600">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsServices;
