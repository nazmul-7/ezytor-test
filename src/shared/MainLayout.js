import React, { createContext, useState, useMemo } from "react";
// import * as theme1 from '../themes/theme3'
// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
export const MainLayout = createContext(undefined);
export const MainDispatchLayout = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function MainLayoutProvider({ children }) {
  const initialJson = [
    {
      component:'h1',
      id:'1112',
      content:null,
      type:'text',
      cmType:'normal',
      class:'',
      style:{},
      props:{}
    },
    {
      component:'section',
      id:'1111',
      content:null,
      type:'section',
      cmType:'normal',
      class:'',
      style:{
        width:'200px',
        height:'200px',
        border:'2px dashed #212121'
      },
      props:{
        ref:'drop'
          // src:heading1,
          // alt:'Image'
      }
    }
  ];
  const [mainJson, setMainJson] =  useState(initialJson);

  return (
    <MainLayout.Provider value={mainJson}>
      <MainDispatchLayout.Provider value={setMainJson}>
        {children}
      </MainDispatchLayout.Provider>
    </MainLayout.Provider>
  );
}

// export { CustomStyleProvider, CustomStyle, CustomDispatchStyle };
export default MainLayoutProvider