import React from "react";
import { useRouter } from "next/router";

import Stores from "../../public/coffee-stores.json";

import CoffeeCard from "../../components/CoffeeCard";
import CoffeeButton from "../../components/CoffeeButton";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {fetchCoffeeStores} from "../../lib/coffee_store";

export async function getStaticProps(staticProps) {
  const coffeeStores = await fetchCoffeeStores();
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStores.find((store) => {
        return store.id.toString() == params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map(coffeeStore => {
    return {
      params: {
        id: coffeeStore.id.toString()
      }
    }
  })
  return {
    paths: paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading ....</div>;
  }

  return (
    <React.Fragment>
      <h1>Coffee Store : {router.query.id}</h1>
      <CoffeeButton href="/" buttonText="Back to Home" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
            <CoffeeCard store={props.coffeeStore} pass={false} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default CoffeeStore;
