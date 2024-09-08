import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      transitionTime={500}
      interval={3000}
    >
      <div className="relative">
        <img
          src="https://i.ibb.co/YRvx6Jr/pexels-shotpot-4047156.jpg"
          alt="Banner Image 1"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-8xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Welcome to Our Store
          </h2>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co/QHVsQDK/pexels-ivan-samkov-4162485.jpg"
          alt="Banner Image 2"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-8xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Best Fitness Equipment
          </h2>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co/gJBX42t/pexels-victorfreitas-897061.jpg"
          alt="Banner Image 3"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-8xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Achieve Your Goals
          </h2>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co/x6LyFyG/pexels-willpicturethis-1954524.jpg"
          alt="Banner Image 4"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-8xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Welcome to Our Store
          </h2>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co/Xz5FNq3/istockphoto-864793658-1024x1024.jpg"
          alt="Banner Image 5"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-8xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Best Fitness Equipment
          </h2>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co/QCgTBdc/istockphoto-623174598-1024x1024.jpg"
          alt="Banner Image 6"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-8xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Achieve Your Goals
          </h2>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
