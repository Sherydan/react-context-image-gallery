import React, { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import ImageContext from "../context/ImageContext";

const Gallery = () => {
    const { images, toggleLike } = useContext(ImageContext);

    return (
        <div className="galeria grid-columns-5 p-3">
            {/* show images and toggle like on clic */}
            {images.map((image, i) => (
                <div
                    key={i}
                    className="foto"
                    style={{
                        backgroundImage: `url(${image.src.portrait})`,
                    }}
                    onClick={() => toggleLike(image.id)}
                >
                    <Heart filled={image.liked} />
                    <p>{image.alt}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
