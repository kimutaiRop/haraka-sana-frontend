import { MetaProvider, Title } from "@solidjs/meta";
import { Router, Route } from "@solidjs/router";
import { Suspense } from "solid-js";
import "./app.css";
import Home from "./routes";
import About from "./routes/about";
import AuthLayout from "./layouts/auth";
import Login from "./routes/login";
import MainLayout from "./layouts/main";
import Analytics from "./routes/analytics";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Suspense>
            <div class="min-h-sceen">{props.children}</div>
          </Suspense>
        </MetaProvider>
      )}
    >
      <Route path="/" component={MainLayout}>
        <Route path="" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/analytics" component={Analytics} />
      </Route>

      <Route path="/auth" component={AuthLayout}>
        <Route path="/signin" component={Login} />
      </Route>
    </Router>
  );
}
