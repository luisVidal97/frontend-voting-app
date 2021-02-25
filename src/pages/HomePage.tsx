import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export const HomePage: React.FC = () => {


    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <h1>Voting App</h1>
                <hr style={{ height: "3px", backgroundColor: "white"}}></hr>
            </Grid>
            
            
        </Grid>
    );
}