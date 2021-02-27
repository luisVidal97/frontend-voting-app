import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

const styleNavLink = {
    color: 'white',
    textDecoration: "none",
}

const styleActiveNavLink = {
    color: '#17AB8F',
}

export const Navbar = () => {
    return (
        <>
            <Grid container spacing={3} direction="row-reverse">
                    <Grid item xs={2}>
                        <NavLink 
                            style= {styleNavLink}
                            activeStyle={styleActiveNavLink}
                            exact
                            to='/ordered-candidates-by-votes'
                        >
                            Order by votes
                        </NavLink>
                    </Grid>
                    <Grid item xs={2}>
                        <NavLink 
                            style= {styleNavLink}
                            activeStyle={styleActiveNavLink}
                            exact
                            to='/ordered-candidates-by-age'
                        >
                            Order by age
                        </NavLink>
                    </Grid>
                    <Grid item xs={2}>
                        <NavLink 
                            style= {styleNavLink}
                            activeStyle={styleActiveNavLink}
                            exact
                            to='/'
                        >
                            Home
                        </NavLink>
                    </Grid>
            </Grid>
            <Grid container spacing={3}>
                    <Grid item xs={12} sm={10} md={7}>
                        <h1>Voting App</h1>
                        <hr style={{ height: "3px", backgroundColor: "white"}}></hr>
                    </Grid>
            </Grid>
            <br/>
        </>
    )
}
