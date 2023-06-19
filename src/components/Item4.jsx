import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Bluevervain from "../logo/blue-vervain.jpeg";
import Lemonvervain from "../logo/lemon-vervain.jpeg";
import Meadowsweet from "../logo/queen-of-the-meadow.jpg";
import Dandelion from "../logo/dandelion.jpeg";
import Burdock from "../logo/burdock.jpeg";
import Lungwort from "../logo/lungwort.jpeg";
import Icelandmoss from "../logo/icelandmoss.jpeg";
import Cinnamon from "../logo/cinnamon.jpeg";
import Willowbark from "../logo/willowbark.jpeg";
import Oliveleaves from "../logo/oliveleaves.jpeg";
import Walnutleaves from "../logo/walnutleaves.jpeg";
import Flaxseed from "../logo/flaxseed.jpeg";
import Hempseed from "../logo/hempseed.jpeg";
import Lemonleaves from "../logo/lemonleaves.jpeg";
import { shades } from "../theme";

import { useNavigate } from "react-router-dom";

const Item1 = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [isHovered, setIsHovered] = useState(false);

  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box
      marginTop="100px"
      display="flex"
      flexWrap="wrap"
      sx={{ display: !isNonMobile ? "block" : "flex" }}
    >
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Bluevervain}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Blue Vervain
          </Typography>

          <Typography width="300px">
            Calms nerves and changes in mood Herbalists have used vervain as a
            nervine, which means it calms the nervous system. It is usually made
            into a tea that is used to treat stress, anxiety, mood swings, and
            sometimes depression.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Lemonvervain}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Lemon Verbena
          </Typography>

          <Typography width="300px">
            Drinking tea, sugar-free of course, is generally beneficial as part
            of a weight-loss programme. Lemon verbena, however, is particularly
            suited for this task. It has been shown to suppress the appetite,
            helping curb those irresistible cravings for snacks or sweets.
            Drinking lemon verbena tea between meals can, therefore, help you
            stick to your diet and achieve your weight-loss goals.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Meadowsweet}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Meadow Sweet
          </Typography>

          <Typography width="300px">
            Meadowsweet seems to be an effective stomachic, which is used in the
            treatment of gastritis, heartburn, hyperacidity, diarrheas, and
            peptic ulcers; for such ailments, this medicinal herb is one of the
            most powerful traditionally used herbal remedies.The fresh root is
            frequently utilized in small amounts in many homeopathic
            preparations for various ailments. The active ingredients present in
            this medicinal plant are essential oils, flavonoids, phenolic
            glycosides, salicylic acid, and tannin
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Dandelion}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Dandelion
          </Typography>

          <Typography width="300px">
            The herb has been used for centuries to treat jaundice and the
            yellowing of the skin that comes with liver dysfunction, cirrhosis,
            hepatitis, and liver disease. Liver function isn’t the only use of
            this nutritious plant, it is also used to treat infections,
            swelling, water retention, breast problems, gallbladder problems,
            pneumonia, and viruses.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Burdock}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Burdock
          </Typography>

          <Typography width="300px">
            One of the most common uses for burdock root has been to purify the
            blood. Recent evidence has found that burdock root contains active
            ingredients in its root system that can remove toxins from the
            bloodstream. Research also found that burdock root effectively
            detoxified blood and promoted increased circulation in the surface
            of the skin (1).
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Lungwort}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Lungwort
          </Typography>

          <Typography width="300px">
            Some believe lungmoss can treat lung issues because it looks like a
            lung. It’s been used for conditions like pneumonia or asthma, but
            these medicinal properties haven’t been proven by science.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Icelandmoss}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Iceland Moss
          </Typography>

          <Typography width="300px">
            Icelandic moss is used in traditional medicine to treat other health
            issues, such as respiratory diseases, loss of appetite, indigestion,
            cuts, and wounds.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Cinnamon}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Cinnamon
          </Typography>

          <Typography width="300px">
            Antioxidants protect your body from oxidative damage caused by free
            radicals. Cinnamon is loaded with powerful antioxidants, including
            polyphenols. One study found that cinnamon supplementation could
            significantly increase antioxidant levels in the blood while
            reducing levels of markers used to measure inflammation, such as
            C-reactive protein. In fact, the antioxidant effects of cinnamon are
            so powerful that it can even be used as a natural food preservative.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Willowbark}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Willow Bark
          </Typography>

          <Typography width="300px">
            Willow bark contains a chemical called salicin, which is similar to
            aspirin. It has pain and fever reducing effects in the body. People
            commonly use willow bark for back pain, osteoarthritis, fever, flu,
            muscle pain, and many other conditions,
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Oliveleaves}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Olive leaves
          </Typography>

          <Typography width="300px">
            Derived from the olive plant, both olive leaves and the extract have
            been used to treat infections, inflammation, diabetes, and
            hypertension. A major component of olive leaf, oleuropein, has been
            shown to have antioxidant and anti-inflammatory activity
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Walnutleaves}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Walnut leaves
          </Typography>

          <Typography width="300px">
            Walnut leaf tea is used internally for treating: diabetes, diarrhea,
            hemorroids, gout, blood impurities, perspiration, anemia, intestinal
            parasites
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Flaxseed}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Flaxseed
          </Typography>

          <Typography width="300px">
            Flaxseed is commonly used to improve digestive health or relieve
            constipation. Flaxseed may also help lower total blood cholesterol
            and low-density lipoprotein (LDL, or "bad") cholesterol levels,
            which may help reduce the risk of heart disease.
          </Typography>
        </Box>
      </Box>{" "}
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Flaxseed}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Flaxseed
          </Typography>

          <Typography width="300px">
            Flaxseed is commonly used to improve digestive health or relieve
            constipation. Flaxseed may also help lower total blood cholesterol
            and low-density lipoprotein (LDL, or "bad") cholesterol levels,
            which may help reduce the risk of heart disease.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Hempseed}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Hempseed
          </Typography>

          <Typography width="300px">
            Hemp seeds are a good source of polyunsaturated and essential fatty
            acids. They have about a 3:1 ratio of omega-6 to omega-3, which is
            considered in the optimal range. Studies have shown that giving hemp
            seed oil to people with eczema may improve blood levels of essential
            fatty acids.
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box ml="10px">
          <img
            alt=""
            src={Lemonleaves}
            width="300px"
            height="400px"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
            }}
          />
        </Box>
        <Box mt="3px" ml="10px">
          <Typography fontWeight="bold" sx={{ color: shades.secondary[500] }}>
            Lemon Leaves
          </Typography>

          <Typography width="300px">
            Lemon leaves contain a variety of compounds that can help inhibit
            the growth of bacteria, including limonene, citral, and geraniol.
            These compounds give lemon leaves their characteristic citrus scent
            and are believed to be responsible for their antibacterial effects.
            In addition, lemon leaves have been traditionally used in herbal
            medicine to treat a variety of infections and to help boost the
            immune system.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item1;
