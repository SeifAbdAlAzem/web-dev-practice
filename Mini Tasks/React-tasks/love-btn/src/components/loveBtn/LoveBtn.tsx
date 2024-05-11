import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LoveBtnProps {
  onClick: () => void;
}

const LoveBtn = ({ onClick }: LoveBtnProps) => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
    onClick();
  };

  return (
    <>
      {clicked ? (
        <AiFillHeart
          color="#ff6b81"
          size={20}
          onClick={toggle}
          aria-label="Remove from favorites"
          style={{ cursor: "pointer", transition: "color 0.3s" }}
        />
      ) : (
        <AiOutlineHeart
          size={20}
          onClick={toggle}
          aria-label="Add to favorites"
          style={{ cursor: "pointer", transition: "color 0.3s" }}
        />
      )}
    </>
  );
};

export default LoveBtn;
