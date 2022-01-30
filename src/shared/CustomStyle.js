import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
export const CustomStyle = createContext(undefined);
export const CustomDispatchStyle = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function CustomStyleProvider({ children }) {
  const [cutomCss, setCustomCss] = useState({
    color: "#000"
  });
  const [sectionId, setSectionId] = useState('1112');

  return (
    <CustomStyle.Provider value={[cutomCss,sectionId]}>
      <CustomDispatchStyle.Provider value={[setCustomCss,setSectionId]}>
        {children}
      </CustomDispatchStyle.Provider>
    </CustomStyle.Provider>
  );
}

// export { CustomStyleProvider, CustomStyle, CustomDispatchStyle };
export default CustomStyleProvider