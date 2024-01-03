import { Route, Routes } from "react-router";

import routes from "./routes";
import HomePage from "../pages/HomePage";

const Navigator = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
    </Routes>
  );
};

export default Navigator;
