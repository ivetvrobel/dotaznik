import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({ type, text, onSelected }) => {
    return (
        <div
            className="option"
            onClick={() => {
                onSelected(type);
                console.log(text);
            }}
        >
            <Icon type={type} />
            <div>{text}</div>
        </div>
    );
};

export default Option;
