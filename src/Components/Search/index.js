import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '20px 8px',
    },
  },
}));

function Index({ handleClick }) {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={handleClick}>
      <TextField id="outlined-basic" label="Search.." name="query" size="small" variant="outlined" />
      <Button data-testid="buttonSearch" variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
}

export default Index;
