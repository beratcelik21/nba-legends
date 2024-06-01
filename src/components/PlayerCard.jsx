import { useState } from "react";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ img, name, statistics  }) => {
  // console.log(showImage)
  const [showImage, setShowImage] = useState(true)
  const handleClick = () => setShowImage(!showImage)
  return (
    <Card className=" rounded m-auto player-card"
    role="button"
    onClick={handleClick}>
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <u className="m-auto">
          {statistics.map((item, i) => (
            <li className=" list-unstyled h5 text-start ">🏀{item}</li>
          ))}
        </u>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
