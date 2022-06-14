import React, { useState } from 'react'
import styled from 'styled-components'

interface Props { }

type ToTopProps = {scrollState: boolean}


const ScrollToTop: React.FC<Props> = () => {
    const [ scrollState, setScrollState] = useState(false)

    const toTop = () => {
        window.scrollTo({ top: 0 })
    }

    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false)
    })

    return (
        <ToTop scrollState={scrollState} onClick={toTop}>
            <p>Top</p>
        </ToTop>
    )
}

const ToTop = styled.div<ToTopProps>`
    display: ${(props) => (props.scrollState ? "block" : "none")};
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    z-index: 10;
    cursor: pointer;
    p {
        height: 1.5rem;
    }
    border-radius: 2rem;
    background-color: #1900ff39;
    padding: 1rem;
`

export default ScrollToTop