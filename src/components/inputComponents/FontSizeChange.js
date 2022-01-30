import React, { useState,useContext } from 'react';
import { MainLayout , MainDispatchLayout } from '../../shared/MainLayout';
import { CustomStyle , CustomDispatchStyle } from '../../shared/CustomStyle';
import FindAndSaveStyleInJson from '../../helperFunction/FindAndSaveStyleInJson';

const FontSizeChange =  () =>{
    const [bgColor,sectionId] = React.useContext(CustomStyle);
    const [setBgColor,setSectionId] = useContext(CustomDispatchStyle);

    const [fontSize,setFontSize] = React.useState('2.5rem');
    const board = React.useContext(MainLayout);
    const setBoard = React.useContext(MainDispatchLayout);
    const handleChange = async (e) => {
        let tcolor = {...fontSize};
        tcolor = e.target.value
        setFontSize(tcolor);

        let newStyle =  {
            key:'fontSize',
            value:tcolor+"px"
        }

        console.log('fontSize')
        console.log(tcolor)
        var tempBoard = JSON.parse(JSON.stringify(board))
        var newData = await FindAndSaveStyleInJson(tempBoard,sectionId,newStyle);
        setBoard(newData)
        
    }
    return (
      
            
        <div>
            <label>Font-Size</label>
            <input value={fontSize} onChange={handleChange} type="number" /> 
            

        </div>
      );
}

export default FontSizeChange;