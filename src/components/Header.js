import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: black;
  color: white;

  h1 {
    color: white;
    font-size: 1.8rem;
  }

  nav {
    display: flex;
    gap: 2rem;
  }

  a {
    color: white;
    font-size: 1rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <h1>DODDA LEKHAMRUTHA</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/certifications">Certifications</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </HeaderWrapper>
);

export default Header;
