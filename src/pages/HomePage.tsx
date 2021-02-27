import { CandidateCard } from '../components/CandidateCard';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import { ICandidate } from '../interfaces/ICandidate';
import { GET_CANDIDATES } from '../gqlQueryMutationn/queryMutation';


export const HomePage: React.FC = () => {

    const { loading, error, data } = useQuery(GET_CANDIDATES);

    

    return (
        <>
            {
                loading &&  <p>Loading...</p>
            }
            {
                error && <p>Error :(</p>
            }
            {
                data && 
                <Grid container spacing={3}>
                    {
                        data.candidates.map( (candidate: ICandidate) => 
                            <Grid key={candidate.id} item xs={12} sm={6} md={4}>
                                <CandidateCard key={candidate.id} {...candidate}/>
                            </Grid>
                        )
                    }
                </Grid>
            }

        </>
    );
}