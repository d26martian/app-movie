import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MovieControls = ({ type, movie }) => {

  const {removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched} = React.useContext(GlobalContext)

  // function handleRemove(movie) {
  //   console.log('remove')
  //   removeMovieFromWatchlist(movie.id)
  // }

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button className="ctrl-btn">
            <i className="fa-fw fa fa-times" onClick={() => removeMovieFromWatchlist(movie.id)}></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
        <button className="ctrl-btn">
          <i className="fa-fw far fa-eye-slash" onClick={() => moveToWatchlist(movie)}></i>
        </button>
        <button className="ctrl-btn">
          <i className="fa-fw fa fa-times" onClick={() => removeFromWatched(movie.id)}></i>
        </button>
        </>
      )}
    </div>
  )
}
