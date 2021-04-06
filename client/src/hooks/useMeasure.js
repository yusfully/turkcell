import React from "react";
const useMeasure = () => {
  const ref = React.useRef(null);
  const [forceRedraw, setForceRedraw] = React.useState(1);
  const rect = React.useRef(null);

  React.useLayoutEffect(() => {
    rect.current = ref.current && ref.current.getBoundingClientRect();

    if (!ref.current) return;
    if (!rect.current.height && forceRedraw > 0) {
      setTimeout(() => setForceRedraw((v) => v + 1), 1);
    }
    if (rect.current.height) {
      setForceRedraw(0);
    }
  }, [forceRedraw, rect]);

  return [ref, rect.current && rect.current.height];
};
export default useMeasure;
