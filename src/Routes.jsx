import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Test = React.lazy(() => import("pages/Test"));
const Signup = React.lazy(() => import("pages/signup"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Test />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
