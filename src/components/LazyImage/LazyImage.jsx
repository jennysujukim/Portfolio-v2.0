import { useRef, useState, useEffect } from "react";

export default function LazyImage({ placeholderSrc, placeholderClassName, placeholderStyle, src, alt, className }) {

    const [isLoading, setIsLoading] = useState(true);
    const [view, setView] = useState("");
    const placeholderRef = useRef(null);

    useEffect(() => {
        // Initiating Intersection Observer
        const observer = new IntersectionObserver((entries) => {
          // Set actual image source && unobserve when intersecting
          if (entries[0].isIntersecting) {
            setView(src);
            observer.unobserve(placeholderRef.current);
          }
        });
    
        // observe for an placeholder image
        if (placeholderRef && placeholderRef.current) {
          observer.observe(placeholderRef.current);
        }
      }, [src]);


 return (
    <>
      {isLoading && (
        <img
          src={placeholderSrc}
          alt=""
          className={placeholderClassName}
        //   style={placeholderStyle}
          ref={placeholderRef}
        />
      )}
      <img
        src={view}
        className={className}
        // style={isLoading ? {display: "none"} : style}
        alt={alt}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}