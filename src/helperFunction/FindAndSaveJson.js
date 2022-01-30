const FindAndSaveJson = async  (jdata,id,data) =>{
    console.log("FindAndSaveJson")
    console.log(jdata)
    let newData = [];
    var value = null;
    for(let d of jdata){
        if(d.id == id ){
            if(!Array.isArray(d.content)) d.content = []
            // console.log("yes and save found")
            // console.log(d.id)
            // console.log(d.content)
            value = d
            d.content.push(data) ;
        }
        if(Array.isArray(d.content)){
            d.content = await  FindAndSaveJson(d.content,id,data)
        }
        newData.push(d)
    }
    return newData;
}

export default FindAndSaveJson;