import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import WhatsAppFloat from './components/WhatsAppFloat';
import CallFloat from './components/CallFloat';
import ClientSection from './components/ClientSection';
import HeroQuoteForm from './components/HeroQuoteForm';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPopupOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const business = useMemo(
    () => ({
      name: 'Expert Pesticides',
      alternateBrand: 'Expert Pesticides',
      tagline: "India's first safety-focused pest control service provider.",
      headline: 'Safe & Guaranteed Pest Control Services in Your City',
      locationHeadline: 'Safe & Reliable Pest Control Services in Noida',
      description:
        'Trusted pest control partner with 10+ years of experience, trained and certified technicians, and fast, safe, effective, and long-lasting solutions for residential and commercial pest problems.',
      about:
        'We deliver effective pest management solutions using safe treatment methods and systematic inspections. Our trained professionals identify the root cause before recommending customized solutions. We focus on quality, professionalism, timely response and customer satisfaction.',
      phoneDisplay: '+91 88096 91313',
      phoneRaw: '918809691313',
      whatsappNumber: '918809691313',
      logo: 'https://raw.githubusercontent.com/Sgprogrammerandgamer/image-cdn/refs/heads/main/logo.png',
      email: 'abc@gmail.com',
      location: 'Plot no. 2302, Surat Nagar Phase-2, Gurgaon',
      serviceArea: 'Noida, Gurgaon, Delhi NCR and nearby service areas',
      apiBaseUrl: 'https://pesticides-backend-3efh.onrender.com',
      copyright: '© 2026 All Rights Reserved | Hygiene Pest Control Services',
      quickAssistBg:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80',

      services: [
        {
          title: 'Termite Control Treatment',
          text: 'Professional termite inspection and treatment to protect wooden structures, walls, furniture, and foundations from long-term damage.',
          image: 'https://raw.githubusercontent.com/Sgprogrammerandgamer/image-cdn/refs/heads/main/images.jpg',
          alt: 'Technician treating a termite bait station outdoors'
        },
        {
          title: 'Pre-Construction Termite Control Treatment',
          text: 'Preventive anti-termite treatment before construction to reduce future infestation risks and protect the property from the ground up.',
          image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e6fc080fc77d2c2456fc092928bb2f7a1262c082.jpg',
          alt: 'Pre-construction termite control service image'
        },
        {
          title: 'Cockroach Control Treatment',
          text: 'Targeted cockroach treatment for kitchens, washrooms, cabinets, drains, and hidden breeding zones using safe approved methods.',
          image: 'https://raw.githubusercontent.com/Sgprogrammerandgamer/image-cdn/refs/heads/main/rvger.jpg',
          alt: 'Cockroach control product displayed in a kitchen setting'
        },
        {
          title: 'Rodent Control Treatment',
          text: 'Inspection-led rodent management for homes, offices, shops, and warehouses with control planning for entry points and infestation zones.',
          image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c35c0872bfa9451f7de60cc667ec006756df049c.jpg',
          alt: 'Technician servicing a rodent bait station near a building wall'
        },
        {
          title: 'Mosquito Control Treatment',
          text: 'Source reduction and mosquito control treatment to improve hygiene, reduce breeding, and protect indoor and outdoor spaces.',
          image: 'https://raw.githubusercontent.com/Sgprogrammerandgamer/image-cdn/refs/heads/main/grere.jpg',
          alt: 'General pest control promotional service image'
        },
        {
          title: 'Bedbug Control Treatment',
          text: 'Systematic bed bug treatment for mattresses, furniture, corners, cracks, and hidden infestation areas in residential and commercial spaces.',
          image: 'https://raw.githubusercontent.com/Sgprogrammerandgamer/image-cdn/refs/heads/main/images5.jpg',
          alt: 'General pest control service visual for bed bug treatment'
        }
      ],

      usp: [
        "India's first safety-focused pest control service",
        '23 quality parameters',
        'Root-cause elimination',
        'Affordable pricing',
        'Consistent results over 10+ years',
        'Multi-year warranty'
      ],

      benefits: [
        'Experienced professionals',
        'Safe & approved methods',
        'Customized solutions',
        'Residential & commercial expertise',
        'Long-lasting protection',
        'Quality assurance',
        'Timely service',
        'Customer support'
      ],

      clients: [
        'Homeowners',
        'Residential Societies',
        'Corporate Offices',
        'Restaurants & Cafes',
        'Hotels & Guest Houses',
        'Hospitals & Clinics',
        'Retail Stores',
        'Warehouses'
      ],

      stats: [
        { value: 5000, suffix: '+', label: 'Happy Clients' },
        { value: 10000, suffix: '+', label: 'Orders Processed' },
        { value: 4.9, suffix: '', label: 'Customer Rating', decimals: 1 },
        { value: 20, suffix: '+', label: 'Years Experience' },
        { value: 23, suffix: '', label: 'Quality Parameters' },
        { value: 3, suffix: ' Years', label: 'Warranty Support' }
      ],

      faqs: [
        {
          q: 'Is pest control safe for families and workplaces?',
          a: 'We use safe and approved treatment methods, and our team provides service guidance based on the treatment type and property conditions.'
        },
        {
          q: 'Which services do you provide?',
          a: 'We provide termite control, pre-construction termite treatment, cockroach control, rodent control, mosquito control, and bed bug treatment.'
        },
        {
          q: 'Do you serve residential and commercial properties?',
          a: 'Yes, we provide pest control support for homes, apartments, offices, restaurants, hotels, hospitals, warehouses, retail stores, and more.'
        },
        {
          q: 'How can I book a service quickly?',
          a: 'You can call us directly, send a WhatsApp message, or fill out the free quote form on the website.'
        }
      ],

      testimonials: [
        {
          name: 'Priya Verma',
          role: 'Home Owner, India',
          text: 'The team was very professional, inspected the house thoroughly, and completely resolved the termite problem. Highly recommended.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdBUWQ-Q3YxvpfkJwSzVAmK8agPxN9Zcm2WrkSN1LRZdzc4_UlA6TJ0Qd&s=10'
        },
        {
          name: 'Amit Sharma',
          role: 'Shop Owner, India',
          text: 'Affordable pricing, proper drill and fill treatment, and very satisfying service quality with warranty support.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKXQ9g_VovedIddZw-Dk8eJ0nUPYcBs7ukwlGl2vFJ0lT-tIHC7IPCgI&s=10'
        },
        {
          name: 'Neha Singh',
          role: 'Apartment Resident, India',
          text: 'Quick service, clear communication, and the mosquito treatment really improved our comfort at home.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUme6kR5Zwi0c-YTvsSkFOzqIA7GZ2dFh-x4iyQb2da8NQUrQpoTH96Q8&s=10'
        },
        {
          name: 'Rohit Mehra',
          role: 'Office Admin, India',
          text: 'Very punctual team and the rodent control service was handled with proper planning and follow-up.',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
        },
        {
          name: 'Sneha Kapoor',
          role: 'Restaurant Manager, India',
          text: 'Their service was detailed, professional, and effective for our kitchen and storage pest issues.',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
        },
        {
          name: 'Vikas Arora',
          role: 'Warehouse Supervisor, India',
          text: 'Good communication, clean work, and visible improvement after the first treatment itself.',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80'
        }
      ]
    }),
    []
  );

  return (
    <>
      <Header
        business={business}
        openPopup={() => setIsPopupOpen(true)}
      />

      <main>
        <Hero business={business} openPopup={() => setIsPopupOpen(true)} />
        <HeroQuoteForm business={business} />
        <Services business={business} openPopup={() => setIsPopupOpen(true)} />
        <WhyChoose business={business} />
        <ClientSection business={business} />
        <StatsSection business={business} />
        <Testimonials business={business} />
        <FAQ business={business} />
        <Contact business={business} openPopup={() => setIsPopupOpen(true)} />
        <About business={business} />
      </main>

      <Footer business={business} />
      <CallFloat business={business} />
      <WhatsAppFloat business={business} />
      <LeadPopup
        business={business}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}