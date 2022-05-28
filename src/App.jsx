import './App.css'
import React from 'react'
// import movie_popular from './data/moviePopular.mock'
import Navbar from './components/navbar/Navbar'
import Featured from './components/featured/Featured'
import List from './components/list/List.jsx'

import { apiEntity } from './apiConfig'

function App() {
  // const moviePopular = movie_popular()
  console.log(process.env)

  return (
    <>
      <Navbar />
      <div style={{ overflow: 'hidden' }}>
        <Featured />
        <List
          entity={apiEntity.popularMovies}
          title={'Peliculas populares'}
        />
        <List
          entity={apiEntity.topRatedMovies}
          title='Peliculas mejor puntuadas'
        />

        {/* <h2> Probando que app.js funcione con mock data</h2>
        <main style={{ padding: '10px' }}>
          {moviePopular.results.map((movie) => (
            <p key={movie.id} style={{ padding: '15px' }}>
              {movie.title}
            </p>
          ))}
        </main> */}
      </div>
    </>
  )
}

export default App
