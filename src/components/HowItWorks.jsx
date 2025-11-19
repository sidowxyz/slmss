function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 style={{
            color: '#000',
            fontFamily: 'Inter',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            marginBottom: '16px'
          }}>
            How Our Process Works
          </h2>
          <p style={{
            color: '#8C8C8C',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal'
          }}>
            Get started in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center relative" style={{ gap: '40px', overflow: 'visible' }}>
          {/* Mobile Vertical Curved Connector Line */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2" style={{ 
            top: '127px',
            height: 'calc(100% - 254px)',
            width: '100%',
            maxWidth: '193px',
            zIndex: 1,
            pointerEvents: 'none'
          }}>
            <svg width="193" height="100%" style={{ width: '100%', height: '100%' }} viewBox="0 0 193 663" preserveAspectRatio="none">
              <path
                d="M 96.5 0 C 20 110.5, 20 221, 96.5 331.5 C 173 442, 173 552.5, 96.5 663"
                stroke="#A5A5A5"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>

          {/* Desktop Horizontal Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ 
            width: '663px', 
            height: '193px', 
            flexShrink: 0,
            zIndex: 1,
            pointerEvents: 'none'
          }}>
            <svg width="663" height="193" style={{ width: '100%', height: '100%' }}>
              <path
                d="M 0 96.5 C 110.5 20, 221 20, 331.5 96.5 C 442 173, 552.5 173, 663 96.5"
                stroke="#A5A5A5"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>

          {/* Step 1 */}
          <div className="relative" style={{ zIndex: 2 }}>
            {/* Mobile Dot */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 -top-2" style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#476CA2',
              border: '3px solid #F8FAFC',
              zIndex: 3
            }}></div>
            <div style={{
              borderRadius: '12px',
              border: '1px solid #DFE8F4',
              background: '#FFF',
              width: '234px',
              height: '254px',
              flexShrink: 0,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/step-1.png" 
                  alt="Step 1" 
                  style={{
                    width: '127.287px',
                    height: '125px',
                    flexShrink: 0
                  }}
                />
              </div>
              {/* Text */}
              <div className="text-center">
                <span style={{
                  color: '#476CA2',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  STEP 1
                </span>
                <h3 style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}>
                  Login with Phone or Email
                </h3>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative" style={{ zIndex: 2 }}>
            {/* Mobile Dot */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 -top-2" style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#476CA2',
              border: '3px solid #F8FAFC',
              zIndex: 3
            }}></div>
            <div style={{
              borderRadius: '12px',
              border: '1px solid #DFE8F4',
              background: '#FFF',
              width: '234px',
              height: '254px',
              flexShrink: 0,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/step-2.png" 
                  alt="Step 2" 
                  style={{
                    width: '116px',
                    height: '125px',
                    flexShrink: 0
                  }}
                />
              </div>
              {/* Text */}
              <div className="text-center">
                <span style={{
                  color: '#476CA2',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  STEP 2
                </span>
                <h3 style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}>
                  Verify with OTP
                </h3>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative" style={{ zIndex: 2 }}>
            {/* Mobile Dot */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 -top-2" style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#476CA2',
              border: '3px solid #F8FAFC',
              zIndex: 3
            }}></div>
            <div style={{
              borderRadius: '12px',
              border: '1px solid #DFE8F4',
              background: '#FFF',
              width: '234px',
              height: '254px',
              flexShrink: 0,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/step-3.png" 
                  alt="Step 3" 
                  style={{
                    width: '123px',
                    height: '125px',
                    flexShrink: 0
                  }}
                />
              </div>
              {/* Text */}
              <div className="text-center">
                <span style={{
                  color: '#476CA2',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  STEP 3
                </span>
                <h3 style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}>
                  Access Your Dashboard
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

