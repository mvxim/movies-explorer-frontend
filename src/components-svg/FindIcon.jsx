import * as React from "react"

const FindIcon = (props) => (
    <svg
        width={34}
        height={34}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={34} height={34} rx={17} fill="#2BE080" />
        <path
            d="m15 23 5-6-5-6"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default FindIcon
