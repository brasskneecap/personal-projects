const CommentSVG = ({color}) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0H2C0.875 0 0 0.90625 0 2V11C0 12.125 0.875 13 2 13H5V15.625C5 15.875 5.15625 16 5.375 16C5.4375 16 5.5 16 5.59375 15.9375L9.5 13H14C15.0938 13 16 12.125 16 11V2C16 0.90625 15.0938 0 14 0ZM14.5 11C14.5 11.2812 14.25 11.5 14 11.5H9L8.59375 11.8125L6.5 13.375V11.5H2C1.71875 11.5 1.5 11.2812 1.5 11V2C1.5 1.75 1.71875 1.5 2 1.5H14C14.25 1.5 14.5 1.75 14.5 2V11Z" fill={color ? color : "#12151D"} fillOpacity="0.6"/>
        </svg>
    )
}

export default CommentSVG