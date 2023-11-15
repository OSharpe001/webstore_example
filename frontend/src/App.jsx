import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  DetailedDescriptions,
  Home,
  Login,
  PaymentInfoForm,
  Register,
  RequestForm,
  AboutUs
} from "./pages";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return <>
      <Header />
      <Routes>
        <Route path="/" element={<Home
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                  />} />
        <Route path="/description" element={<DetailedDescriptions />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/pay-info" element={<PaymentInfoForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
      <Footer />
    </>
}
