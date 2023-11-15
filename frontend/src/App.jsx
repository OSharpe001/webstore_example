import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailedDescriptions from "./pages/DetailedDescriptions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaymentInfoForm from "./pages/PaymentInfoForm";
import Register from "./pages/Register";
import RequestForm from "./pages/RequestForm";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/description" element={<DetailedDescriptions />}/>
        <Route path="/request" element={<RequestForm />}/>
        <Route path="/pay-info" element={<PaymentInfoForm />}/>
        <Route path="/sign-in" element={<Login />}/>
        <Route path="/sign-up" element={<Register />}/>
      </Routes>
      <Footer />
    </>
  );
}
