import React from 'react'
import styled  from 'styled-components'

interface Props { }

const Footer: React.FC<Props> = () => {
    return (
        <FooterStyle>
            <p>Footer</p>
            <div></div>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    height: 100vh;
    position: relative;
    
    P {
        background-color: #ccc;
    }

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: -100px;
        width: 100px;
        height: 100px;
        background-color: #da9a9a;
        border-radius: 50%;
    }
`
export default Footer