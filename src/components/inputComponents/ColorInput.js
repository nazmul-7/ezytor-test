import React, { useState,useContext } from 'react';
import { CustomStyle , CustomDispatchStyle } from '../../shared/CustomStyle';
import { MainLayout , MainDispatchLayout } from '../../shared/MainLayout';

import FindAndSaveStyleInJson from '../../helperFunction/FindAndSaveStyleInJson';

const ColorInput =  () =>{
    const [bgColor,sectionId] = React.useContext(CustomStyle);
    const [setBgColor,setSectionId] = useContext(CustomDispatchStyle);
    const board = React.useContext(MainLayout);
    const setBoard = React.useContext(MainDispatchLayout);
    const div = {
        id:'level4-4-2-1',
        src:'./assets/images/w1.svg',
        style:{},
        h4:'Up to Date',
        p:'pleasures to secure other greater pleasures, or else he endures '
    }
    const handleChange = async (e) => {
        let tcolor = {...bgColor};
        tcolor.color = e.target.value
        setBgColor(tcolor);

        let newStyle =  {
            key:'color',
            value:tcolor.color
        }

        console.log('tcolor')
        console.log(tcolor)
        var tempBoard = JSON.parse(JSON.stringify(board))
        var newData = await FindAndSaveStyleInJson(tempBoard,sectionId,newStyle);
        setBoard(newData)
        
    }
    return (
      
            
        <div>
            
            <input value={bgColor.color} onChange={handleChange} type="color" /> 
        </div>
      );
}

export default ColorInput;