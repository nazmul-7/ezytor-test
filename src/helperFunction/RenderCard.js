import React, { useContext ,useMemo} from "react";
import { useDrop } from "react-dnd";
import PrimaryButton from "../components/elements/PrimaryButton";
import { CustomStyle , CustomDispatchStyle }  from "../shared/CustomStyle";
import H1 from "../components/elements/H1";
import Section from "../components/elements/Section";
import P from "../components/elements/P";
import IdGenerator from "../helperFunction/IdGenerator";
import FindAndSaveJson from "./FindAndSaveJson";


import RenderComplexCard from './RenderComplexCard'
import  { MainLayout , MainDispatchLayout } from  "../shared/MainLayout"



function RenderCard({ccache}) {
  const board =useContext(MainLayout);
  const setBoard = useContext(MainDispatchLayout);
  const [setBgColor,setSectionId] = useContext(CustomDispatchStyle);
  // const config = useMemo(()=>  { return  {...ccache} }  , [ccache]);
  // const config = useMemo(() => ccache, [ccache]);
  const config = {...ccache};
  const htmtComponents = 
    {
      'PrimaryButton':PrimaryButton,
      'Button':PrimaryButton,
      'h1':H1,
      'p':P,
      'section':'section'
    }
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "image",
      // drop: (item) => addItemToBoard(item.sectionName),
      drop(item, monitor) {
        const didDrop = monitor.didDrop();
        console.log("hovering on RenderCard",didDrop)
       
        if (!didDrop ) {
          addItemToBoard(item.sectionName)
          console.log("Drop on RenderCard")
        }
        
    },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
    const addItemToBoard = async (sectionName) => {
      // const pictureList = PictureList.filter((picture) => id === picture.id);

      console.log('sectionName -- we are in section ')
      console.log('item -- we are in section ',config)
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
      
      console.log('sectionName')
      console.log(sectionName)
      if(sectionName == 'section') {
        newJson.props.ref = 'drop'
        newJson.type = 'section'
      }
      var tempBoard = [ ...board ];
      // var tempBoard = JSON.parse(JSON.stringify(board))
      console.log("temBoard")
      console.log(tempBoard)
      const updatedJson = await FindAndSaveJson(tempBoard,config.id,newJson);
      console.log('previous Json')
      console.log(board)
      console.log('updatedJson')
      console.log(updatedJson)
      setBoard(updatedJson);
  };

  const selectIdFromcontent = async (e) =>{
    console.log("onClick event is called");
    console.log(e.target.id)
    setSectionId(e.target.id)

    
  } 
  if(config.cmType == 'complex'){
    return RenderComplexCard(config)
  }
  var configProperty = {
    style: config.style,
    id:config.id,
    onClick:selectIdFromcontent
  };
  if(config.component == 'section' &&  Object.keys(config.style).length === 0 ){
    configProperty.style = {
      width:'200px',
        height:'200px',
        border:'2px dashed #212121'
    }
    
  }
  if(config.class){
    configProperty.className = config.class
  }
  if(config.props.ref && config.props.ref == 'drop'){
    configProperty.ref = drop
  }
  if(config.props){

    var propKeys = Object.keys(config.props);
    for(let d of propKeys){
        if(d == 'ref') continue
        if(config.props[d]){
          configProperty[d]= config.props[d]
        }
    }
  }

 
  // if(config.component == 'svg'){
  //   return  React.createElement(SvgContainer, config.props,null)
  // }
  // if(config.component == 'WhyCard'){
  //   return  React.createElement(WhyCard, {key:IdGenerator(),data:config.content},null)
  // }

  console.log("config-render",config)
  console.log("config-board",board)
  console.log("config-configProperty",configProperty)


  return React.createElement(
    htmtComponents[config.component],
    configProperty,
    config.content &&
      ( config.type == "section" && Array.isArray(config.content)  ? config.content.map(c => <RenderCard key={c.id}  ccache={c} />) : config.content )
  );
}

export default RenderCard;