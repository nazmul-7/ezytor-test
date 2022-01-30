import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import PrimaryButton from "./PrimaryButton";
import H1 from "./H1";
import P from "./P";
import IdGenerator from "../../helperFunction/IdGenerator";
import FindAndSaveJson from "../../helperFunction/FindAndSaveJson";

import  { MainLayout , MainDispatchLayout } from   "../../shared/MainLayout";
function Section(item) {

    const board = React.useContext(MainLayout);
    const setBoard = useContext(MainDispatchLayout);
    const htmtComponents = 
      {
        'PrimaryButton':PrimaryButton,
        'Button':PrimaryButton,
        'h1':H1,
        'p':P,
        'section':Section
      }
      const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        // drop: (item) => addItemToBoard(item.sectionName),
        // collect: (monitor) => ({
        //   isOver: !!monitor.isOver(),
        // }),
         drop(item, monitor) {
            const didDrop = monitor.didDrop();
            console.log("hovering on Child",didDrop)
            if (!didDrop ) {
              addItemToBoard(item.sectionName)
              console.log("Drop on Child")
            }
            
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          isOverCurrent: monitor.isOver({ shallow: true }),
        }),
      }));

    const addItemToBoard = async (sectionName) => {
        // const pictureList = PictureList.filter((picture) => id === picture.id);

        console.log('sectionName -- we are in section ')
        console.log('item -- we are in section ',item)
        console.log(sectionName)
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
        // var tempBoard = [...{board}];
        var tempBoard = JSON.parse(JSON.stringify(board))
        console.log("temBoard")
        console.log(tempBoard)
        const updatedJson = await FindAndSaveJson(tempBoard,item.id,newJson);
        console.log('previous Json')
        console.log(tempBoard)
        console.log('updatedJson')
        console.log(updatedJson)
        // setBoard(updatedJson);
    };


    const mystyle = {
       width:'200px',
       height:'200px',
       border:'2px dashed #212121'
      };
 
    return ( 
        <section ref={drop} style={mystyle}></section>
     );
}

export default Section;