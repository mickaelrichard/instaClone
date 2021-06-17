import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListerner from "./hooks/use-auth-listener";
import UserContext from "./context/user";
import IsUserLoggedIn from "./helpers/is-user-logged-in";

import ProtectedRoute from "./helpers/protected-route";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));
const Profile = lazy(() => import("./pages/profile"));
const Dashboard = lazy(() => import("./pages/dashboard"));
function App() {
  const { user } = useAuthListerner();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <IsUserLoggedIn user={user} loggedInPath="/" path="/login">
              <Login />
            </IsUserLoggedIn>

            <IsUserLoggedIn user={user} loggedInPath="/" path="/signup">
              <Signup />
            </IsUserLoggedIn>

            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
