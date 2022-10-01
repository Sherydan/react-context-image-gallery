import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ImageContext = createContext();


export const ImageProvider = ({ children }) => {
    

    const imgs = async () => {
        try {
            const response = await axios.get("../img.json");
            setImages(response.data.photos);
            
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        imgs();
    }, []);

    const [images, setImages] = useState([]);

    

    return (
        <ImageContext.Provider value={{ images, setImages }}>
            {children}
        </ImageContext.Provider>
    );
};

export default ImageContext;
