import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

function Hero() {
  const [anytimeText, setAnytimeText] = useState('')
  const [anywhereText, setAnywhereText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const phaseRef = useRef('anytime')
  const anytimeIndexRef = useRef(0)
  const anywhereIndexRef = useRef(0)

  useEffect(() => {
    const anytime = 'Anytime.'
    const anywhere = 'Anywhere.'

    const typeInterval = setInterval(() => {
      if (phaseRef.current === 'anytime') {
        if (anytimeIndexRef.current < anytime.length) {
          setAnytimeText(anytime.substring(0, anytimeIndexRef.current + 1))
          anytimeIndexRef.current++
        } else {
          phaseRef.current = 'pause'
          setTimeout(() => {
            phaseRef.current = 'anywhere'
          }, 500)
        }
      } else if (phaseRef.current === 'anywhere') {
        if (anywhereIndexRef.current < anywhere.length) {
          setAnywhereText(anywhere.substring(0, anywhereIndexRef.current + 1))
          anywhereIndexRef.current++
        } else {
          // Wait before restarting
          setShowCursor(false)
          phaseRef.current = 'done'
          setTimeout(() => {
            // Reset everything and start over
            setAnytimeText('')
            setAnywhereText('')
            setShowCursor(true)
            anytimeIndexRef.current = 0
            anywhereIndexRef.current = 0
            phaseRef.current = 'anytime'
          }, 2000) // Wait 2 seconds before restarting
        }
      }
    }, 100) // Typing speed - adjust as needed

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section className="w-full bg-[#DFE8F4] min-h-[600px] relative overflow-hidden">
      {/* Grid Pattern Background - Only at top */}
      <div className="absolute top-0 left-0 right-0" style={{
        height: '150px',
        backgroundImage: `
          linear-gradient(to right, rgba(71, 108, 162, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71, 108, 162, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '55px 55px',
        opacity: 0.6,
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[50px]" style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              lineHeight: 'normal',
              color: '#000'
            }}>
              Access Your Land{' '}
              <br />
              Records.{' '}
              <span style={{ 
                color: '#476CA2'
              }}>
                {anytimeText}
                {showCursor && (anytimeText.length < 'Anytime.'.length || (anytimeText.length === 'Anytime.'.length && anywhereText.length < 'Anywhere.'.length)) && <span className="animate-pulse">|</span>}
              </span>
              <br />
              <span style={{ 
                color: '#476CA2'
              }}>
                {anywhereText}
                {showCursor && anywhereText.length < 'Anywhere.'.length && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl" style={{
              color: '#52555F',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.5',
              maxWidth: '100%',
              flexShrink: 0
            }}>
              Effortlessly access your property records, permits, and complete ownership history in a secure digital environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="w-full sm:w-auto px-4 sm:px-5 text-sm sm:text-base" style={{
                borderRadius: '12px',
                background: '#476CA2',
                display: 'inline-flex',
                height: '48px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                color: 'white',
                gap: '8px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontWeight: 500
              }}
              onMouseEnter={(e) => e.target.style.background = '#3a5a87'}
              onMouseLeave={(e) => e.target.style.background = '#476CA2'}
              >
                <span>Access Dashboard</span>
                <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <button className="w-full sm:w-auto px-4 sm:px-5 text-sm sm:text-base" style={{
                borderRadius: '12px',
                border: '2px solid #476CA2',
                display: 'inline-flex',
                height: '48px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                background: 'transparent',
                color: '#476CA2',
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(71, 108, 162, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
              >
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Section - Isometric Illustration */}
          <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[502px] aspect-square" style={{
              background: 'url(/illustrator-hero.png) 50% / cover no-repeat',
              flexShrink: 0
            }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

