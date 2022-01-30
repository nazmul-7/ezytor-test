function PrimaryButton({item}) {
    const mystyle = {
        color: '#FFFFFF',
        backgroundColor: '#04AA6D',
        borderRadius: '5px',
        fontSize: '17px',
        fontFamily: "'Source Sans Pro', sans-serif",
        padding:' 6px 18px',
      };
    return ( 
        <button style={mystyle}>PM Button Tag</button>
     );
}

export default PrimaryButton;