import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react"
import { Header, Footer } from "./components";
import {
  DetailedDescriptions,
  Home,
  Login,
  OrderForm,
  Register,
  RequestForm,
  AboutUs,
  Cart,
  OrderConfirmation
} from "./pages";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const currentScreen = useLocation().pathname;

  return <>
      <Header />
      <Routes>
        <Route path="/" element={<Home
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                  />} />
        <Route path="/description" element={<DetailedDescriptions />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/order-form" element={<OrderForm />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<Login
                                          setLoggedIn={setLoggedIn}
                                          currentScreen={currentScreen}
                                        />} />
        <Route path="/sign-up" element={<Register
                                          setLoggedIn={setLoggedIn}
                                          currentScreen={currentScreen}
                                        />} />
      </Routes>
      <Footer />
    </>
}
