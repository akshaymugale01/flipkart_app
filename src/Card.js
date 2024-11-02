import {
    Favorite,
    FiberManualRecordOutlined,
    FiberManualRecordRounded,
} from "@mui/icons-material"; // Updated import for icons
import React, { useState, useEffect, useCallback } from "react";
import "./Card.css";

const Card = ({ offerPrice, image, name, rating, actualPrice }) => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const carousel = useCallback(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex < image.length - 1 ? prevIndex + 1 : 0));
        }, 1000);
        return () => clearTimeout(timer); // Cleanup timeout on unmount or when index changes
    }, [image.length]);

    useEffect(() => {
        if (show) {
            carousel();
        }
    }, [show, carousel]);

    return (
        <div className="card">
            <div className="card__heart">
                <Favorite />
            </div>

            {Array(image.length)
                .fill()
                .map((_, i) => (
                    show ? (
                        i === index ? (
                            <FiberManualRecordRounded key={i} className="dots" />
                        ) : (
                            <FiberManualRecordOutlined key={i} className="dots" />
                        )
                    ) : null
                ))}

            <div className="card__image">
                <img
                    onMouseOver={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    src={image[index]}
                    alt="images"
                />
            </div>
            <div className="productDet">
                <div className="card__details">
                    <p className="title">{name}</p>
                    <p>running shoes</p>
                    <span className="span1">₹{offerPrice}</span>
                    <span className="span2">₹{actualPrice}</span>
                    <span className="span3">56%</span>
                </div>
                <div className="card__size">
                    <p>
                        size <span>6,7,8,9</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
