import { useState, useEffect } from "react";

const useFocus = (ref) => {
  const [value, setValue] = useState(false);

  const handleFocus = () => setValue(true);
  const handleBlur = () => setValue(false);

  useEffect(
    // eslint-disable-next-line consistent-return
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("focus", handleFocus);
        node.addEventListener("blur", handleBlur);

        return () => {
          node.removeEventListener("focus", handleFocus);
          node.removeEventListener("blur", handleBlur);
        };
      }
    },
    [ref]
  );

  return value;
};

export default useFocus;
