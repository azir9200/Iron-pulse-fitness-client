import CategoriesSection from "@/components/category/CategoriesSection";
import Banner from "@/components/shareHome/Banner";
import BenefitsSection from "@/components/shareHome/BenefitsSection";
import ImageGallery from "@/components/shareHome/ImageGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoriesSection></CategoriesSection>
      <BenefitsSection></BenefitsSection>
      <ImageGallery></ImageGallery>
    </div>
  );
};

export default Home;
