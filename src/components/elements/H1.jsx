function H1(item) {
    console.log('H1-Item')
    console.log(item)
    return ( 
       
        <h1 style={item.style} onClick={item.onClick} id={item.id} >H1 TAG</h1>
     );
}

export default H1;