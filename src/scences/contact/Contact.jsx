import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import "./Contact.css";
import ScrollTop from "../../components/ScrollTop"

function Contact({ isDarkMode, toggleDarkMode }) {
  function sendEmail() {
    const userEmail = document.getElementById("user-email").value;
    const recipientEmail = "info@trikaniamusic.de"; // replace with your email address
    const subject = "Contact Request🌿";
    const emailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(userEmail)}`;
    window.open(emailLink);
  }

  return (
    <div className="w-[screen] border-2 border-red-600 bg-[#EECDB2] text-[#110931]">
     <ScrollTop isDarkMode={isDarkMode}/>
      <div className="border-2  gap-5 max-w-[full] mx-auto min-w-[360px] overflow-hidden items-center bg-[#FFF3E9] text-[#110931]">
        <Box
          className="contact-box"
          sx={{
            height: "100vh",
            display: "flex",
            gap: 5,
            maxWidth: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 5,
            // background:
            //   "linear-gradient(90deg, rgba(255,232,210,1) 0%, rgba(196,252,240,1) 100%)",
            color: "black",
            paddingBottom: 20,
          }}
        >
          <Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="contact-scroller-container">
                <h1 className="contact-h1">
                  Herbs🌿
                  {/* <!-- Scroller Start --> */}
                  <Box
                    className={`home ${
                      isDarkMode ? "contact-scroller1" : "contact-scroller"
                    }`}
                  >
                    <span>
                      Healthy
                      <br />
                      Benefits
                      <br />
                      Detox
                    </span>
                  </Box>
                  {/* <!-- Scroller End --> */}
                </h1>
              </Box>
            </Box>
          </Typography>
          <Paper
            sx={{
              p: 4,
              mt: 8,
              mb: 12,
              maxWidth: 460,
              background:
                "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
              opacity: [1, 1, 1],
              boxShadow: 2,
            }}
          >
            <Typography
              variant="h3"
              align="center"
              mb={4}
              sx={{
                color: isDarkMode ? "white" : "black",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 500,
              }}
            >
              Contact us
            </Typography>

            <TextField
              fullWidth
              type="email"
              id="user-email"
              name="email"
              className="contact-input"
              placeholder="Email"
              margin="normal"
              variant="outlined"
              sx={{
                backgroundColor: "",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 500,
                color: "white",
              }}
            />

            <Button
              fullWidth
              sx={{
                backgroundColor: "red ",
                marginTop: "3px",
                marginBottom: "3px",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 500,
              }}
              variant="contained"
              size="large"
              type="submit"
              onClick={sendEmail}
            >
              Send Email
            </Button>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default Contact;
