import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoggedInProvider } from "./context/loggedInContext";
import { UserProvider } from "./context/userContext";
import { ClientProvider } from "./context/clientContext";
import { EventProvider } from "./context/eventContext";
import { MessagingProvider } from "./context/messagingContext";

// *** pages ***
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import ClientList from "./pages/ClientList";
import ClientProfile from "./pages/ClientProfile";
import ClientWorks from "./pages/ClientWorks";
// import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import EventDetails from "./pages/EventDetails";
import Messaging from "./pages/Messaging";

// *** components ***
import Layout from "./components/__ui/Layout";

const App = () => {
  return (
    <LoggedInProvider>
      <ClientProvider>
        <UserProvider>
          <EventProvider>
            <Router>
              <Layout>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/newclient" exact component={NewClient} />
                  <Route path="/clients" exact component={ClientList} />
                  <Route path="/clients/:id" exact component={ClientProfile} />
                  <Route path="/clients/:id/works" component={ClientWorks} />
                  {/* <Route path="/events" exact component={Events} /> */}
                  <Route path="/events/new" component={NewEvent} />
                  <Route path="/events/:id" component={EventDetails} />
                  <MessagingProvider>
                    <Route path="/messaging" component={Messaging} />
                  </MessagingProvider>
                </Switch>
              </Layout>
            </Router>
          </EventProvider>
        </UserProvider>
      </ClientProvider>
    </LoggedInProvider>
  );
};

export default App;
