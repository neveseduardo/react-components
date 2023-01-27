import { PropsWithChildren } from 'react';

const GButton = (props: PropsWithChildren) => (<button className="g-button">{ props.children }</button>);

export default GButton;