
import Image from "next/image";
import styles from "../styles/CoffeeDetails.module.css";

const CoffeeDetails = ({ store, vote, setVote }) => {
  
  const clickHandler = () => {
    vote = vote + 1;
    setVote(vote);
  }
  return (
    <div>
     
      <div className={styles.box}>
        <div>
          <Image
            src={store?.imgUrl}
            width={500}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1>{store.name}</h1>
          <div className={styles.innerContent}>
          <Image src="/pin_drop.png" width={24} height={24} />
          <p>{store.address}</p>
          </div>

         
          <div className={styles.innerContent}>
          <Image src="/star.png" width={24} height={24} />
          <p>{vote}</p>
          </div>
         

          <button className={styles.button} onClick={clickHandler} >
            <span className={styles.innerContent}>
              <Image src="/thumbs_up.png" width={24} height={24} />
              <span className={styles.text}>upVote</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
