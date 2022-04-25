import * as React from "react";

import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/CoffeeCard.module.css";

const CoffeeCard = (props) => {
  const { id, name, imgUrl, websiteUrl, address, neighbourhood } = props.store;

  return (
    // <Card sx={{ maxWidth: 500, minHeight: 250 , maxHeight: 300}}>
    <div className={styles.card}>
      <Image width={480} height={220} src={imgUrl} alt={name} />
      <Link href={`/coffee-store/${id}`}>
        <a>
          <div className={styles.content}>
            <h2>{name}</h2>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CoffeeCard;
