import React from 'react';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
    </nav>
  );
};

export default Navbar;

// Styling objects
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  backgroundColor: 'gray',
  padding: '10px',
};

const listStyle = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const listItemStyle = {
  margin: '0 10px',
  cursor: 'pointer', // Add cursor pointer for hover effect
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

// Add CSS hover effect
listItemStyle[':hover'] = {
  color: 'red', // Update color on hover
};
