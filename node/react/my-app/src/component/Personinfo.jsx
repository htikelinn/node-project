



import React from 'react'

export default function Personinfo({name,country,job,children}) {
// const {name,country,job} = {...props};
  return (
    <div>
        <h1>I am {name} from {country}, I am a {job}</h1>
        {children}
    </div>
  )
}
