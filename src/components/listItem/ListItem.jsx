import React, { useEffect, useState } from 'react'
import { apiBuilder } from '../../apiConfig'
import './listItem.css'
// import {
//   MdPlayArrow,
//   MdAddCircleOutline,
//   MdOutlineThumbDown,
//   MdOutlineThumbUp,
//   MdOutlineArrowDropDownCircle,
// } from 'react-icons/md'

const ListItem = ({ overview, title, imgPath, releaseDate, index }) => {
  const [img, setImg] = useState(null)
  const [isHovered, setIsHovered] = useState(false) //--

  useEffect(() => {
    const url = apiBuilder.tryGetImg(imgPath)
    setImg(url)
  }, [imgPath])

  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt='cover' />
      {isHovered && (
        <>
          <div className='itemInfo'>
            <div className='itemInfoTop'>
              <h3>
                {title}
                {/* <div className='actions'>
              <MdPlayArrow />
              <MdAddCircleOutline />
              <MdOutlineThumbDown />
              <MdOutlineThumbUp />
              <MdOutlineArrowDropDownCircle />
            </div> */}
              </h3>
              <p>{releaseDate}</p>
            </div>
            <div className='desc'>{overview}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem
