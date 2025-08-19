import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Gallery Modal Component
const GalleryModal = ({ isOpen, onClose, images, projectName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4"
      style={{ zIndex: 9999 }}
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ zIndex: 10000 }}
      >
        ×
      </button>

      {/* Project Name */}
      <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
        <h3 className="text-xl font-bold">{projectName}</h3>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-4xl max-h-[80vh] mx-auto">
        <img
          src={images[currentImageIndex]}
          alt={`${projectName} screenshot ${currentImageIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto bg-black bg-opacity-50 p-2 rounded-lg">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goToImage(index);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'border-white shadow-lg' 
                  : 'border-gray-500 hover:border-gray-300'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  gallery,
  source_code_link,
  onOpenGallery,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex-shrink-0">
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl w-[360px] h-[480px] flex flex-col'
      >
        <div className='relative w-full h-[200px] cursor-pointer group' onClick={() => onOpenGallery(gallery, name)}>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105'
          />

          {/* Gallery Indicator */}
          {gallery && gallery.length > 1 && (
            <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              📷 {gallery.length} photos
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-2xl flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
              View Gallery
            </span>
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-1 flex flex-col'>
          <h3 className='text-white font-bold text-[20px] mb-2'>{name}</h3>
          <p className='text-secondary text-[13px] leading-[18px] flex-1 overflow-hidden'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [galleryModal, setGalleryModal] = useState({
    isOpen: false,
    images: [],
    projectName: ''
  });

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  const openGallery = (images, projectName) => {
    setGalleryModal({
      isOpen: true,
      images: images,
      projectName: projectName
    });
  };

  const closeGallery = () => {
    setGalleryModal({
      isOpen: false,
      images: [],
      projectName: ''
    });
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      nextProject();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling]);

  const handleManualNavigation = (action) => {
    setIsAutoScrolling(false);
    action();
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. <span className="text-white font-semibold">Click on any project image to view the full gallery!</span>
        </motion.p>
      </div>

      {/* Projects Slider */}
      <div className='mt-20 relative'>
        <div className='flex items-center justify-between mb-8'>
          <button
            onClick={() => handleManualNavigation(prevProject)}
            className='bg-tertiary hover:bg-secondary transition-colors duration-300 text-white p-4 rounded-full shadow-lg hover:shadow-xl z-10'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className='flex items-center gap-4'>
            <span className={`text-secondary text-sm ${isAutoScrolling ? 'text-green-400' : 'text-yellow-400'}`}>
              {isAutoScrolling ? '● Auto-scrolling' : '● Manual mode'}
            </span>
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className='bg-tertiary hover:bg-secondary transition-colors duration-300 text-white px-4 py-2 rounded-full text-sm'
            >
              {isAutoScrolling ? 'Pause' : 'Play'}
            </button>
          </div>
          
          <button
            onClick={() => handleManualNavigation(nextProject)}
            className='bg-tertiary hover:bg-secondary transition-colors duration-300 text-white p-4 rounded-full shadow-lg hover:shadow-xl z-10'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className='overflow-hidden'>
          <div 
            className='flex gap-7 transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${currentIndex * 377}px)` // 360px card width + 17px gap
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`} 
                index={index} 
                {...project} 
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className='flex justify-center mt-8 gap-2'>
          {Array.from({ length: Math.max(1, projects.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoScrolling(false);
                setTimeout(() => setIsAutoScrolling(true), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-white' : 'bg-secondary'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={galleryModal.isOpen}
        onClose={closeGallery}
        images={galleryModal.images}
        projectName={galleryModal.projectName}
      />
    </>
  );
};

export default SectionWrapper(Works, "");
