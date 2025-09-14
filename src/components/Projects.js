import React from 'react';
import styled from 'styled-components';

// Example project data with deployment links
const projectsData = [
  {
    title: 'Real Estate Management System',
    image: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/Real-Estate-Data-Management-Software.jpg?tx=w_1920,q_auto', // Replace with your image URL
    link: 'https://www.linkedin.com/pulse/real-estate-management-system-vyshnavi-mylavarapu',
  },
  {
    title: 'Music Streaming Service API',
    image: 'https://devabit.com/uploads/music-streaming-app-development-devabit-2.webp', // Replace with your image URL
    link: 'http://Podstream.netlify.app',
  },
  {
    title: 'Learning Management System',
    image: 'https://www.webanywhere.com/wp-content/uploads/2023/03/shutterstock_451785535-scaled.jpg', // Replace with your image URL
    link: 'https://www.linkedin.com/pulse/learning-management-system-vyshnavi-mylavarapu-qpdvf/?trackingId=njEhNUwiRVOHc5r0Sh3FJA%3D%3D',
  },
];

const ProjectsWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f9fafb;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a202c;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  width: 320px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background: black;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background: #333;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsContainer>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <CardImage style={{ backgroundImage: `url(${project.image})` }} />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ReadMoreButton href={project.link} target="_blank" rel="noopener noreferrer">
                Read More
              </ReadMoreButton>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
