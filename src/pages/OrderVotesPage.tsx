import { useQuery } from "@apollo/client";
import { CandidateCard } from "../components/CandidateCard";
import { GET_CANDIDATES } from "../gqlQueryMutationn/queryMutation";
import { ICandidate } from "../interfaces/ICandidate";
import { Grid } from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import { useState } from "react";

export const OrderVotesPage: React.FC = () => {

    const [descending, setDescending] = useState<Boolean>(true)
    const { loading, error, data } = useQuery(GET_CANDIDATES);

    const orderCandidates = () => {
        let list = [...data.candidates];
        if(descending){
            list.sort((a: any, b: any) =>  b.votes - a.votes);
        }else{
            list.sort((a: any, b: any) =>  a.votes - b.votes);
        }

        return (
            <Grid container>
                {list.map( (candidate: ICandidate) => 
                        <Grid key={candidate.id} item xs={12}>
                            <CandidateCard key={candidate.id} {...candidate}/>
                        </Grid>
                )}
            </Grid>
        );

    }

    return (
        <>
            <Grid container>
                <Grid item xs={1}>
                    Descending
                </Grid>
                <Grid item xs={1}>
                    <Switch
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        onChange= { () => {
                            setDescending(beforeState => !beforeState);
                        }}
                    />
                </Grid>
                <Grid item xs={1}>
                    Ascending
                </Grid>
            </Grid>
            
            {
                loading &&  <p>Loading...</p>
            }
            {
                error && <p>Error :(</p>
            }
            {
                data && 
                orderCandidates()
            }

        </>
    );
}