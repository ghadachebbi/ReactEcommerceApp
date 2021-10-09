import React, { useContext } from "react";
import { getClass } from "../utils";
import Image from "../components/Image";
import { Context } from "../Context";
function Photos() {
  const { allPhotos } = useContext(Context);
  const imageElement = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  return <main className="photos">{imageElement}</main>;
}

export default Photos;
