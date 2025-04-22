import { Outlet } from "react-router-dom";
// ajuste os caminhos se necessário
import { Header } from "@/components/utils/Header"; 
import { Footer } from "@/components/utils/Footer";
import "./styles/globals.css";
import { Toaster } from "@/components/ui/toaster";


// import { Footer } from "./pages/landing/components/Footer";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}
