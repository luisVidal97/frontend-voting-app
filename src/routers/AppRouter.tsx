
import {
    BrowserRouter  as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {HomePage} from '../pages/HomePage';
import Container from '@material-ui/core/Container';
import { Navbar } from "../components/Navbar";
import { OrderVotesPage } from "../pages/OrderVotesPage";
import { OrderAgePage } from "../pages/OrderAgePage";
  
const defaultStyle = {
  backgroundColor: '#1A0A38',
  fontFamily: 'arial',
  paddingTop: "50px",
  color: 'white',
  height: '100%'
}

export const AppRouter = () => {
  return (
    <Router>
      <div style={defaultStyle}>
        <Container >
          <Navbar/>
          <Switch>
              <Route exact path="/"  component={HomePage}/>
              <Route exact path="/ordered-candidates-by-votes"  component={OrderVotesPage}/>
              <Route exact path="/ordered-candidates-by-age"  component={OrderAgePage}/>
              <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}