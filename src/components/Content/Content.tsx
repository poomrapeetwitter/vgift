import './Content.css'
import RightArrow from '@/assets/items/right-arrow.png'
import BackArrow from '@/assets/items/back-arrow.png'

import { useState } from 'react'

function Content() {
  const [currentGiftState, setCurrentGiftState] = useState(0)
  const [animationClass, setAnimationClass] = useState('')
  const REPO_NAME = 'vgift'

  const GiftState = [
    { 
      img: `/${REPO_NAME}/items/valentine-box.png`, 
      header: 'A Valentine\'s box?', 
      description: 'ทาดาาา~ นี่คือของขวัญวันวาเลนไทน์ที่เราจะให้เธอในวันนี้นะ! อยากรู้ไหมว่าข้างในมีอะไร เธอลองเปิดดูสิ!',
      next: 'แกะกล่องของขวัญ'
    },
    { img: `/${REPO_NAME}/items/opened-valentine-box.png`, 
      header: 'Is it a bouquet of roses?', 
      description: 'เหมือนจะเป็นช่อดอกกุหลาบนะ! แต่ไม่แน่ใจว่ามีอะไรอีกหรือเปล่า เธอลองนำช่อดอกไม้ออกมาดูสิ!',
      next: 'นำช่อดอกไม้ออกมา'
    },
    { img: `/${REPO_NAME}/items/opened-bouquet-roses.png`, 
      header: 'Surprise! this is for you!', 
      description: 'เซอร์ไพร์ส! ช่อดอกกุหลาบนี้เป็นของขวัญที่เราอยากให้เธอในวันพิเศษนี้ หวังว่าเธอจะชอบนะ! แต่เดี๋ยวก่อน ยังมีอะไรอีกอย่างหนึ่งที่เราอยากให้เธอ ลองดูสิ!', 
      next: 'หยิบจดหมายด้านใน'
    },
    { img: `/${REPO_NAME}/items/valentine-letter.png`, 
      header: 'A Valentine\'s letter', 
      description: 'เราเขียนจดหมายฉบับนี้ขึ้นมาเพื่ออยากจะบอกอะไรบางอย่างกับเธอหน่ะ ได้โปรดอ่านมันนะ!', 
      next: 'อ่านจดหมาย'
    },
    { img: `/${REPO_NAME}/items/opened-valentine-letter-3.png`, 
      header: 'Happy Valentine\'s Day!', 
      description: 'สุขสันต์วันวาเลนไทน์นะ! ถึงแม้ว่าเราจะพึ่งรู้จักกันไม่นาน แต่ความสดใสกับความน่ารักของเธอทำให้เราอยากรู้จักเธอให้มากกว่านี้ หวังว่าเธอจะชอบของขวัญชิ้นนี้นะ :)', 
      next: 'กลับไปหน้าแรก'
    },
  ]

  const handleClick = () => {
    const isLast = currentGiftState >= GiftState.length - 1
    const nextState = isLast ? 0 : currentGiftState + 1

    setAnimationClass('animate__zoomOut')

    setTimeout(() => {
      setCurrentGiftState(nextState)
      setAnimationClass('animate__zoomIn')
    }, 300)
  }

  return (
    <>
      <div className='content'>
        <div className='content__body'>
          <div className='content__body-image animate__animated animate__tada'>
            <div className='float image-wrapper'>
              <img
                key={currentGiftState}
                src={GiftState[currentGiftState].img}
                className={`animate__animated ${animationClass}`}
              />
            </div>
          </div>
          <div 
            key={currentGiftState} 
            className='content__body-description animate__animated animate__fadeIn'
          >
            <div>
              <div className='content__body-description--header'>
                {GiftState[currentGiftState].header}
              </div>
              <div className='content__body-description--text'>
                {GiftState[currentGiftState].description}
              </div>  
            </div>
            <div className='button-wrapper' onClick={handleClick}>
              <div>{GiftState[currentGiftState].next}</div>
              <img 
                src={currentGiftState < GiftState.length - 1 ? RightArrow : BackArrow} 
                className="content__body-description--icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content