import React from "react";




const InputCom = ({tp,plHd,inpVal,onChg}) => {
    return <input
    type={tp}
    placeholder={plHd}
    value={inpVal}
    onChange={ (e) => onChg(e.target.value)}

    />

}


export default InputCom;