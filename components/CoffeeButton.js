import Button from "@mui/material/Button";
import Link from "next/link";

const CoffeeButton = (props) => {
    const {href, buttonText, onClick} = props;
    return(
        <Link href={href}>
        <Button variant="contained" onClick={onClick} >
          {buttonText}
        </Button>
         </Link>
    )
}

export default CoffeeButton;