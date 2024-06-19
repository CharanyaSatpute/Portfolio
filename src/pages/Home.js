import React from 'react';

function Home() {
  let programmingLanguages = ["C & data structures", "Python", "Java", "SQL", 'Javascript'];
  let toolsFrameworks = ["Django", "Power Automate", "Sonarqube"];
  let database = ["MySQL", "PostgreSQL", "MongoDB"];
  let technicalSkills = ["HTML", "CSS", "ReactJs", "Spring", "Spring Boot", "Microservices", "OOPS", "GIT", "API"];
  let softSkills = ["Teamwork", "Communication", "Leadership", "Decision Making", "Problem Solving", "Creativity"];
  let educationDetails = [
    "Anurag Group of Institutions, Bachelor of Engineering - Artificial Intelligence, completed in 2023",
    "Sri Chaitanya Junior College (MPC), completed in 2019",
    "Pragna High School, completed in 2017"
  ];
  const intro = "Hello, I'm Charanya Satpute, tech enthusiastic with better problem solving and ability to perform well in a team. Seeking for a challenging role in an organization to utilize my technical, database and management skills for growth of the organization and my career.";

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-secondary shadow-sm">
            <img src="CharanyaPhoto.jpg" className="card-img-top" alt="Charanya Satpute" />
            <div className="card-body">
              <p className="card-text">{intro}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card border border-warning shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Education</h3>
                  <ul className="list-unstyled pl-3">
                    {educationDetails.map((text, index) => <li key={index} type='disc'>{text}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border border-warning shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Programming Languages</h3>
                  <ul className="list-unstyled pl-3">
                    {programmingLanguages.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border border-warning shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Tools & Frameworks</h3>
                  <ul className="list-unstyled pl-3">
                    {toolsFrameworks.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border border-warning shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Databases</h3>
                  <ul className="list-unstyled pl-3">
                    {database.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border border-warning shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Technical Skills</h3>
                  <ul className="list-unstyled pl-3">
                    {technicalSkills.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border border-warning shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Soft Skills</h3>
                  <ul className="list-unstyled pl-3">
                    {softSkills.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
