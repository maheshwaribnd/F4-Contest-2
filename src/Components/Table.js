import React from 'react'
import { movies } from './Array';
import MovieList from './MovieList';


function TableComponent() {
  return (
    <div>
      <table className='w-11/12 m-6 border-2'>
        <tr className='flex w-full justify-between px-6 py-2 bg-gray-100'>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
        {console.log(movies)}
        {movies.map((list) => {
          <MovieList title={list.title} genre={list.genre} year={list.year} />
        })}

        {/* {movies.map((item,id) => {
          <tr key={item.id}>{<MovieList item={item.title}/>}</tr>
        })} */}
      </table>
    </div>
  )
}

export default TableComponent;
