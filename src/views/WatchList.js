import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from '../components/MovieCard'

export const WatchList = () => {

  const {watchlist} = React.useContext(GlobalContext)


  return (
    <div className="movi-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} Movies
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
          {watchlist.map(item => (
            <MovieCard movie={item} type="watchlist"  key={item.id} />
          ))}
        </div>
        ) : (
          <h2 className="no-movies">No movies in your list</h2>
        )}
      </div>
    </div>
  )
}
