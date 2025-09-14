import React from 'react';
import styled from 'styled-components';

// Assuming your resume is in the public folder or a specific path
import resumeFile from 'file:///C:/Users/lenovo/Desktop/RESUMES/2200030753_DODDA%20LEKHAMRUTHA_RESUME_UPDATED.pdf'; // Update with your actual file path

const HomeWrapper = styled.section`
  display: flex;
  justify-content: space-between; /* Add space between two sections */
  height: 100vh;
  background: url('your-image-url.jpg') center/cover no-repeat; /* Replace with your image URL */
  color: white;
  padding: 2rem;
`;

const InfoSection = styled.div`
  max-width: 600px;
  color: black;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Archivo Black', sans-serif; /* Apply the Archivo Black font */
`;

const Subtitle = styled.p`
  margin-top: -10px; /* Move the text upward */
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 20px; /* Add spacing below "Student at KL University" */
`;

const Button = styled.a`
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: gray;
  }
`;

const AboutSection = styled.div`
  max-width: 600px;
  color: black;
  margin-top: 5rem;
  margin-left: -5rem; /* Adjust this value to shift the About section left */
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <InfoSection>
        <Title>Hi, I'm <br />Dodda Lekhamrutha</Title>
        <Subtitle>Student at KL University</Subtitle>
        <ButtonGroup>
          {/* Download Resume Button */}
          <Button href={resumeFile} download>
            Download Resume
          </Button>
          {/* Hire Me Button */}
          <Button href="https://www.linkedin.com/in/lekhamruthadodda/" target="_blank">
            Hire Me
          </Button>
        </ButtonGroup>
      </InfoSection>

      <AboutSection>
        <AboutTitle>About Me</AboutTitle>
        <AboutDescription>
          I am a passionate software developer and student at KL University, specializing in full-stack development and Data Science and BigData Analytics.
          I enjoy building innovative solutions using technologies like Java, React, and Python. My goal is to continuously learn and grow in the tech industry.
          I am especially interested in data science and AI, exploring these fields through hands-on projects. 
          I aim to contribute meaningful advancements in technology while solving real-world problems.
        </AboutDescription>
      </AboutSection>
    </HomeWrapper>
  );
};

export default Home;
