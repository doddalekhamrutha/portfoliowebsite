import React from 'react';
import styled from 'styled-components';

// Skill data with respective black icons
const skillsData = [
  {
    name: 'C',
    icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a55359db-8be9-4150-8c22-c4f54b6dfc96/df1d241-485b9236-f0ac-4804-a77d-6495d852801d.png',
  },
  {
    name: 'HTML',
    icon: 'https://cdn-icons-png.flaticon.com/512/4553/4553754.png',
  },
  {
    name: 'CSS',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSCoRep6oYm2r44nHY7ibl_VKzWWpsWCaAw&s',
  },
  {
    name: 'Java',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkPButmVDywbyOhbRKFX5VK7NQ8pbu_0Qqw&s',
  },
];

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full page height */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Allow this to grow and push the footer down */
  background-color: #fff; /* Pure white background */
`;

const SkillsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to next row */
  justify-content: space-between; /* Add space between cards */
  padding: 2rem;
  background-color: #fff; /* Pure white background */
`;

const SkillCard = styled.div`
  width: 28%; /* Two cards per row */
  padding: 3rem;
  background-color: #fff; /* Pure white */
  border: 1px solid #000; /* Black border */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  text-align: center;
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const SkillName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem; /* Increased font size */
  color: black;
  text-align: center; /* Center the title */
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const SkillsPage = () => {
  return (
    <PageContainer>
      {/* Content Section */}
      <ContentWrapper>
        {/* Title Section */}
        <Title><br></br>My Skills</Title>

        {/* Skills Cards */}
        <SkillsWrapper>
          {skillsData.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon src={skill.icon} alt={`${skill.name} icon`} />
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

export default SkillsPage;
