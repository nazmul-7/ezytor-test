import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import  MainLayoutProvider from "./shared/MainLayout"
import  CustomStyleProvider from "./shared/CustomStyle"

import PlayGround from "./PlayGround";


function App() {


  return (
    <DndProvider backend={HTML5Backend}>
      <MainLayoutProvider>
        <CustomStyleProvider>
        <PlayGround></PlayGround>
        </CustomStyleProvider>
      </MainLayoutProvider>
    </DndProvider>
  );
}

export default App;
