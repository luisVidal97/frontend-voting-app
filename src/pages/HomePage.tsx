import { CandidateCard } from '../components/CandidateCard';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import { ICandidate } from '../interfaces/ICandidate';
import { GET_CANDIDATES } from '../gqlQueryMutationn/queryMutation';
import { useState } from 'react';


export const HomePage: React.FC = () => {

    const { loading, error, data } = useQuery(GET_CANDIDATES);
    const [lastSelectedCandidate, setLastSelectedCandidate] = useState("");

    const totalVotes = () => {
        return  data.candidates.reduce((total: number , item: any) => total + item.votes, 0);
    }

    return (
        <>
            {
                loading &&  <p>Loading...</p>
            }
            {
                error && <p>Error :(</p>
            }
            {
                data && (
                    <>  
                        <Grid container>
                        
                            <Grid  item xs={12} sm={6}>
                                   <h5>Total votes:</h5>
                                   <h2>{ totalVotes()}</h2> 
                             </Grid>
                             <Grid  item xs={12} sm={6}>
                                   <h5>Last voted candidate: </h5>
                                    <h2>{ lastSelectedCandidate }</h2> 
                             </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                        {
                            data.candidates.map( (candidate: ICandidate) => 
                            <Grid key={candidate.id} item xs={12} sm={6} md={4}>
                                    <CandidateCard key={candidate.id} {...candidate} selectedCandidate={setLastSelectedCandidate}/>
                                </Grid>
                            )
                        }
                        </Grid>
                    </>
                )
                
            }

        </>
    );
}