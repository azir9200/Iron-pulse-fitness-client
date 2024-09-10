import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to FitGear
          </h2>
          <p className="text-gray-700 mb-4">
            At FitGear, we are passionate about providing high-quality fitness
            equipment to help you achieve your health and wellness goals. Our
            mission is to offer the best products that cater to your fitness
            needs, whether you are a professional athlete or just starting your
            fitness journey.
          </p>
          <p className="text-gray-700 mb-4">
            We carefully select and source our products to ensure they meet the
            highest standards of quality and durability. Our team of experts is
            dedicated to offering exceptional customer service and support,
            guiding you through your fitness equipment choices and ensuring a
            smooth shopping experience.
          </p>
          <p className="text-gray-700 mb-4">
            Thank you for choosing FitGear. We are committed to supporting your
            fitness journey with top-notch products and outstanding service.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Our Values
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Quality: We ensure that every product meets our rigorous quality
              standards.
            </li>
            <li>
              Customer Satisfaction: Your satisfaction is our top priority, and
              we strive to exceed your expectations.
            </li>
            <li>
              Innovation: We continuously seek out new and innovative products
              to enhance your fitness experience.
            </li>
            <li>
              Integrity: We conduct our business with honesty and transparency.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
