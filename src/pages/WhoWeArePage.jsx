import { useParams } from "react-router-dom";
import SectionHeader from "../componets/commen/SectionHeader.jsx";

const whoWeAreData = {
  "about-m4sg": {
    title: "About M4SG",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  csr: {
    title: "Corporate Social Responsibility",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
    bgColor: "bg-primary",
  },
  management: {
    title: "Management",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  accreditation: {
    title: "Accreditation",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  location: {
    title: "Location",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
};

const WhoWeArePage = () => {
  const { slug } = useParams();
  const sectionData = whoWeAreData[slug];

  if (!sectionData) {
    return <p className="p-4">Page not found.</p>;
  }

  return (
    <div className="p-0 m-0">
      <SectionHeader
        title={sectionData.title}
        imageSrc={sectionData.imageSrc}
        bgColor={sectionData.bgColor}
      />
    </div>
  );
};

export default WhoWeArePage;
