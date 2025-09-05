import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../context/AuthContext";
import { ChatProvider } from "../context/chatContext";
import App from "./App";
import "./index.css"; // <- global styles
import "react-toastify/dist/ReactToastify.css"; // <- toast styles

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ChatProvider>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </BrowserRouter>
    </ChatProvider>
  </AuthProvider>
);
