import React from 'react'

export default props => (
    <header>
        <h2 className='page-header'>{props.name} <small>{props.small}</small></h2>
    </header>    
)