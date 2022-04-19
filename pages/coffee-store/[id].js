import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import CoffeeDetails from "../../components/CoffeeDetails";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { fetchCoffeeStores } from "../../lib/coffee_store";
import { getOrigin , isEmpty} from "../../utils";
import { StoreContext } from "../../hooks/context";

export async function getStaticProps(staticProps) {
  let origin = getOrigin();
  const coffeeStores = await fetchCoffeeStores("", origin);
  const params = staticProps.params;
  // console.log(params)
  // console.log(coffeeStores)
  const store = coffeeStores.find((store) => {
    return store.id == params.id;
  });
  return {
    props: {
      coffeeStore: store || {},
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

const CoffeeStore = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const [coffeeStore, setCoffeeStore] = useState(props.coffeeStore);
  console.log("cf", coffeeStore);
  const { state: { coffeeStores } } = useContext(StoreContext);

  useEffect(() => {
    if (isEmpty(props.coffeeStore)) {
      if (coffeeStores.length > 0) {
        {
          const store = coffeeStores.find((store) => {
            return store.id == id;
          });
          setCoffeeStore(store);
        }
      }
    }
  }, [id]);

  if (router.isFallback) {
    return <div>Loading ....</div>;
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CoffeeDetails store={coffeeStore} id={id} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default CoffeeStore;
