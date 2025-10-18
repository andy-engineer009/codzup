'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Offer() {
    const [isVisible, setIsVisible] = useState(true); 
    

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsVisible(false);
    };

    const handleOfferClick = () => {
        // Replace with your WhatsApp number and message
        const phoneNumber = '6284563903'; // Replace with your WhatsApp number (with country code, no + or spaces)
        const message = encodeURIComponent('Hi! I saw your offer and I am interested.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-[88px] left-[10px] z-[1000] w-[200px] h-[200px]">
            <div className="relative cursor-pointer" onClick={handleOfferClick}>
                <Image 
                    src="/assets/offer.jpeg" 
                    alt="Offer" 
                    width={200} 
                    height={200} 
                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-200" 
                />
                <button
                    onClick={handleClose}
                    className="absolute -top-2 -right-2 bg-[#C4E729] hover:bg-red-600 text-[#000] rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors duration-200 font-bold"
                    aria-label="Close offer"
                >
                    ×
                </button>
            </div>
        </div>
    );
}