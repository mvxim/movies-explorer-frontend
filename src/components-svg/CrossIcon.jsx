import * as React from 'react';

const CrossIcon = (props) => (
    <svg
        width={ 32 }
        height={ 32 }
        viewBox={ '0 0 32 32' }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <path fill="#000"
            d="M7.16 9.282 9.28 7.161l15.556 15.556-2.121 2.122z"
        />
        <path
            fill="#000"
            d="m22.717 7.161 2.121 2.122L9.282 24.839l-2.121-2.121z"
        />
    </svg>
);

export default CrossIcon;
