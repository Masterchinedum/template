import React from 'react';

export default function BoxComponent(props) {
    return <div className={`box ${props.on ? 'isFilled' : ''}`} onClick={props.onClick}></div>;
}
