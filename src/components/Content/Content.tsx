import './Content.css'
import ValentineBox from '@/assets/items/valentine-box.png'
import OpenedValentineBox from '@/assets/items/opened-valentine-box.png'
import OpenedBouquetRoses from '@/assets/items/opened-bouquet-roses.png'
import ValentineLetter from '@/assets/items/valentine-letter.png'
import OpenedValentineLetter from '@/assets/items/opened-valentine-letter-2.png'
import LeftGiftPile from '@/assets/items/gift-pile-1.png'
import RightGiftPile from '@/assets/items/gift-pile-2.png'
import { useState } from 'react'

function Content() {
  const [currentGiftState, setCurrentGiftState] = useState(0)

  const [animationClass, setAnimationClass] = useState('')

  const GiftState = [
    { img: ValentineBox, description: 'A beautiful Valentine\'s box' },
    { img: OpenedValentineBox, description: 'The box has been opened!' },
    { img: OpenedBouquetRoses, description: 'The roses are now open and fragrant!' },
    { img: ValentineLetter, description: 'A heartfelt letter' },
    { img: OpenedValentineLetter, description: 'The letter has been read!' },
  ]

  const handleClick = () => {
    if (currentGiftState >= GiftState.length - 1) {
      return
    }

    setAnimationClass('animate__zoomOut')
    setTimeout(() => {
      setCurrentGiftState(prev =>
        prev < GiftState.length - 1 ? prev + 1 : prev
      )
      setAnimationClass('animate__zoomIn')
    }, 300)
  }

  return (
    <>
      <div className='content'>
        <div className='content__body'>
          <div className='content__body-image animate__animated animate__tada' onClick={handleClick}>
            <div className='float image-wrapper'>
              <img
                key={currentGiftState}
                src={GiftState[currentGiftState].img}
                className={`animate__animated ${animationClass}`}
              />
            </div>
          </div>
          <div className='content__body-description'>
            <div>
              {GiftState[currentGiftState].description}
            </div>
          </div>
        </div>

        
      
      <div className='footer'>
        <img className='animate__animated animate__fadeIn footer__gift-pile--left' src={LeftGiftPile} />
        <img className='animate__animated animate__fadeIn footer__gift-pile--right' src={RightGiftPile} />
      </div>
      </div>
    </>
  )
}

export default Content