import './HeartRain.css'

function HeartRain() {
  
  return (
    <>
      <div className="rain-container">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: Math.random() * 100 + "vw",
              animationDuration: 3 + Math.random() * 5 + "s",
              fontSize: 15 + Math.random() * 25 + "px"
            }}
          >
            ❤
          </span>
        ))}
      </div>
    </>
  )
}

export default HeartRain