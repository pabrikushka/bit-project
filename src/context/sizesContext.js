import React, { createContext, useState, useEffect } from 'react';

const SizesContext = createContext();

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;

      fn.apply(this, arguments);
    }, ms);
  };
}

const sizes = {
  mobile: 768,
  tablet: 992,
};

const SizesProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (window.innerWidth < sizes.mobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      if (window.innerWidth < sizes.tablet) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    }, 0);

    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('load', debouncedHandleResize);
    
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.addEventListener('load', debouncedHandleResize);
    };
  });

  return (
    <SizesContext.Provider
      value={{
        isMobile,
        isTablet,
      }}>
      {children}
    </SizesContext.Provider>
  );
};

export { SizesContext, SizesProvider };
