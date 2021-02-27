import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { ICandidate } from '../interfaces/ICandidate';
import { DECREMENT_VOTES_CANDIDATE, INCREATE_VOTES_CANDIDATE } from '../gqlQueryMutationn/queryMutation';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: 10,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
});
  


export const CandidateCard: React.FC<ICandidate> = ({id, slogan, age, votes, firstname, lastname}) => {

    const [candidate, setCandidate] = useState<ICandidate>({id, slogan, age, votes, firstname, lastname});
    const [increaseVote,  { data: increaseData }] = useMutation(INCREATE_VOTES_CANDIDATE);
    const [decrementVote, { data: decrementData }] = useMutation(DECREMENT_VOTES_CANDIDATE);
    const [loading, setLoading] = useState(false);

    const classes = useStyles();


    const handleVoteUp = async () => {
        setLoading(true);
        if(candidate.votes < 20){
            setCandidate({
                ...candidate, 
                votes: candidate.votes + 1 
            });
            await increaseVote({ variables: { id: candidate.id } });
            setLoading(false);
        }
    }
    

    const handleVoteDown = async () => {
        setLoading(true);
        if(candidate.votes > 0){
            setCandidate({
                ...candidate, 
                votes: candidate.votes - 1 
            });
            await decrementVote({ variables: { id: candidate.id } });
            setLoading(false);
        }
    }

    return (
        <Card className={classes.root}>
        <CardContent>

            <Typography variant="h5" component="h5">
                {`${candidate.firstname} ${candidate.lastname}`}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                { candidate.age } years old
            </Typography>
            <Typography variant="body2" component="p">
                { `"${candidate.slogan}"` }
            </Typography>
            <Typography variant="h3" align="center">
                {candidate.votes}
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
                variant="contained" 
                size="small" 
                color="primary"
                startIcon={<ArrowUpwardIcon />}
                onClick={handleVoteUp}
                disabled={ loading }
            >
                    Vote up
            </Button>

            <Button 
                variant="contained" 
                size="small" 
                color="primary"
                startIcon={<ArrowDownwardIcon />}
                onClick={handleVoteDown}
                disabled={ loading }
            >
                Vote down
            </Button>
        </CardActions>
        </Card>
    );
}