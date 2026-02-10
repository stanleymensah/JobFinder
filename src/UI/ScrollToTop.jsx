import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop({ target }) {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    const element = target?.current || window;
    const scrollTop = target ? element.scrollTop : window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    const element = target?.current || window;
    element.addEventListener('scroll', toggleVisibility);
    return () => {
      element.removeEventListener('scroll', toggleVisibility);
    };
  }, [target]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    const element = target?.current || window;
    element.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}