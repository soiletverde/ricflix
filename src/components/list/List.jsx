import React, { useRef, useState } from 'react'
import './list.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import ListItem from '../listItem/ListItem'
import useApi from '../../hooks/useApi'

const List = ({ entity, title }) => {
  //! https://stackoverflow.com/questions/55677600/typescript-how-to-pass-object-is-possibly-null-error
  const listRef = useRef(document.createElement('div'))
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230)

  const [values, loading] = useApi(entity)

  const handleClick = (direction) => {
    setIsMoved(true)
    const arrowPadding = 50
    const cardWidth = 230
    const cardsToSwipe = 1
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    let distance = listRef.current.getBoundingClientRect().x - arrowPadding

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - cardsToSwipe)
      listRef.current.style.transform = `translateX(${cardWidth + distance}px)`
    }
    if (direction === 'right' && slideNumber < 20 - clickLimit) {
      setSlideNumber(slideNumber + cardsToSwipe)
      listRef.current.style.transform = `translateX(${-cardWidth + distance}px)`
    }
  }
  return (
    <div className='list'>
      <span className='listTitle'>{title}</span>

      <div className='wrapper'>
        <MdKeyboardArrowLeft
          className='sliderArrow left'
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className='container' ref={listRef}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            values.map((value, i) => (
              <ListItem
                key={value.id}
                title={value.title || value.name}
                overview={value.overview || value.description}
                imgPath={value.backdrop_path}
                releaseDate={value.release_date}
                index={i}
              />
            ))
          )}
        </div>
        <MdKeyboardArrowRight
          className='sliderArrow right'
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default List
