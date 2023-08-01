import React,{useState} from 'react'
import {Button,Box} from "@mui/material"
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import { shades } from '../theme';

const ScrollTop = ({isDarkMode}) => {
  const [isHovered, setIsHovered] = useState(false);
    function scrollToTop() {
        // Scroll to the top of the document
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // For smooth scrolling effect
        });
      }

      window.onscroll = function() {
        // If the user has scrolled 20px from the top, show the button
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('scrollToTopButton').style.display = 'block';
        } else {
          document.getElementById('scrollToTopButton').style.display = 'none';
        }
      };
      
      
  return (
    <Box>
      <Button
        id="scrollToTopButton"
        onClick={scrollToTop}
        sx={{
          display: 'none',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '99',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#dcdcdd',
          color: isDarkMode ? shades.secondary[300] : shades.secondary[500],
          fontSize: isHovered ? '60px' : '20px',
          border: 'none',
          cursor: 'pointer',
          transition: 'font-size 0.3s, transform 0.3s',
          '&:hover': {
            fontSize: '45px',
            transform: 'rotate(-45deg)',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <KeyboardArrowUpTwoToneIcon />
      </Button>
    
    
    </Box>
  )
}

export default ScrollTop