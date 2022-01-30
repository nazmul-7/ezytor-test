import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import PrimaryButton from "./elements/PrimaryButton";
import H1 from "./elements/H1";
import Section from "./elements/Section";
import P from "./elements/P";
import IdGenerator from "../helperFunction/IdGenerator";
import RenderCard from "../helperFunction/RenderCard";

import App from "../App";

import  { MainLayout , MainDispatchLayout } from  "../shared/MainLayout"
import { useMemo } from "react/cjs/react.development";
function DropSection() {

  // const [board, setBoard] = useState([]);
  const board = useContext(MainLayout);
  const setBoard = useContext(MainDispatchLayout);
  // const board = useMemo(() => boardcache, [boardcache]);
  // setBoard(initialJson)
  // const htmtComponents = 
  //   {
  //     'PrimaryButton':PrimaryButton,
  //     'Button':PrimaryButton,
  //     'h1':H1,
  //     'p':P,
  //     'section':Section
  //   }
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "image",
      // drop: (item) => addItemToBoard(item.sectionName),
      drop(item, monitor) {
        const didDrop = monitor.didDrop();
        console.log("hovering on Parent",didDrop)
       
        if (!didDrop ) {
          addItemToBoard(item.sectionName)
          console.log("Drop on Parent")
        }
        
    },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
    const addItemToBoard = (sectionName) => {
      // const pictureList = PictureList.filter((picture) => id === picture.id);
      console.log('sectionName---- DropSection.js--',sectionName)
      let newJson = {
        component:sectionName,
        id:IdGenerator(),
        content:null,
        type:'text',
        cmType:'normal',
        class:'',
        style:{},
        props:{
            // src:heading1,
            // alt:'Image'
        }
      }

      if(sectionName == 'section') {
        newJson.props.ref = 'drop'
        newJson.type = 'section'
      }
      setBoard((board) => [...board, newJson]);
    };

    
    const mystyle = {
      width:'100%',
      height:'500px',
      border:'1px solid #212121'
     };

      
    return ( 
        <div style={mystyle}  ref={drop}>
        <h4 className="text-center">DropZone</h4>
        {board.map((config,index) => <RenderCard key={config.id} ccache={config} />)}
        
        </div>
     );
}

export default DropSection;