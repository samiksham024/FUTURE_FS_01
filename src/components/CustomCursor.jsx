import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove);
            document.addEventListener("mouseenter", mEnter);
            document.addEventListener("mouseleave", mLeave);
            document.addEventListener("mousedown", mDown);
            document.addEventListener("mouseup", mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove);
            document.removeEventListener("mouseenter", mEnter);
            document.removeEventListener("mouseleave", mLeave);
            document.removeEventListener("mousedown", mDown);
            document.removeEventListener("mouseup", mUp);
        };

        const mMove = (el) => {
            setPosition({ x: el.clientX, y: el.clientY });

            // Check for clickable elements
            const target = el.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable')
            ) {
                setLinkHovered(true);
            } else {
                setLinkHovered(false);
            }
        };

        const mEnter = () => setHidden(false);
        const mLeave = () => setHidden(true);
        const mDown = () => setClicked(true);
        const mUp = () => setClicked(false);

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    // Only show on desktop/mouse devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <div
            className={`cursor ${hidden ? "cursor--hidden" : ""} ${clicked ? "cursor--clicked" : ""} ${linkHovered ? "cursor--link-hovered" : ""}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

// Inject Styles dynamically here for simplicity, or move to css
const styles = `
.cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-color);
    border-radius: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
}

.cursor--hidden {
    opacity: 0;
}

.cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: var(--accent-color);
    opacity: 0.5;
}

.cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.5);
    background-color: rgba(56, 189, 248, 0.1);
    border-color: transparent;
}
`;

// Append styles if not present
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default CustomCursor;
