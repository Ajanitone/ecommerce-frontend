import React from 'react'
import {
    Box,
    Typography,
  
  } from "@mui/material";
  import ScrollTop from '../../components/ScrollTop';

import { shades } from '../../theme';
const Terms = ({isDarkMode}) => {


    const backgroundColor = isDarkMode ? "#000000" : "";
  return (
    <Box>
     <ScrollTop isDarkMode={isDarkMode}/>
      <Box
      padding="10px"
      width="80%"
      margin="100px auto"
      textAlign="center"
      sx={{
        background: "hsla(0, 0%, 100%, 0.55)",
        backgroundColor: backgroundColor,
        backdropFilter: "blur(30px)",
        borderRadius: "10px",
        boxShadow: "0 1px 2px rgba(1, 1, 1, 0.1)",
        border: "none",
        position: "relative", // Add position relative
        overflow: "hidden", // Add overflow hidden
      }}
      
        >
    
       <Box>
       <Typography variant='h4'>Privacy Policy</Typography>
       </Box>
       <Box>
      <Typography fontWeight="bold" mt="1rem" color={isDarkMode?"white": shades.primary[300]}>
      The following information gives you an overview of the processing of your personal data when you visit the website trikania-herbs.de..
      </Typography>
       </Box>
       <Box>
       <Typography mt="2rem">Personal data is all data that can be assigned to you individually or with which you can be personally identified.</Typography>
       <Typography mt="2rem">Processing is any process carried out with or without the help of automated processes or any such series of processes in connection with personal data such as collecting, recording, organizing, arranging, storing, adapting or changing, reading out, querying, using, disclosure by transmission, distribution or any other form of making available, matching or linking, restriction, deletion or destruction.</Typography>
       <Typography mt="2rem">Processing is any process carried out with or without the help of automated processes or any such series of processes in connection with personal data such as collecting, recording, organizing, arranging, storing, adapting or changing, reading out, querying, using, disclosure by transmission, distribution or any other form of making available, matching or linking, restriction, deletion or destruction.</Typography>
       <Typography mt="2rem">We will inform you below about who is responsible for data processing and who you can contact if you have any questions. We will also inform you about what data we collect from you and how we use it. We will also inform you about your rights under applicable data protection law.</Typography>
       </Box>
       <Box>
      <Typography mt="2rem" fontWeight="bold" color={isDarkMode?"white": shades.secondary[500]}>1. Who is responsible for data processing?</Typography>
       </Box>
       <Box>
      <Typography mt="2rem">Ttikania-herbs gbr is responsible for the processing of your personal data when you visit the website trikania-herbs.de. The contact details are:</Typography>
       </Box>
       <Box color={isDarkMode?"white": shades.primary[600]}>
      <Typography mt="10px" fontWeight="bold">Trikania-Herbs gbr.</Typography>
      <Typography mt="10px" fontWeight="bold">Managing Director: Kirk McDowell</Typography>
      <Typography mt="10px" fontWeight="bold">Clayallee 227,14195 Berlin</Typography>
      <Typography mt="10px" fontWeight="bold">Tel:015228503977</Typography>
      <Typography mt="10px" fontWeight="bold">Email:info@trikaniamusic.de</Typography>
    
       </Box>
       <Box mt="2rem">
      <Typography fontWeight="bold" color={ shades.secondary[500]}>
      2.What data do we process from you when you visit our website?
      </Typography>
      <Typography mt="2rem" fontWeight="bold" color={ shades.secondary[300]}>
      2.1 Collection of general data and logs when visiting the website
      </Typography>
      <Box>
          <Typography mt="1rem">When you visit our website, the provider of the website automatically collects and stores information in so-called server log files. The data is automatically transmitted to us by your browser. These are:</Typography>
          <Box color={isDarkMode?"white": shades.primary[600]}>
            <Typography mt="15px">• Website visited</Typography>
            <Typography mt="5px">• Time and date of access</Typography>
            <Typography mt="5px">• Amount of data sent in bytes</Typography>
            <Typography mt="5px">• Source/reference from which page you came to our site</Typography>
            <Typography mt="5px">• Browser used</Typography>
            <Typography mt="5px">• Operating system used</Typography>
            <Typography mt="5px">• IP address used</Typography>
            <Typography mt="2rem">The data is not merged with other data sources.</Typography>
          </Box>
         
      
      </Box>
      <Box>
      <Typography fontWeight="bold" color={ shades.secondary[500]} mt="2rem">Purpose of data collection / legal basis:</Typography>
      <Box>
     <Typography mt="1rem">They help us to deliver the content of our website correctly, to ensure the functionality of the website, to optimize the content of our website and to ensure the security of our information technology systems. Our legitimate interest in data processing within the meaning of the legal basis of Article 6 (1) (f) GDPR lies in these purposes.</Typography>
     
      </Box>
      <Box>
      <Typography fontWeight="bold" color={ shades.secondary[500]} mt="2rem">Storage duration:</Typography>
      <Box>
      <Typography mt="1rem">The anonymous data of the server log files are stored for a maximum of 7 days and then deleted. If data has to be kept for reasons of proof, for example to clarify cases of misuse, the data are excluded from deletion until the incident has been finally clarified.</Typography>
   
      </Box>
      </Box>
      <Box>
      <Typography fontWeight="bold" color={ shades.secondary[300]} mt="2rem">2.2 Cookies</Typography>
      <Box>
      <Typography mt="1rem">We use cookies on our website. Cookies are small text files that are placed and saved on the hard drive of your end device. This cookie contains a characteristic character string that allows us to clearly identify the browser when it is called up again. No personal data is stored in the cookies we use. The cookies we use are also not merged with personal data.</Typography>
     
     
      
      </Box>
      </Box>
      <Box>
      <Typography fontWeight="bold" color={ shades.secondary[500]} mt="2rem">§ 5 Right of cancellation/cancellation policy for customers</Typography>
      <Box>
      <Typography mt="1rem">1.Purchases cannot be cancelled.</Typography>
      
      
      
      </Box>
      </Box>
       </Box>
       </Box>
        </Box>
    </Box>
  )
}

export default Terms