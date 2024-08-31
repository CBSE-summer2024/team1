import React, { useEffect, useRef } from "react";

const SvelteAdapter = ({ Component, props }) => {
  const containerRef = useRef(null);
  const svelteInstance = useRef(null);

  useEffect(() => {
    svelteInstance.current = new Component({
      target: containerRef.current,
      props,
    });

    return () => {
      if (svelteInstance.current) {
        svelteInstance.current.$destroy();
      }
    };
  }, [Component, props]);
  return <div ref={containerRef}></div>;
};

export default SvelteAdapter;
