import React from 'react';

function WorkExperience() {
  const experiences = [
    {
      title: "RPA Developer & React Development Intern",
      company: "TMI",
      description: "Specialized in web development using React.js and creating automation bots with Microsoft Power Automate. This dual expertise allows me to proficiently build websites and automate tasks, leveraging technology for efficient and effective solutions.",
      image: 'React.png',
      dates: "September 2023 - March 2024"
    },
    {
      title: "Web AR Development Intern",
      company: "TMI",
      description: "Led the development of an Augmented Reality Learning Application focused on providing a user interface for correcting jumbled words using Django. Covered database design, front-end and back-end creation, and userflow diagram outlining.",
      image: 'ar.png',
      dates: "November 2022 - January 2023"
    },
    {
      title: "Web Development Intern",
      company: "NIRD & PR",
      description: "Spearheaded the development of the RSETI ERP using Django. Oversaw database design, server-side functionality, front-end integration, source code maintenance, and user manual creation for modules.",
      image: 'django.png',
      dates: "July 2022 - December 2022"
    }
  ];

  return (
    <div className="container">
      <h1 className="mt-4 mb-5 ">Work Experience</h1>
      <div className="row">
        {experiences.map((experience, index) => (
          <div key={index} className="col-md-6">
            <div className="card mb-3 border-warning shadow-sm ">
              <img src={experience.image} className="card-img-top mx-auto mt-3" style={{ width: '50%', maxWidth: '150px', height: 'auto', objectFit: 'cover' }} alt={experience.title} />
              <div className="card-body">
                <h5 className="card-title">{experience.title} | {experience.company}</h5>
                <p className="card-text">{experience.description}</p>
                <p className="card-text"><small className="text-muted">{experience.dates}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
