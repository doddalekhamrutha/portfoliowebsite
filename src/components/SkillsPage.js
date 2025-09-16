import React, { useState } from "react";
import styled from "styled-components";

// ✅ Skill data (icons included)
const skillsData = [
  {
    name: "C",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/c-programming.png",
  },
  {
    name: "Java",
    level: 80,
    icon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png",
  },
  {
    name: "React",
    level: 75,
    icon: "https://img.icons8.com/color/96/000000/react-native.png",
  },
  {
    name: "MySQL",
    level: 70,
    icon: "https://img.icons8.com/color/96/000000/mysql-logo.png",
  },
  {
    name: "HTML",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/html-5.png",
  },
  {
    name: "CSS",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/css3.png",
  },
  {
    name: "Node.js",
    level: 75,
    icon: "https://img.icons8.com/color/96/000000/nodejs.png",
  },
  {
    name: "Spring Boot",
    level: 70,
    icon: "https://img.icons8.com/color/96/000000/spring-logo.png",
  },
  {
    name: "Git",
    level: 80,
    icon: "https://img.icons8.com/color/96/000000/git.png",
  },
];

// ✅ Styled Components
const PageContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #1f2937;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SkillIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #111827;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  height: 8px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #3b82f6);
  width: ${(props) => props.level}%;
  transition: width 0.5s ease-in-out;
`;

// ✅ Main Component
const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <PageContainer>
      <Title>My Skills</Title>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <SkillIcon src={skill.icon} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
            <ProgressBarContainer>
              <ProgressBar level={skill.level} />
            </ProgressBarContainer>
            {hoveredSkill === skill.name && (
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                  color: "#6b7280",
                }}
              >
                Proficiency: {skill.level}%
              </p>
            )}
          </SkillCard>
        ))}
      </SkillsGrid>
    </PageContainer>
  );
};

export default Skills;
