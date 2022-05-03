import React from 'react';
import {
  appSidebarFileState,
  projectsUrl,
  skillsData,
  skillsDataTwo,
  ResumeSection,
} from '@src/utils';
import './index.scss';

const AppBody = ({ selected }) => {
  const renderDOM = (selected) => {
    switch (selected) {
      case appSidebarFileState.ABOUT:
        return (
          <div className='app-body__about'>
            <p>
              I am a classic blend of knowledge and experience with
              certifications, a Web developer with varied skills and visionary
              achievements. I have built websites and applications with happy
              clients for employer and make leading differentiation for the
              projects worked.
            </p>
            <p>
              5+ years of experience, Practise makes man perfect, and experience
              has got me beyond perfection. With 5+ years of experience and 50+
              commercial projects' accomplishment and high level of cognition in
              the projects I work, I have excelled in my passion. My knowledge
              on latest web technologies and advanced techniques and methods
              adds benefit to my experience in my profession.
            </p>
          </div>
        );
      case appSidebarFileState.CONTACT:
        return (
          <div className='app-body__about'>
            <p>
              Looking for a knowledgeable and experienced Web developer for your
              company or need to work on projects?
            </p>
            <p>Kindly contact me</p>
            <p>
              Email:
              <a href='mailto:danielpauljoshuas@gmail.com'>
                danielpauljoshuas@gmail.com
              </a>
            </p>
            <p>
              Github:
              <a target='_blank' href='https://github.com/ijoshuadaniel'>
                https://github.com/ijoshuadaniel
              </a>
            </p>
            <p>
              LinkedIn :
              <a
                target='_blank'
                href='https://www.linkedin.com/in/danielpauljoshuas/'
              >
                https://www.linkedin.com/in/danielpauljoshuas/
              </a>
            </p>
          </div>
        );
      case appSidebarFileState.PROJECT:
        return (
          <div className='app-body__about'>
            <p>
              <ul>
                {projectsUrl.map((item, index) => (
                  <li key={index} className='app-body__about-list'>
                    {item.project} :{' '}
                    <a href={item.url} target='_blank'>
                      {item.url}
                    </a>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        );
      case appSidebarFileState.SKILLS:
        return (
          <div className='app-body__skills'>
            <p>
              Skills are the qualities I have been learning and possess for
              better perfomance in my career. I have mastered in high end skills
              vital for a Web developer. My top technical skills include PHP,
              NODEJS, REACT, MONGO DB and more. In addition to this I acquire
              interpersonal skills, quick learning skills and I am self
              motivated.
            </p>
            <div className='app-body__skills-flex'>
              <ul>
                {skillsData.map((item, index) => (
                  <li key={index} className='app-body__about-list'>
                    {item}
                  </li>
                ))}
              </ul>
              <ul>
                {skillsDataTwo.map((item, index) => (
                  <li key={index} className='app-body__about-list'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case appSidebarFileState.RESUME:
        return (
          <div className='app-body__about'>
            <div className='app-body__buttonFlex'>
              {ResumeSection.map((item, index) => {
                return (
                  <div key={index} className='app-body__buttons'>
                    <a href={item.url} target='_blank'>
                      {item.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
    }
  };
  return <div className='app-body'>{renderDOM(selected)}</div>;
};

export default AppBody;
