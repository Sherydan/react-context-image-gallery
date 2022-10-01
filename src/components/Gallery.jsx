import React, { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import ImageContext from "../context/ImageContext";

const Gallery = () => {
    const { images } = useContext(ImageContext);
    console.log(images)
    
    return (
        <div className="galeria grid-columns-5 p-3">
            {
            images.map((image, i) => (
                <div
                    key={i}
                    className="foto"
                    style={{
                        backgroundImage: `url(${image.src.portrait})`,
                    }}
                >
                    <Heart filled={image.liked} />
                </div>
            ))}  
            <Heart />
        </div>
    );
};

export default Gallery;
