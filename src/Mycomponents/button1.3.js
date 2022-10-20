import * as React from 'react';


const MyButton13 = ({ disabled, text }) => (
    <button disabled={disabled}>{text}</button>
);

MyButton13.defaultProps = {
    text: "My Button",
    disabled: false,
};

export default MyButton13;