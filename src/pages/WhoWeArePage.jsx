import { useParams } from "react-router-dom";
import SectionHeader from "../componets/commen/SectionHeader.jsx";
import SecuritySection from "../componets/commen/SecuritySection.jsx";
import ModernServicesSection from "../componets/commen/Expertise.jsx";
import NewsSection from "../componets/commen/NewsSection.jsx";
import TestimonialsSection from "../componets/commen/TestimonialsSection.jsx";
import CTASection from "../componets/commen/GetInTouch.jsx";
import ContactForm from "../componets/commen/ContactUs.jsx";


const whoWeAreData = {
  "about-m4sg": {
    title: "About M4SG",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
    sections: [
      {
        heading: "Our Story",
        content:
          "M4 Security Group was founded with the mission to provide unmatched security services while maintaining the highest professional standards.",
      },
      {
        heading: "Our Values",
        content:
          "We operate with integrity, reliability, and a commitment to keeping our clients safe and secure.",
      },
    ],
  },
  csr: {
    title: "Corporate Social Responsibility",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
    bgColor: "bg-primary",
    sections: [
      {
        heading: "Community Engagement",
        content:
          "We actively participate in initiatives that uplift communities and create positive change.",
      },
      {
        heading: "Sustainability Efforts",
        content:
          "Our operations are aligned with eco-friendly practices to reduce our environmental footprint.",
      },
    ],
  },
  management: {
    title: "Management",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
    sections: [
      {
        heading: "Leadership Team",
        content:
          "Our experienced management team drives the company forward with a clear vision and strategy.",
      },
      {
        heading: "Operational Excellence",
        content:
          "We maintain robust systems and processes to ensure reliable, efficient, and secure operations.",
      },
    ],
  },
  accreditation: {
    title: "Accreditation",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
    sections: [
      {
        heading: "Certifications",
        content:
          "We hold multiple industry-recognized certifications that demonstrate our commitment to quality and safety.",
      },
      {
        heading: "Compliance",
        content:
          "All our services are compliant with national and international security standards.",
      },
    ],
  },
  location: {
    title: "Location",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
    sections: [
      {
        heading: "Our Offices",
        content:
          "We have a network of offices strategically located to serve our clients effectively.",
      },
      {
        heading: "Global Reach",
        content:
          "Our operations extend beyond borders, allowing us to provide international security solutions.",
      },
    ],
  },
};

const WhoWeArePage = () => {
  const { slug } = useParams();
  const sectionData = whoWeAreData[slug?.toLowerCase()];

  if (!sectionData) {
    return <p className="p-4">Page not found.</p>;
  }

  return (
    <>
      <div className="p-0 m-0">
        <SectionHeader
          title={sectionData.title}
          imageSrc={sectionData.imageSrc}
          bgColor={sectionData.bgColor}
        />
      </div>

      {/* Matching Career Page Layout */}
      <SecuritySection
        title={sectionData.title}
        sections={sectionData.sections}
      />
      <ModernServicesSection />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default WhoWeArePage;
