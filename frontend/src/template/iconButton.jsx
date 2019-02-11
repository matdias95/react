import React from 'react'
import Check from './check'

export default props => 
(
    <Check test={!props.hide}>
        <button className={'btn btn-' + props.style}onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </Check>
)