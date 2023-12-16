import { connect } from "http2";
import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10, containerid: string) => {
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const container = document.getElementById(containerid);

    if (container) {
      
      const handleScroll = () => {

        const scrollBottom = container.scrollHeight - (document.body.scrollHeight + container.scrollTop)

        //activate the scrolled if the user is on the top or the bottom of the page
        if (container.scrollTop > threshold && scrollBottom > threshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [threshold, containerid]);

  return scrolled;
};
