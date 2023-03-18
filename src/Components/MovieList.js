import React from 'react'

function MovieList({ title, genre, year }) {
  return (
    <div>
      <tr className='flex w-full justify-between px-6'>
        <td>title{title}</td>
        <td>{genre}</td>
        <td>{year}</td>
      </tr>
    </div>
  )
}

export default MovieList;
