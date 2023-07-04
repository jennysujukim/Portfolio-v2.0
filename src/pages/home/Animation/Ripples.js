import { useEffect, useRef } from 'react'

import $ from 'jquery'
import 'jquery.ripples'

export default function Ripples(){

    const ripples = useRef()

    useEffect(() => {

        const currentRipples = ripples.current

        $(currentRipples).ripples({
            resolution: 512,
            dropRadius: 50,
            perturbance: 0.04,
            interactive: true,
            event: "mousemove" 
        })

        // clean up
        return () => {
            $(currentRipples).ripples('destroy')
        }

    }, [])

    return (
        <div ref={ripples} className="ripples"></div>
    )
}