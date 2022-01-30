const FindAndSaveStyleInJson = async  (jdata,id,data) =>{
    console.log("FindAndSaveStyleInJson")
    console.log(jdata)
    let newData = [];
    var value = null;
    for(let d of jdata){
        if(d.id == id ){
            // if(!Array.isArray(d.content)) d.content = []
            d.style[data.key]=data.value
            value = d
            // d.content.push(data) ;
        }
        if(Array.isArray(d.content)){
            d.content = await  FindAndSaveStyleInJson(d.content,id,data)
        }
        newData.push(d)
    }
    return newData;
}

export default FindAndSaveStyleInJson;