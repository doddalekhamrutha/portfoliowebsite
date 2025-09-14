import React from "react";
import styled from "styled-components";

const resumeFile = "https://drive.google.com/file/d/1BUeRaI-hOATWbj3D3nwWbwCWhvnBWWu3/view?usp=sharing";

const HomeWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8, #e6ebf0);
  color: #222;
  padding: 4rem 8rem;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

const InfoSection = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
  color: #111;

  span {
    color: #0077b6;
    background: linear-gradient(90deg, #0077b6, #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 900px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #555;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-top: 2rem;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const Button = styled.a`
  background: linear-gradient(135deg, #000, #222);
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    background: linear-gradient(135deg, #0077b6, #00b4d8);
    transform: translateY(-4px) scale(1.07);
    box-shadow: 0 12px 28px rgba(0, 119, 182, 0.3);
  }
`;

const AboutSection = styled.div`
  max-width: 520px;
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 900px) {
    margin-top: 3rem;
    width: 95%;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #111;
  border-left: 4px solid #0077b6;
  padding-left: 0.6rem;
`;

const AboutDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #444;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <InfoSection>
        <Title>
          Hi, I'm <br />
          <span>Dodda Lekhamrutha</span>
        </Title>
        <Subtitle>Student at KL University</Subtitle>
        <ButtonGroup>
          <Button href={resumeFile} download>
            Download Resume
          </Button>
          <Button
            href="https://www.linkedin.com/in/lekhamruthadodda/"
            target="_blank"
          >
            Hire Me
          </Button>
        </ButtonGroup>
      </InfoSection>

      <AboutSection>
        <AboutTitle>About Me</AboutTitle>
        <AboutDescription>
          To obtain an entry-level software engineer role where I can apply my
          skills in Java, ReactJS, and MySQL along with my certifications in
          AWS, Red Hat, and Salesforce. I aim to contribute to the development
          of scalable applications while continuously enhancing my knowledge in
          full-stack development and cloud technologies.
        </AboutDescription>
      </AboutSection>
    </HomeWrapper>
  );
};

export default Home;
