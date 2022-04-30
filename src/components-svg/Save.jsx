import * as React from 'react';

const Save = (props) => (
    <svg width={ 24 }
        height={ 24 }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <rect width={ 24 }
            height={ 24 }
            rx={ 12 }
            fill="#F9F9F9"
        />
        <path d="M14.273 8c-1 0-1.727.523-2.273 1.09C11.454 8.567 10.727 8 9.727 8 8.137 8 7 9.264 7 10.833c0 .785.318 1.482.91 1.962L12 16.5l4.09-3.705c.546-.523.91-1.177.91-1.962C17 9.264 15.864 8 14.273 8Z"
            fill="#ffffff"
        />
    </svg>
);

export default Save;