import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import "../styling/Tooltip.css";
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';




function Tooltip({ content, children }){
    return(

        <Tippy 
            className="tooltip"
            content={content}
            arrow={true}
            placement="auto"
            interactive={true}
            animation="scale"
            duration='100'
            delay="300"
            theme='light'
            arrowSize='large' 
        >
            {children}
        </Tippy>

    )
}

export default Tooltip