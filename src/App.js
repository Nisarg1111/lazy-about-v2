import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { HelpCenter } from "./pages/HelpCenter/HelpCenter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
