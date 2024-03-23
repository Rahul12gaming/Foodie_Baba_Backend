import { Box } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/Sidebar";
import { Item } from "./component/Item";
import { CartSection } from "./component/CartSection";
import { useEffect, useState } from "react";
import { Auth } from "./component/Auth";
import { Footer } from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteBox } from "./RouteBox";
import { Gallery } from "./component/Gallery";
import { Billing } from "./component/Bill";
import { Address } from "./component/Address";
import { SpinnerLoader } from "./component/Spinner";
import { useSelector } from "react-redux";
import { UserProfile } from "./component/userProfile";
function App() {
  const [click, setClick] = useState(false);
  const {isLogin,user}=useSelector((state)=>state.user)
  return (
    <>
      <Router>
        <Navbar />
        <Box id="container" position={"relative"} ml={100}>
          <Header/>
        <Routes>
        
            <Route path="/" element={<Hero />} />
          
            <Route path="/menu" element={<Item />} />
          
           {
            user===null?<>
            
             <Route path="/auth" element={<Auth />} />
             
            </>: <>
             <Route path="/auth" element={<Hero />} />
             <Route path="/user/:id" element={<UserProfile/>}/>
           
             
            </>
           }
            <Route path="/cart" element={<CartSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/checkout" element={<Billing />} />
            
            <Route path="/a" element={<SpinnerLoader />} />


        </Routes>
        </Box>
        <Footer />
      </Router>
    </>
  );
}

export default App;

{
  /* <Header setClick={setClick} click={click}/>
<Auth/> */
}
{
  /* <Item/>
{
  click?<CartSection/>:<></>
} */
}
