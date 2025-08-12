import { useParams } from "react-router-dom";
import SectionHeader from "../componets/commen/SectionHeader.jsx";

const ServicesData = {
  "security-guards": {
    title: "Security Guards",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  "mobile-patrols": {
    title: "Mobile Patrols",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
    bgColor: "bg-primary",
  },
"cctv": {
    title: "CCTV Monitoring",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  "access-control": {
    title: "Access Control",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  "event-security": {
    title: "Event Security",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
};

const Services = () => {
  const { slug } = useParams();
  const sectionData = ServicesData[slug];

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

export default Services;
