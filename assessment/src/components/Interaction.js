

const Interaction = ({onClickHandler, component, typeCount, typeText}) => {
    return (
        <div className="interaction-content">
            <div className="interaction-icon"  onClick={onClickHandler}>
                {component}
            </div>
            <span className="count-display">{typeCount}</span><span className="type-display">{typeText}</span>
        </div>
    )
}

export default Interaction