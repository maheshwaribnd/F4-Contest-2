import './App.css';
// import { movies } from './Components/Array';
import GenreFilter from './Components/GenreFilter';
import TableComponent from './Components/Table';
// import MovieList from './Components/MovieList';


function App() {

  return (
    <>
      <h1 className='flex justify-center text-3xl font-bold pt-3'>Top 15 Movies of All Time</h1>
      <div className='flex justify-center m-6'>
        <GenreFilter />
      </div>
      <TableComponent/>
    </>
  );
}

export default App;
