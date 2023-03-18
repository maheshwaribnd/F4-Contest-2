import React from 'react'

function Button({ name }) {
  return (
    <div className='m-2 mt-6'>
      <button className='w-28 h-9 border-2 text-sm bg-gray-300 rounded-md'>{name}</button>
    </div>
  )
}

export default Button
