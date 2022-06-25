import React from "react";
import * as C from './styles';
import bat from "../../assets/images/bat.jpg"

export const ImageHome = () => {

    return (
        <C.Container>
            <C.Bat src={bat} />
        </C.Container>
    )
}