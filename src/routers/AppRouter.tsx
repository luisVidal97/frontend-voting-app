
import {
    BrowserRouter  as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {HomePage} from '../pages/HomePage';
import Container from '@material-ui/core/Container';
  
const defaultStyle = {
  backgroundColor: '#1A0A38',
  fontFamily: 'arial',
  paddingTop: "50px",
  color: 'white',
  height: '100vh'
}

export const AppRouter = () => {
  return (
    <Router>
      <div style={defaultStyle}>
        <Container >
          <Switch>
              <Route exact path="/"  component={HomePage}/>
              <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}