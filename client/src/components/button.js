import React from "react";




const ButtonCom = ({btnFunc,btnText}) => {
    return <button
    onClick={btnFunc}
>{btnText}</button>
    

}


export default ButtonCom;