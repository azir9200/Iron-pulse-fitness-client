import React from "react";

const benefits = [
  {
    title: "Quality Products",
    description: "We offer top-notch fitness equipment that enhances your workout experience.",
    image: "https://i.ibb.co/4F1p7nH/quality-products.jpg"
  },
  {
    title: "Affordable Prices",
    description: "Get the best value for your money with our competitively priced products.",
    image: "https://i.ibb.co/8dfDLK2/affordable-prices.jpg"
  },
  {
    title: "Expert Support",
    description: "Our team of experts is here to help you with any questions or concerns.",
    image: "https://i.ibb.co/8gLP5jd/expert-support.jpg"
  },
  {
    title: "Fast Shipping",
    description: "Enjoy quick and reliable delivery for all your fitness equipment needs.",
    image: "https://i.ibb.co/xDkZ5rY/fast-shipping.jpg"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="h-24 w-24 object-cover mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
