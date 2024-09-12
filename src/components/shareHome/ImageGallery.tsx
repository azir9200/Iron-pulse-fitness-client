import React from "react";

const images = [
  "https://i.ibb.co/0sh4yTG/fitness1.jpg",
  "https://i.ibb.co/ys2z3Lj/fitness2.jpg",
  "https://i.ibb.co/C6szSkr/fitness3.jpg",
  "https://i.ibb.co/xg1n2FD/fitness4.jpg",
  "https://i.ibb.co/b6RybXJ/fitness5.jpg",
  "https://i.ibb.co/Tt6ZTjn/fitness6.jpg",
];

const ImageGallery: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
