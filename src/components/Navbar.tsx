import React from 'react'
import styled  from 'styled-components'

interface Props { }

const Navbar: React.FC<Props> = () => {
    return (
        <Nav>Navbar</Nav>
    )
}

const Nav = styled.nav`
    background-color: #ccc;
`
export default Navbar