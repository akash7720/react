import React from 'react'
import Styled from 'styled-components'

const StyleComponents = () => {
    const MyComponents = Styled.div` 
    color:red;
    font-size:40px;
    `;
  return ( 
    <MyComponents> StyleComponents</MyComponents>
  )
}

export default StyleComponents