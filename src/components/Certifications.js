import React from 'react';
import styled from 'styled-components';

// Certifications Section
const CertificationsWrapper = styled.section`
  padding: 3rem 2rem;
  background-color: #f4f4f4;
  color: #333;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjusts column width */
  gap: 2rem; /* Adds spacing between the cards */
`;

const CertificationItem = styled.div`
  padding: 1.5rem;
  background: white; /* White background for the card */
  border: 2px solid black; /* Black border for the card */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: #333; /* Black text color for readability */
`;

const CertificationTitle = styled.h3`
  font-size: 1.6rem;
  color: #333; /* Black text for the title */
  margin-bottom: 0.5rem;
`;

const CertificationDetails = styled.p`
  font-size: 1.1rem;
  color: #666; /* Lighter gray text for the description */
`;

const CertificationLink = styled.a`
  font-size: 1.1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Example certifications data
const certificationsData = [
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    description: 'Certified by Red Hat to demonstrate expertise in developing enterprise applications on Red Hat technologies.',
    link: 'https://www.credly.com/badges/406b0d15-9b39-4808-b9f4-6e58caadcc88/public_url',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Validates the ability to design and deploy scalable systems on AWS.',
    link: 'https://www.credly.com/badges/52907483-fd53-40b4-92b3-7110d9132cd3/public_url',
  },
  {
    title: 'Salesforce Certified AI Associate',
    description: 'A certification that demonstrates proficiency in applying AI technologies to Salesforce environments.',
    link: 'https://drive.google.com/file/d/1biM8rOD9PwI866-C8HiGzIeJwDsG6gni/view?usp=drive_link',
  },
];

const Certifications = () => {
  return (
    <CertificationsWrapper id="certifications">
      <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: 'black', textAlign: 'center' }}>
        Certifications
      </h2>
      <CertificationsGrid>
        {certificationsData.map((certification, index) => (
          <CertificationItem key={index}>
            <CertificationTitle>{certification.title}</CertificationTitle>
            <CertificationDetails>{certification.description}</CertificationDetails>
            <CertificationLink href={certification.link} target="_blank" rel="noopener noreferrer">
              View Certification
            </CertificationLink>
          </CertificationItem>
        ))}
      </CertificationsGrid>
    </CertificationsWrapper>
  );
};

export default Certifications;
