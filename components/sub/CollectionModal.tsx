import React from "react";
import Card from "./Card";

interface Props {
  onClose: any;
  img: string;
}
const CollectionModal = ({ onClose, img }: Props) => {
  const src = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-[90] bg-[#000000] opacity-[0.7]"
        onClick={onClose}
      />
      <Card
        className="fixed top-[15vh] left-[33%] w-[80%] z-[100] overflow-hidden bg-white"
        children={<img src={img} height={500} width={500} />}
      />
    </>
  );
};

export default CollectionModal;
