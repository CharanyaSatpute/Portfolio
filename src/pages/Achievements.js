import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css'

function Achievements() {
  const certifications = [
    {
      name: "Coursera C for Everyone",
      description: "Introduction to the basics of programming in C, covering topics such as data structures and algorithms.",
      certificateImage: "coursera-certificate.jpg"  // Example image name
    },
    {
      name: "Ranksheet Level 1 C Programming",
      description: "Basic certification in C programming, covering fundamental concepts and syntax along with advanced topics.",
      certificateImage: "ranksheet-certificate.jpg"  // Example image name
    },
    {
      name: "Coursera AI For Everyone",
      description: "Overview of AI concepts and its applications across various industries, suitable for beginners.",
      certificateImage: "ai-certificate.jpg"  // Example image name
    },
    {
      name: "Oxford Achievers Merit Certificate",
      description: "Recognition for outstanding academic performance and achievements.",
      certificateImage: "oxford-certificate.jpg"  // Example image name
    },
    {
      name: "Adobe UX Foundation Learning Journey Certificate",
      description: "Foundation course covering user experience design principles and methodologies, emphasizing Adobe tools and practices.",
      certificateImage: "adobe-certificate.jpg"  // Example image name
    },
    {
      name: "Introduction to Python Coding Ninjas Certificate",
      description: "Foundation course covering Python programming fundamentals, including syntax, data structures, and algorithms.",
      certificateImage: "codingninjas-certificate.jpg"  // Example image name
    },
    {
      name: "AI for India Event Participation Certificate",
      description: "Building a Face Recognition application using Python, gaining practical experience in machine learning and computer vision.",
      certificateImage: "GuviCertificate.png"  // Example image name
    },
    {
      name: "Data Hack Hours Partipation Certificate",
      description: "A National Level Hackathon conducted by Computer Society of India(CSI) - Hyderabad Chapter",
      certificateImage: "codingninjas-certificate.jpg"  // Example image name
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-5 text-center">Certifications</h1>
      <div className="row">
        {certifications.map((certification, index) => (
          <div key={index} className="col-md-6">
            <div
              className={`card mb-3 border-warning shadow-sm certification-card ${hoveredIndex === index ? 'show-button' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title">{certification.name}</h5>
                <p className="card-text">{certification.description}</p>
                
              </div>
              {/* {hoveredIndex === index && (
                <div className="overlay">
                  <Link className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </Link>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
