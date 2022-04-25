import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import CoffeeDetails from "../../components/CoffeeDetails";
import useSWR from "swr";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CoffeeButton from "../../components/CoffeeButton";
import { fetchCoffeeStores } from "../../lib/coffee_store";
import { getOrigin, isEmpty } from "../../utils";
import { StoreContext } from "../../hooks/context";

export async function getStaticProps({ params }) {
  let origin = getOrigin();
  let data = null;
  try {
    const coffeeStores = await fetchCoffeeStores("", origin);

    const store = coffeeStores.find((store) => {
      return store.id == params.id;
    });
    data = store;
  } catch (err) {
    console.log("error ", err);
  }

  return {
    props: {
      coffeeStore: data ? data : null,
    },
  };
}

export async function getStaticPaths() {
  let origin = getOrigin();
  const coffeeStores = await fetchCoffeeStores("", origin);

  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id,
      },
    };
  });

  // const paths = [ { params: { id: "4fafe8b6e4b078fd5b9dcf49"} }]
  return {
    paths: paths,
    fallback: true,
  };
}

// * Individual Coffee store page
const CoffeeStore = (props) => {
  const router = useRouter();
  const id = router.query.id;
  //  * Set coffee Store initial state which we receiving from getStaticProps if available
  const [coffeeStore, setCoffeeStore] = useState(props.coffeeStore);

  // * Set the vote initial state
  const [vote, setVote] = useState(coffeeStore?.vote || 0);

  // * Extract the coffeeStores data from context
  const {
    state: { coffeeStores },
  } = useContext(StoreContext);

  useEffect(() => {
    // * If state from getStaticProps is empty
    if (props.coffeeStore == null) {
      // * If coffeeStores data coming from context has value
      if (coffeeStores.length > 0) {
        const storeFromContext = coffeeStores.find((store) => {
          return store.id == id;
        });
        setCoffeeStore(storeFromContext);
      }
    }
  }, [id]);

  if (router.isFallback) {
    return <div>Loading ....</div>;
  }

  return (
    <React.Fragment>
      {coffeeStore && (
        <Grid container spacing={2}>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <h1>Chill with {coffeeStore.name}</h1>
            <CoffeeButton href="/" buttonText="Back to Home" />
          </Grid>

          <Grid item xs={4}>
            <CoffeeDetails
              store={coffeeStore}
              id={id}
              vote={vote}
              setVote={setVote}
            />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default CoffeeStore;
