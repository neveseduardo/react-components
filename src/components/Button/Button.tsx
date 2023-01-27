import React from 'react';

interface GButtonProps {
    children: React.ReactNode,
}

const GButton = (props: GButtonProps) => (<button className="g-button">{ props.children }</button>);

export default GButton;