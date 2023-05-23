import React from 'react';
import "./skill.css"

const Skills = () => {
  // Define your skills and their descriptions
  const skillsData = [
    {
      name: 'Full stack Web Development',
      description: 'Proficient in HTML, CSS, and JavaScript. '
    },
    {
      name: 'React Developer',
      description: 'make many website with react and all are the not refresh after the click'
    },
    {
      name: 'MERN Stack',
      description: 'i have  make many website with M-mongodb  E-express R-react N-node-js. '
    },
    {
      name: 'git and github',
      description: 'frist i learn git and git hub so i make all website with easy.'
    },
    {
      name: 'adobe Photoshop',
      description: 'i have good knowledge in photoshop'
    },
    {
      name: 'Filmora',
      description: 'i created many vidio with filmora'
    },
    {
      name: ' adobe illustrator ',
      description: 'i created many banner with illustrator'
    },
    // Add more skills as needed
  ];

  return (
    <div className="skills">
      
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2 className='capi para'>{skill.name}</h2>
            <h6 className='capi para'>{skill.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
