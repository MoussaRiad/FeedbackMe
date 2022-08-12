import React from 'react'
import { Link } from 'react-router-dom'

export default function  Icon({children,type,link}) {
  return (
    <div className={`icon-${type}`}>
    <Link to={link}>
        {children}
    </Link>
        
    </div>
  )
}
