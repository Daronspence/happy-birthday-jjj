import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Box from './Components/Box'
import RainingTacos from './Components/RainingTacos'


const App = () => {
  const [isShowingWinners, setIsShowingWinners] = useState(false)
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  return (
    <Box>
      <Box className="min-h-screen bg-gray-900 text-white relative flex items-center justify-center overflow-hidden">
        <RainingTacos
          isShowingWinners={isPlayingVideo}
          className="absolute inset-0 w-full h-screen z-0 pointer-events-none overflow-hidden"
        />
        <Box>
          <Box className="flex flex-col items-center justify-center">
            {!isShowingWinners && (
              <>
                {isPlayingVideo ? (
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/npjF032TDDQ?autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="flex flex-col items-center">
                    <button
                      className="px-4 py-2 bg-rainbow text-2xl font-bold tracking-widest uppercase"
                      onClick={() => {
                        setIsPlayingVideo(true)
                      }}
                    >
                      Happy Birthday JJJ 🎵
                    </button>
                    <span>(click the button)</span>
                  </div>
                )}
              </>
            )}
            {isPlayingVideo && <div>
                <h1 className="mt-8 text-4xl font-bold">Happy Birthday John!</h1>
            </div>}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
