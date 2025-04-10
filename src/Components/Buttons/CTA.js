import React from 'react'
import "./CTA.css";

function CTA({ctaMsg}) {
  return (
    <button className='CTA-btn'>
        {ctaMsg}
    </button>
  )
}

export default CTA