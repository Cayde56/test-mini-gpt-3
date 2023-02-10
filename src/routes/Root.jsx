import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Traductor } from "../pages/Traductor";
import { ImageVariatiorForm } from "../pages/ImageVariatorForm";
import { Navbar } from "../components/Navbar";
import { ErrorPage } from "../pages/ErrorPage";
import "../index.css";

function Root() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Traductor />} />
          <Route path="/test-mini-gpt-3/" element={<Traductor />} />
          <Route path="/test-mini-gpt-3/image" element={<ImageVariatiorForm />}/>
          <Route path="/test-mini-gpt-3/contact" element={<div>Contact us</div>}/>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Root;
