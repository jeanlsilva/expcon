import { AiFillStar } from "react-icons/ai";
import { RatingStarsContainer } from "./styles";

export default function RatingStars() {
    return (
        <RatingStarsContainer>
            <AiFillStar size={34} />
            <AiFillStar size={34} />
            <AiFillStar size={34} />
            <AiFillStar size={34} />
            <AiFillStar size={34} />
        </RatingStarsContainer>
    );
}