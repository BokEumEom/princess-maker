import { useState } from "react";

const useTemporaryState = (initialValue, duration) => {
  const [state, setState] = useState(initialValue);

  const setTemporaryState = (value) => {
    setState(value);
    setTimeout(() => setState(null), duration);
  };

  return [state, setTemporaryState];
};

export default useTemporaryState;
