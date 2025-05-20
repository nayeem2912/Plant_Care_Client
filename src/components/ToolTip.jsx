import React, { useState } from 'react';

const ToolTip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className='tooltip-container'
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && <div className='tooltip p-6 rounded-lg bg-black text-white'>{text}</div>}
        </div>
    );
};

export default ToolTip;