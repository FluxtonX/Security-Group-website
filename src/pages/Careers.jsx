import { useParams } from "react-router-dom";
import SectionHeader from "../componets/commen/SectionHeader.jsx";

const CareersData = {
  "current-openings": {
    title: "Current Openings",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  apply: {
    title: "Apply Now",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
    bgColor: "bg-primary",
  },
benefits: {
    title: "Benefits",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
  "training-programs": {
    title: "Training Programs",
    imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
    bgColor: "bg-primary",
  },
};

const Careers = () => {
  const { slug } = useParams();
  const sectionData = CareersData[slug];

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

export default Careers;
