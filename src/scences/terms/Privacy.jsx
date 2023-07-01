import React from 'react'
import {
    Box,
    Typography,
  
  } from "@mui/material";
  import ScrollTop from '../../components/ScrollTop';

import { shades } from '../../theme';
const Terms = ({isDarkMode}) => {


    const backgroundColor = isDarkMode ? "#000000" : "rgba(242, 38, 19, 0.4)";
  return (
    <Box>
     <ScrollTop isDarkMode={isDarkMode}/>
      <Box
      padding="10px"
      width="80%"
      margin="80px auto"
      textAlign="center"
      sx={{
        background: "hsla(0, 0%, 100%, 0.55)",
        backgroundColor: backgroundColor,
        backdropFilter: "blur(30px)",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
        border: "none",
        // backgroundImage: "linear-gradient(to right, #2a9d8f, #f4a261)",
        position: "relative", // Add position relative
        overflow: "hidden", // Add overflow hidden
      }}
      
        >
      {/* Add gradient border pseudo-element */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        sx={{
          content: '""',
          position: "absolute",
          background: isDarkMode
            ? "linear-gradient(to right, #1d3557, #000000)"
            : "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
          borderRadius: "10px",
          pointerEvents: "none",
        }}
      />
       <Box>
       <Typography variant='h4'>Privacy Policy</Typography>
       </Box>
       <Box>
      <Typography fontWeight="bold" mt="1rem" color={isDarkMode?"white": shades.primary[300]}>
      in the context of sales contracts that are concluded via the online shop trikania-herbs.de.
      </Typography>
       </Box>
       <Box>
      <Typography fontWeight="bold" color={ shades.secondary[500]} mt="1rem">§ 1 Scope</Typography>
       </Box>
       <Box>
      <Typography mt="2rem">1. The following terms and conditions apply to all contracts concluded between Trikania-Herbs and the customer via the online shop "trikania-herbs.de", unless expressly agreed otherwise. Deviating conditions of the customer are not recognized unless they have been expressly agreed to.</Typography>
       </Box>
       <Box>
      <Typography mt="2rem">2. The contractual partner for all orders is:</Typography>
       </Box>
       <Box color={isDarkMode?"white": shades.primary[600]}>
      <Typography mt="10px" fontWeight="bold">Trikania-Herbs gbr.</Typography>
      <Typography mt="10px" fontWeight="bold">Managing Director: Kirk McDowell</Typography>
      <Typography mt="10px" fontWeight="bold">Clayallee 227,14195 Berlin</Typography>
      <Typography mt="10px" fontWeight="bold">Tel:015228503977</Typography>
      <Typography mt="10px" fontWeight="bold">Email:info@trikaniamusic.de</Typography>
      <Typography mt="20px" fontWeight="bold">District Court of Berlin,HRB 137891</Typography>
      <Typography mt="2rem" fontWeight="bold">VAT ID: DE 215275903</Typography>
       </Box>
       <Box mt="2rem">
      <Typography fontWeight="bold" color={ shades.secondary[500]}>
      § 2 Conclusion of the contract / storage of the contract text
      </Typography>
      <Box>
          <Typography mt="1rem">1.The presentation of the products in the online shop does not represent a legally binding offer, but a non-binding online catalogue.</Typography>
          <Typography mt="1rem">2.To purchase our goods, you can click on the desired products on the website www.trikania-herbs.de and place them in the shopping cart. At the end of your order you will receive an overview of the goods in the shopping cart, stating the price, delivery costs and VAT. Before sending your order, you have the opportunity to check all entries, such as name, address, delivery address, number and type of goods, payment details and to make changes or corrections.</Typography>
          <Typography mt="1rem">3.By clicking on the "Buy" / "Order with obligation to pay" button, you then place a binding order for the goods contained in the shopping cart.</Typography>
          <Typography mt="1rem">4.The receipt of your order is confirmed together with the acceptance of the order immediately after it has been sent by automated e-mail. With this e-mail confirmation, the purchase contract has come about.</Typography>
          <Typography mt="1rem">5.The text of the contract is saved by us. You can print this out after sending your order to us by clicking on the "Print" button. We will also send you an order confirmation with all order data and our general terms and conditions to the email address you provided.
          .</Typography>
      
      </Box>
      <Box>
      <Typography fontWeight="bold" color={ shades.secondary[500]} mt="2rem">§ 3 Subject matter of contract,product quality,availability</Typography>
      <Box>
      <Typography mt="1rem">1.The subject matter of the contract are the goods and final prices specified and confirmed in the order.
      <Typography mt="1rem">2.The quality of the ordered goods results from the product description in the online shop. Images on the website are for illustrative purposes only and may not accurately reflect the products.
      </Typography>
      <Typography mt="1rem">3.We strive to offer you the highest quality possible. Our extensive range is therefore subject to constant changes due to seasonal items or changes in suppliers. "If a product cannot be delivered at the time of dispatch, we will offer you a corresponding replacement product of at least the same value. In this case, as the customer, you are not obliged to purchase this replacement product. You will not suffer any disadvantages as a result.</Typography>
          .</Typography>
      </Box>
      <Box>
      <Typography fontWeight="bold" color={ shades.secondary[500]} mt="2rem">§ 4 Prices,shipping costs</Typography>
      <Box>
      <Typography mt="1rem">1.The prices at the time the order is placed by the customer apply. The purchase price includes the respective statutory VAT.</Typography>
      <Typography mt="1rem">2.The shipping costs for Germany are a flat rate of EUR 5.20. For Austria, France and Italy Euro 11.70. Belgium, Bulgaria, Netherlands, Luxembourg, Czech Republic, Poland, Estonia, Denmark, Finland, Greece, Ireland, Croatia, Latvia, Lithuania, Malta, Portugal, Romania, Sweden, Slovakia, Spain, Hungary, Cyprus Euro 13.90, Switzerland Euro 19.80 and Great Britain Euro 19.80. For other third countries, a flat-rate shipping fee of EUR 21.00 or more will be charged.</Typography>
      <Typography mt="1rem">3.The shipping costs for Germany exclusively in the offer/action category are a flat rate of EUR 5.20.</Typography>
      <Typography mt="1rem">4.Free shipping for Germany with the exception of the offer/action category for goods valued at EUR 100 or more.</Typography>
      <Typography mt="1rem">5.Free shipping for Germany with the exception of the offer/action category for goods valued at EUR 100 or more.</Typography>
      Shipping costs for express shipping (next day delivery if ordered before 12 p.m.) Monday-Thursday We ship Monday-Thursday (order received by 10 a.m.)
      </Box>
      </Box>
      <Box>
      <Typography fontWeight="bold" color={ shades.secondary[500]} mt="2rem">§ 4 Payment,Shipping</Typography>
      <Box>
      <Typography mt="1rem">1.The purchase price is due upon conclusion of the contract. The purchase price consists of the purchase price and the flat-rate shipping fee, if such is charged.</Typography>
      <Typography mt="1rem">2.Payment can be made by credit card (Mastercard/Visacard/American Express).</Typography>
      <Typography mt="1rem">3.With every order, we reserve the right not to offer certain payment methods and to refer to other payment methods. If the customer's place of residence is outside of Germany, payment is only possible in advance.</Typography>
      
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