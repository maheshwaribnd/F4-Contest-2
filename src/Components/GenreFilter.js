import React from 'react'
import Button from './Button'

function GenreFilter() {
  return (
    <div className='w-full h-32 border-solid border-2 bg-gray-100 sm:h-52 md:h-44 lg:h-36'>
      <h2 className='pl-4 pt-4 font-semibold text-lg'>Filter by Genre</h2>
      <div className='flex flex-wrap justify-evenly'>
        <Button name="Drama" />
        <Button name="Crime" />
        <Button name="Action" />
        <Button name="Fantasy" />
        <Button name="Western" />
        <Button name="Science Fiction" />
        <Button name="Thriller" />
        <Button name="War" />
        <Button name="Animation" />
      </div>
    </div>
  )
}

export default GenreFilter;
