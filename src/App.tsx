import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles.css";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import Signup from "./components/Signup";
export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Link to="/">HOME</Link>&nbsp; &nbsp;
        <Link to="/signup">SiGNUP</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
