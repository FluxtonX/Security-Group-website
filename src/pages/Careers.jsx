import { useParams } from "react-router-dom";
import SectionHeader from "../componets/commen/SectionHeader.jsx";
import SecuritySection from "../componets/commen/SecuritySection.jsx";
import { Home } from "lucide-react";
import ModernServicesSection from "../componets/commen/Expertise.jsx";
import NewsSection from "../componets/commen/NewsSection.jsx";
import TestimonialsSection from "../componets/commen/TestimonialsSection.jsx";
import CTASection from "../componets/commen/GetInTouch.jsx";
import ContactForm from "../componets/commen/ContactUs.jsx";


const CareersData = {
  "current-openings": {
    title: "Current Openings",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
    overlayGradient: true,
    parallax: true,
    titleSize: "text-4xl md:text-5xl lg:text-6xl",
    breadcrumbItems: [
      { label: "Home", href: "/", icon: Home },
      { label: "Careers", href: "/careers" },
      { label: "Current Openings", active: true },
    ],
    sections: [
      {
        heading: "Join Our Team",
        content:
          "We are always looking for talented, passionate individuals who are eager to contribute to our mission of excellence. Explore our current openings and find the right role for you.",
      },
      {
        heading: "Opportunities for Growth",
        content:
          "Our company offers clear career progression paths, mentorship programs, and opportunities to work on exciting projects that challenge and inspire you.",
      },
    ],
  },
  apply: {
    title: "Apply Now",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
    bgColor: "bg-primary",
    overlayGradient: false,
    parallax: false,
    breadcrumbItems: [
      { label: "Home", href: "/", icon: Home },
      { label: "Careers", href: "/careers" },
      { label: "Apply Now", active: true },
    ],
    sections: [
      {
        heading: "How to Apply",
        content:
          "Submitting your application is simple. Fill out the online form, attach your resume, and we will be in touch soon.",
      },
      {
        heading: "Interview Process",
        content:
          "Our recruitment process is designed to be smooth and transparent. We aim to match you with the position that fits your skills and aspirations best.",
      },
    ],
  },
  benefits: {
    title: "Benefits",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
    overlayGradient: true,
    parallax: false,
    breadcrumbItems: [
      { label: "Home", href: "/", icon: Home },
      { label: "Careers", href: "/careers" },
      { label: "Benefits", active: true },
    ],
    sections: [
      {
        heading: "Comprehensive Benefits",
        content:
          "From health insurance to retirement plans, we ensure our team members have access to the benefits they need to thrive.",
      },
      {
        heading: "Work-Life Balance",
        content:
          "We believe in supporting a healthy work-life balance with flexible schedules, paid time off, and remote work opportunities.",
      },
    ],
  },
  "training-programs": {
    title: "Training Programs",
    imageSrc:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
    overlayGradient: true,
    parallax: true,
    titleSize: "text-4xl md:text-5xl lg:text-6xl",
    breadcrumbItems: [
      { label: "Home", href: "/", icon: Home },
      { label: "Careers", href: "/careers" },
      { label: "Training Programs", active: true },
    ],
    sections: [
      {
        heading: "Continuous Learning",
        content:
          "Our training programs are designed to help employees enhance their skills and grow professionally within the organization.",
      },
      {
        heading: "Specialized Courses",
        content:
          "From technical workshops to leadership training, our specialized courses equip our team with the tools to excel.",
      },
    ],
  },
};

const Careers = () => {
  const { slug } = useParams();
  const sectionData = CareersData[slug?.toLowerCase()];

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
          titleSize={sectionData.titleSize}
          breadcrumbItems={sectionData.breadcrumbItems}
          overlayGradient={sectionData.overlayGradient}
          parallax={sectionData.parallax}
        />
      </div>

      <SecuritySection
        title={sectionData.title}
        sections={sectionData.sections}
      />
        <ModernServicesSection/>
         <NewsSection/>
         <TestimonialsSection/>
          <CTASection/>
          <ContactForm/>
    </>
  );
};

export default Careers;
