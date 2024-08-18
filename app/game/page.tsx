"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex]);

    return (
        <div className="relative w-full h-calc-height">
            <div className="w-full h-full overflow-hidden relative rounded-sm">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-500 flex ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image src={src} alt={`Slide ${index + 1}`} width={1920} height={1200} />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full w-[3rem] h-[3rem] hover:bg-opacity-75"
            >
                &larr;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full w-[3rem] h-[3rem] hover:bg-opacity-75"
            >
                &rarr;
            </button>
        </div>
    );
};

export default ImageCarousel;
