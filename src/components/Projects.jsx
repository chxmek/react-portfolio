import { useState } from "react";
import { PROJECTS } from "../constants";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">Certificate</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="mb-6 rounded cursor-pointer"
                onClick={() => handleImageClick(project.image)}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={closeModal} // Close modal on overlay click
        >
          <div className="relative bg-white rounded p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[80vw] max-h-[80vh] rounded"
            />
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold bg-white rounded-md w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
