import React from 'react'
import PropTypes from 'prop-types'
export default function Button({children,type,version,disable}) {
  return (
    <button type={type} disabled={disable} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    disable:false,
}
Button.protoTypes={
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    type:PropTypes.string,
    disable:PropTypes.bool,
}
