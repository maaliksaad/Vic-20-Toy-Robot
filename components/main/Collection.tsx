"use client";
import { useState } from "react";
import Card from "../sub/Card";
import CollectionModal from "../sub/CollectionModal";

const Collection = () => {
  const [image, setImage] = useState("");

  const closeModal = () => {
    setImage("");
  };

  const openModal = (img: string) => {
    setImage(img);
  };

  const src = [1, 2, 3, 4, 5, 6];

  return (
    <section id="collection" className="m-32">
      <ul className="grid grid-cols-6 gap-0">
        {src.map((src) => (
          <li
            className="col-span-2"
            key={src}
            onClick={() => openModal(`/images/collection-0${src}.png`)}
          >
            <Card
              key={src}
              className="my-6 mx-4"
              children={
                <img
                  key={src}
                  src={`/images/collection-0${src}.png`}
                  width={500}
                  height={500}
                  className="object-fit overflow-hidden h-80 rounded-3xl"
                />
              }
            />
          </li>
        ))}
      </ul>
      {image !== "" && <CollectionModal img={image} onClose={closeModal} />}
    </section>
  );
};

export default Collection;
