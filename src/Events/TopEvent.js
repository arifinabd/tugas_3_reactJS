import React from 'react'

function TopEvent() {
    const handleFooter = (value, e) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <div>
            <a href="/" onClick={(e) => handleFooter("Back To home",e)}>
                Back To Home
            </a>
        </div>
    )
}

export default TopEvent
