import React from 'react'
import A from './A'

export default function B({greet}) {
  return (
    <div>
        <A greet={greet}/>
    </div>
  )
}
