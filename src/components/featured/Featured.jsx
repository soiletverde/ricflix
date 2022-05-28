import React from 'react'
import { MdPlayArrow, MdOutlineInfo } from 'react-icons/md'
import './featured.css'

import { apiEntity } from '../../apiConfig'
import useApi from '../../hooks/useApi'

const Featured = () => {
  const [movie, loading, error, randomMovie, backImg] = useApi(
    apiEntity.popularMovies,
  )

  return (
    <div
      className='featured'
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='info'>
        <h1 className='movieTitle'>
          {loading ? 'Loading...' : randomMovie?.title}
        </h1>
        <span className='desc'>
          {loading ? 'Loading...' : randomMovie?.overview}
        </span>
        <div className='buttons'>
          <button className='play'>
            <MdPlayArrow className='icon' />
            <span>Reproducir</span>
          </button>
          <button className='more'>
            <MdOutlineInfo className='icon' />
            <span>Mas informacion</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
