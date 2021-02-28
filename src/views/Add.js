import React from 'react'
import { ResultCard } from '../components/ResultCard'

export const Add = () => {
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState([])

  const onChange = e => {
    e.preventDefault()

    setQuery(e.target.value)

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d51e2a0e2c5d5c638a73cced21ea06b4&page=1&query=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        if(!data.errors ) {
          setResults(data.results)
        } else {
          setResults([])
        }
      })
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
