import './Content.css'
import ValentineBox from '@/assets/items/valentine-box.png'
import OpenedValentineBox from '@/assets/items/opened-valentine-box.png'
import BouquetRoses from '@/assets/items/bouquet-roses.png'
import OpenedBouquetRoses from '@/assets/items/opened-bouquet-roses.png'
import ValentineLetter from '@/assets/items/valentine-letter.png'
import OpenedValentineLetter from '@/assets/items/opened-valentine-letter.png'
import { useState } from 'react'


function Content() {
  const [currentGiftState, setCurrentGiftState] = useState(0)
  const [fade, setFade] = useState(false)

  const GiftState = [
    { img: ValentineBox, description: 'A beautiful Valentine\'s box' },
    { img: OpenedValentineBox, description: 'The box has been opened!' },
    { img: BouquetRoses, description: 'A bouquet of red roses' },
    { img: OpenedBouquetRoses, description: 'The roses are now open and fragrant!' },
    { img: ValentineLetter, description: 'A heartfelt letter' },
    { img: OpenedValentineLetter, description: 'The letter has been read!' },
  ]


  const handleClick = () => {
    if (fade) {
      return
    }

    if (currentGiftState >= GiftState.length - 1) {
      return
    }

    setFade(true)

    setTimeout(() => {
      setCurrentGiftState((prev) =>
        prev < GiftState.length - 1 ? prev + 1 : prev
      );
      setFade(false)
    }, 1500)
  }

  return (
    <>
      <div className='content'>
        <div className='content__body'>
          <div className='content__body-image image-wrapper' onClick={handleClick}>
            <img
              src={GiftState[currentGiftState].img}
              className={`float image ${fade ? 'hidden' : ''}`}
              alt=''
            />
          </div>
          <div className='content__body-description'>
            <div>
              {GiftState[currentGiftState].description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content