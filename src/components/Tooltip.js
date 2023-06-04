import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import "../styling/Tooltip.css"



function Tooltip({ content, children }){
    return(

        <Tippy 
        className="tooltip"
        content={content}
        arrow={true}
        placement="left"
        interactive={true}
        animation="fade"
        duration='1000'

        >
        {children}
        </Tippy>

    )
}

export default Tooltip