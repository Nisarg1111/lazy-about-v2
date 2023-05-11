import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { HelpCenter } from "./pages/HelpCenter/HelpCenter";
import { About } from "./pages/About/About";
import { ContactUs } from "./pages/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
