import Hero from '@/components/Hero';
import ServicesCarousel from '@/components/ServicesCarousel';
import GalleryPreview from '@/components/GalleryPreview';
import AboutPreview from '@/components/AboutPreview';
import ContactPreview from '@/components/ContactPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesCarousel />
      <GalleryPreview />
      <AboutPreview />
      <ContactPreview />
    </>
  );
}
