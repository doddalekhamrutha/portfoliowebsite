import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #222;
  color: white;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a, span {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover, span:hover {
    color: #00aced; /* Optional hover color */
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <p>&copy; Dodda Lekhamrutha. All Rights Reserved.</p>
      <IconWrapper>
        <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <span onClick={() => navigate('/contact')}>
          <FaEnvelope />
        </span>
      </IconWrapper>
    </FooterWrapper>
  );
};

export default Footer;
