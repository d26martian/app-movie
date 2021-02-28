import React from 'react'
import { GlobalContext } from '../context/GlobalState' 
import { MovieCard } from '../components/MovieCard'

export const Watched = () => {

  const {watched} = React.useContext(GlobalContext)

  return (
    <div className="movi-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watched</h1>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
          {watched.map(item => (
            <MovieCard movie={item} type="watched"  key={item.id} />
          ))}
        </div>
        ) : (
          <h2 className="no-movies">No movies in your list</h2>
        )}
      </div>
    </div>
  )
}
