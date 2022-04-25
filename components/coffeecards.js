import CoffeeCard from "./CoffeeCard";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#254',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const CoffeeCards = ({Stores}) => {

  const renderCards = () => {
    return Stores.map((store, index) => {
      return (
        <Grid item xs={12} sm={4} md={4} key={index}>
          
            <CoffeeCard store={store} pass={true} />
          
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {renderCards()}
      </Grid>
    </Box>
  );
};

export default CoffeeCards;
