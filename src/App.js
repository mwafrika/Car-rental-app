import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./layouts/LandingPage/index";
import HomePage from "./pages/HomePage/index";
function App() {
  return (
    <Switch>
      <Route path="/">
        <LandingPage heading="Tailwind Css">
          <HomePage />
        </LandingPage>
      </Route>
    </Switch>
  );
}

export default App;
