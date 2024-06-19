import React from 'react';

function Achievements() {
  const certifications = [
    {
      name: "Coursera C for Everyone",
      description: "Introduction to the basics of programming in C, covering topics such as data structures and algorithms."
    },
    {
      name: "Ranksheet Level 1 C Programming",
      description: "Basic certification in C programming, covering fundamental concepts and syntax."
    },
    {
      name: "Coursera AI For Everyone",
      description: "Overview of AI concepts and its applications across various industries, suitable for beginners."
    },
    {
      name: "Oxford Achievers Merit Certificate",
      description: "Recognition for outstanding academic performance and achievements."
    }
  ];

  return (
    <div className="container">
      <h1 className="mt-4 mb-5 text-center">Certifications</h1>
      <div className="row">
        {certifications.map((certification, index) => (
          <div key={index} className="col-md-6">
            <div className="card mb-3 border-warning shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{certification.name}</h5>
                <p className="card-text">{certification.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
