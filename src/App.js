// import logo from "./logo.svg";
import "./App.css";
// import { Route, Routers, BrowserRouter as Router } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlaces";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Users />} />
        <Route path="/place" element={<NewPlace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
