import React from 'react'
import SectionHeader from "../componets/commen/SectionHeader.jsx";
const TrainingData = {
  title: "Training Programs",
  imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format&q=80",
  bgColor: "bg-primary",
};
function Traning() {
  return (
       <div className="p-0 m-0">
      <SectionHeader
        title={TrainingData.title}
        imageSrc={TrainingData.imageSrc}
        bgColor={TrainingData.bgColor}
      />
    </div>
  )
}

export default Traning