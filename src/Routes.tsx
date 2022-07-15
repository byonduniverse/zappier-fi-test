import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Demo from "pages/Demo";

const Routes = () => (
  <Switch>
    <Route path="/demo" element={<Demo />} />
    <Route path="*" element={<Navigate to="/demo" replace />} />
  </Switch>
);

export default Routes;
