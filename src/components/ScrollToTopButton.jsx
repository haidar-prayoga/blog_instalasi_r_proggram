import React from 'react'
import { MdOutlineArrowCircleUp } from "react-icons/md";


const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <button onClick={scrollToTop}>
            <MdOutlineArrowCircleUp className='fixed right-5 bottom-4 text-3xl hover:text-blue-300' />
        </button>
    )
}

export default ScrollToTopButton