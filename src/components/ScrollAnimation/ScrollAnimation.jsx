import React, { useEffect } from 'react';

function ScrollAnimation() {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.js-scroll');
            const windowMetade = window.innerHeight * 0.6;

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - windowMetade < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {}
        </div>
    );
}

export default ScrollAnimation;
