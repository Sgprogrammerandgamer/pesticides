import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import ProcessSection from './components/ProcessSection';
import Industries from './components/Industries';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const business = useMemo(
    () => ({
      name: 'Hygiene Pest Control Services',
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
      email: 'support@hygienepestcontrol.in',
      location: 'Plot no. 2302, Surat Nagar Phase-2, Gurgaon',
      serviceArea: 'Noida, Gurgaon, Delhi NCR and nearby service areas',
      apiBaseUrl: 'http://localhost:5000',
      copyright: '© 2026 All Rights Reserved | Hygiene Pest Control Services',
      services: [
  {
    title: 'Termite Control Treatment',
    text: 'Professional termite inspection and treatment to protect wooden structures, walls, furniture, and foundations from long-term damage.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e6fc080fc77d2c2456fc092928bb2f7a1262c082.jpg',
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
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/19490f0514b8afb27f2406b3c860f9ddcd229b88.jpg',
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
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/346393ddea01eb1fdd4a651c1aaf201858cfdaf8.jpg',
    alt: 'General pest control promotional service image'
  },
  {
    title: 'Bedbug Control Treatment',
    text: 'Systematic bed bug treatment for mattresses, furniture, corners, cracks, and hidden infestation areas in residential and commercial spaces.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/346393ddea01eb1fdd4a651c1aaf201858cfdaf8.jpg',
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
      process: [
        'Inspection',
        'Assessment',
        'Customized Plan',
        'Treatment',
        'Post-Treatment Guidance',
        'Follow-up'
      ],
      industries: [
        'Homes',
        'Apartments',
        'Offices',
        'Restaurants',
        'Hotels',
        'Hospitals',
        'Warehouses',
        'Retail Stores',
        'Educational Institutions',
        'Manufacturing Units'
      ],
      stats: [
        { value: '5000+', label: 'Happy Clients' },
        { value: '10K+', label: 'Orders Processed' },
        { value: '4.9', label: 'Customer Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '23', label: 'Quality Parameters' },
        { value: 'Multi-Year', label: 'Warranty Support' }
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
          q: 'How does your service process work?',
          a: 'Our process includes inspection, assessment, a customized treatment plan, execution, post-treatment guidance, and follow-up support.'
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
          text: 'The team was very professional, inspected the house thoroughly, and completely resolved the termite problem. Highly recommended.'
        },
        {
          name: 'Amit Sharma',
          role: 'Shop Owner, India',
          text: 'Affordable pricing, proper drill and fill treatment, and very satisfying service quality with warranty support.'
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
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Hero business={business} openPopup={() => setIsPopupOpen(true)} />
        <About business={business} />
        <Services business={business} openPopup={() => setIsPopupOpen(true)} />
        <WhyChoose business={business} />
        <ProcessSection business={business} />
        <Industries business={business} />
        <StatsSection business={business} />
        <Testimonials business={business} />
        <FAQ business={business} />
        <CTASection business={business} openPopup={() => setIsPopupOpen(true)} />
        <Contact business={business} openPopup={() => setIsPopupOpen(true)} />
      </main>
      <Footer business={business} />
      <WhatsAppFloat business={business} />
      <LeadPopup
        business={business}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}