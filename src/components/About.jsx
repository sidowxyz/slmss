import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

function About({ showHero = false }) {
  const [propertiesCount, setPropertiesCount] = useState(0)
  const [usersCount, setUsersCount] = useState(0)
  const [districtsCount, setDistrictsCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!showHero || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            
            // Animate Properties Registered (10,000)
            const propertiesTarget = 10000
            const propertiesDuration = 2000
            const propertiesSteps = 60
            const propertiesIncrement = propertiesTarget / propertiesSteps
            let propertiesCurrent = 0
            const propertiesInterval = setInterval(() => {
              propertiesCurrent += propertiesIncrement
              if (propertiesCurrent >= propertiesTarget) {
                setPropertiesCount(propertiesTarget)
                clearInterval(propertiesInterval)
              } else {
                setPropertiesCount(Math.floor(propertiesCurrent))
              }
            }, propertiesDuration / propertiesSteps)

            // Animate Active Users (5,000)
            const usersTarget = 5000
            const usersDuration = 2000
            const usersSteps = 60
            const usersIncrement = usersTarget / usersSteps
            let usersCurrent = 0
            const usersInterval = setInterval(() => {
              usersCurrent += usersIncrement
              if (usersCurrent >= usersTarget) {
                setUsersCount(usersTarget)
                clearInterval(usersInterval)
              } else {
                setUsersCount(Math.floor(usersCurrent))
              }
            }, usersDuration / usersSteps)

            // Animate Districts Covered (15)
            const districtsTarget = 15
            const districtsDuration = 1500
            const districtsSteps = 30
            const districtsIncrement = districtsTarget / districtsSteps
            let districtsCurrent = 0
            const districtsInterval = setInterval(() => {
              districtsCurrent += districtsIncrement
              if (districtsCurrent >= districtsTarget) {
                setDistrictsCount(districtsTarget)
                clearInterval(districtsInterval)
              } else {
                setDistrictsCount(Math.floor(districtsCurrent))
              }
            }, districtsDuration / districtsSteps)
          }
        })
      },
      { threshold: 0.3 }
    )

    const statsSection = document.getElementById('stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection)
      }
    }
  }, [showHero])

  return (
    <>
      {/* Hero Section with "About Us" - Only shown on About page */}
      {showHero && (
        <section className="w-full relative overflow-hidden" style={{
          background: '#476CA2',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Grid Pattern Background - Only half visible */}
          <div className="absolute top-0 left-0 right-0" style={{
            height: '150px',
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
            opacity: 0.6,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
          }}></div>
          
          <h1 className="relative z-10 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            textAlign: 'center'
          }}>
            About Us
          </h1>
        </section>
      )}

      {/* Main Content Section */}
      <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden" style={{ paddingBottom: showHero ? '0' : undefined }}>
        {!showHero && (
          /* Grid Pattern Background - Only at bottom for home page */
          <div className="absolute bottom-0 left-0 right-0" style={{
            height: '150px',
            backgroundImage: `
              linear-gradient(to right, rgba(71, 108, 162, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71, 108, 162, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
            opacity: 0.6,
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
          }}></div>
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {showHero ? (
            // About Page Layout
            <>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Section - Illustration */}
                <div className="flex justify-center md:justify-start">
                  <div className="w-full max-w-[400px] md:max-w-[500px] aspect-square" style={{
                    background: 'url(/illustrator-about-us.png) 50% / cover no-repeat',
                    flexShrink: 0
                  }}></div>
                </div>

                {/* Right Section - Content */}
                <div>
                  {/* Who We Are Label */}
                  <div className="flex justify-start mb-6">
                    <div style={{
                      borderRadius: '25px',
                      border: '1px solid rgba(71, 108, 162, 0.50)',
                      background: '#DFE8F4',
                      width: '162px',
                      height: '40px',
                      flexShrink: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal'
                    }}>
                      Who We Are
                    </div>
                  </div>

                  {/* Heading */}
                  <h2 style={{
                    color: '#476CA2',
                    fontFamily: 'Inter',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    marginBottom: '24px',
                    marginTop: 0,
                    paddingTop: 0,
                    textAlign: 'left'
                  }}>
                    What is SLMS?
                  </h2>

                  {/* Description */}
                  <p style={{
                    width: '100%',
                    maxWidth: '628px',
                    minHeight: '307px',
                    flexShrink: 0,
                    color: '#5A88B8',
                    textAlign: 'justify',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '28px',
                    margin: 0,
                    padding: 0
                  }}>
                    SLMS is a comprehensive digital platform designed to modernize and streamline land record management across Somalia. We provide secure, transparent, and accessible land information services to property owners, government agencies, and stakeholders. Our mission is to build trust in property transactions, reduce disputes, and foster economic development through reliable land administration. By digitizing land records, we're creating a foundation for sustainable growth and prosperity in Somalia.
                  </p>
                </div>
              </div>

              {/* Mission and Vision Cards */}
              <div style={{
                background: '#DFE8F4',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                minHeight: '455px',
                flexShrink: 0,
                padding: '40px 20px',
                marginTop: '48px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto justify-items-center w-full">
                {/* Our Mission Card */}
                <div style={{
                  width: '100%',
                  maxWidth: '546px',
                  minHeight: '254px',
                  flexShrink: 0,
                  borderRadius: '12px',
                  background: '#FFF',
                  padding: '24px',
                  display: 'flex',
                  gap: '20px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Icon */}
                  <div style={{
                    background: '#476CA2',
                    borderRadius: '12px',
                    width: '56px',
                    height: '56px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon icon="solar:target-outline" width="32" height="32" style={{ color: 'white' }} />
                  </div>
                  
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      color: '#476CA2',
                      textAlign: 'justify',
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      marginBottom: '12px',
                      marginTop: 0
                    }}>
                      Our Mission
                    </h3>
                    <p style={{
                      color: '#5A88B8',
                      textAlign: 'justify',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '28px',
                      margin: 0
                    }}>
                      To revolutionize land record management in Somalia by providing a secure, transparent, and accessible digital platform that empowers property owners, reduces disputes, and fosters economic development through reliable land administration.
                    </p>
                  </div>
                </div>

                {/* Our Vision Card */}
                <div style={{
                  width: '100%',
                  maxWidth: '546px',
                  minHeight: '254px',
                  flexShrink: 0,
                  borderRadius: '12px',
                  background: '#FFF',
                  padding: '24px',
                  display: 'flex',
                  gap: '20px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Icon */}
                  <div style={{
                    background: '#476CA2',
                    borderRadius: '12px',
                    width: '56px',
                    height: '56px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon icon="solar:eye-outline" width="32" height="32" style={{ color: 'white' }} />
                  </div>
                  
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      color: '#476CA2',
                      textAlign: 'justify',
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      marginBottom: '12px',
                      marginTop: 0
                    }}>
                      Our Vision
                    </h3>
                    <p style={{
                      color: '#5A88B8',
                      textAlign: 'justify',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '28px',
                      margin: 0
                    }}>
                      To be the leading land management system in Somalia and the Horn of Africa, creating a foundation for sustainable growth, transparency in property transactions, and building trust in the real estate sector for generations to come.
                    </p>
                  </div>
                </div>
                </div>
              </div>

              {/* Statistics Section */}
              <div id="stats-section" style={{
                background: 'white',
                width: '100%',
                minHeight: '200px',
                padding: '40px 20px',
                marginTop: '48px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-3 max-w-7xl mx-auto w-full" style={{ gap: '40px', justifyContent: 'center' }}>
                  {/* Properties Registered */}
                  <div className="flex flex-col items-center text-center">
                    <div style={{
                      borderRadius: '100px',
                      background: '#DFE8F4',
                      width: '70px',
                      height: '70px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <Icon icon="solar:home-linear" width="35" height="35" style={{ color: '#476CA2', flexShrink: 0 }} />
                    </div>
                    <h3 style={{
                      color: '#476CA2',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      marginBottom: '8px',
                      marginTop: 0
                    }}>
                      {propertiesCount.toLocaleString()}+
                    </h3>
                    <p style={{
                      color: '#476CA2',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      margin: 0,
                      opacity: 0.7
                    }}>
                      Properties Registered
                    </p>
                  </div>

                  {/* Active Users */}
                  <div className="flex flex-col items-center text-center">
                    <div style={{
                      borderRadius: '100px',
                      background: '#DFE8F4',
                      width: '70px',
                      height: '70px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <Icon icon="solar:users-group-two-rounded-outline" width="35" height="35" style={{ color: '#476CA2', flexShrink: 0 }} />
                    </div>
                    <h3 style={{
                      color: '#476CA2',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      marginBottom: '8px',
                      marginTop: 0
                    }}>
                      {usersCount.toLocaleString()}+
                    </h3>
                    <p style={{
                      color: '#476CA2',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      margin: 0,
                      opacity: 0.7
                    }}>
                      Active Users
                    </p>
                  </div>

                  {/* Districts Covered */}
                  <div className="flex flex-col items-center text-center">
                    <div style={{
                      borderRadius: '100px',
                      background: '#DFE8F4',
                      width: '70px',
                      height: '70px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <Icon icon="solar:point-on-map-linear" width="35" height="35" style={{ color: '#476CA2', flexShrink: 0 }} />
                    </div>
                    <h3 style={{
                      color: '#476CA2',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      marginBottom: '8px',
                      marginTop: 0
                    }}>
                      {districtsCount}+
                    </h3>
                    <p style={{
                      color: '#476CA2',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      margin: 0,
                      opacity: 0.7
                    }}>
                      Districts Covered
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Core Values Section */}
              <div style={{
                background: '#F8FAFC',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                minHeight: '502px',
                flexShrink: 0,
                padding: '40px 20px',
                marginTop: '48px',
                marginBottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}>
                <div className="max-w-7xl mx-auto w-full">
                  {/* Heading */}
                  <h2 style={{
                    color: '#000',
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    textAlign: 'center',
                    marginBottom: '12px',
                    marginTop: 0
                  }} className="sm:text-3xl">
                    Our Core Values
                  </h2>
                  
                  {/* Subtitle */}
                  <p style={{
                    color: '#8C8C8C',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    textAlign: 'center',
                    marginBottom: '48px',
                    marginTop: 0
                  }} className="sm:text-xl">
                    The principles that guide everything we do at SLMS
                  </p>

                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto justify-items-center w-full" style={{ gap: '24px' }}>
                    {/* Security Card */}
                    <div style={{
                      borderRadius: '12px',
                      border: '1px solid #DFE8F4',
                      background: '#FFF',
                      width: '100%',
                      maxWidth: '354px',
                      minHeight: '259px',
                      flexShrink: 0,
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        borderRadius: '100px',
                        background: '#476CA2',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '17px'
                      }}>
                        <Icon icon="solar:shield-check-outline" width="32" height="32" style={{ color: 'white' }} />
                      </div>
                      <h3 style={{
                        color: '#476CA2',
                        textAlign: 'justify',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        marginBottom: '12px',
                        marginTop: 0
                      }}>
                        Security
                      </h3>
                      <p style={{
                        width: '100%',
                        maxWidth: '297px',
                        minHeight: '83px',
                        flexShrink: 0,
                        color: '#5A88B8',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '28px',
                        margin: 0
                      }}>
                        Protecting your data with state-of-the-art encryption and security measures
                      </p>
                    </div>

                    {/* Transparency Card */}
                    <div style={{
                      borderRadius: '12px',
                      border: '1px solid #DFE8F4',
                      background: '#FFF',
                      width: '100%',
                      maxWidth: '354px',
                      minHeight: '259px',
                      flexShrink: 0,
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        borderRadius: '100px',
                        background: '#476CA2',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '17px'
                      }}>
                        <Icon icon="solar:eye-scan-linear" width="32" height="32" style={{ color: 'white' }} />
                      </div>
                      <h3 style={{
                        color: '#476CA2',
                        textAlign: 'justify',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        marginBottom: '12px',
                        marginTop: 0
                      }}>
                        Transparency
                      </h3>
                      <p style={{
                        width: '100%',
                        maxWidth: '297px',
                        minHeight: '83px',
                        flexShrink: 0,
                        color: '#5A88B8',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '28px',
                        margin: 0
                      }}>
                        Building trust through clear and accessible land records
                      </p>
                    </div>

                    {/* Innovation Card */}
                    <div style={{
                      borderRadius: '12px',
                      border: '1px solid #DFE8F4',
                      background: '#FFF',
                      width: '100%',
                      maxWidth: '354px',
                      minHeight: '259px',
                      flexShrink: 0,
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        borderRadius: '100px',
                        background: '#476CA2',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '17px'
                      }}>
                        <Icon icon="solar:lightbulb-bolt-linear" width="32" height="32" style={{ color: 'white' }} />
                      </div>
                      <h3 style={{
                        color: '#476CA2',
                        textAlign: 'justify',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        marginBottom: '12px',
                        marginTop: 0
                      }}>
                        Innovation
                      </h3>
                      <p style={{
                        width: '100%',
                        maxWidth: '297px',
                        minHeight: '83px',
                        flexShrink: 0,
                        color: '#5A88B8',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '28px',
                        margin: 0
                      }}>
                        Continuously improving to provide the best service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ready to Get Started Section */}
              <div style={{
                background: '#476CA2',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                minHeight: '337px',
                flexShrink: 0,
                padding: '40px 20px',
                marginTop: 0,
                marginBottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}>
                <div className="max-w-7xl mx-auto text-center w-full px-4">
                  {/* Heading */}
                  <h2 style={{
                    color: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '38px',
                    textAlign: 'center',
                    marginBottom: '19px',
                    marginTop: 0
                  }} className="sm:text-3xl">
                    Ready to Get Started?
                  </h2>
                  
                  {/* Description */}
                  <p style={{
                    width: '100%',
                    maxWidth: '686px',
                    minHeight: '64px',
                    flexShrink: 0,
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '30px',
                    margin: '0 auto 32px auto'
                  }} className="sm:text-lg">
                    Join thousands of property owners and stakeholders who trust SLMS for their land record management needs.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="w-full sm:w-auto" style={{
                      borderRadius: '12px',
                      background: '#FFF',
                      display: 'inline-flex',
                      height: '48px',
                      padding: '14px 24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      color: '#476CA2',
                      gap: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '16px'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#F0F0F0'}
                    onMouseLeave={(e) => e.target.style.background = '#FFF'}
                    >
                      <span>Get Started</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <button className="w-full sm:w-auto" style={{
                      borderRadius: '12px',
                      border: '1px solid #FFF',
                      background: 'transparent',
                      display: 'inline-flex',
                      height: '48px',
                      padding: '14px 24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      color: '#FFF',
                      cursor: 'pointer',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '16px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                    }}
                    >
                      <span>Explore Marketplace</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Home Page Layout - Original Design
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Section - Illustration */}
              <div className="order-2 md:order-1 flex justify-center md:justify-start">
                <div className="w-full max-w-[400px] md:max-w-[500px] aspect-square" style={{
                  background: 'url(/illustrator-about.png) 50% / cover no-repeat',
                  flexShrink: 0
                }}></div>
              </div>

              {/* Right Section - Content */}
              <div className="order-1 md:order-2">
                {/* About Us Button */}
                <div className="flex justify-start" style={{ marginBottom: '24px' }}>
                  <button style={{
                    borderRadius: '25px',
                    border: '1px solid rgba(71, 108, 162, 0.50)',
                    background: '#DFE8F4',
                    width: '134px',
                    height: '40px',
                    flexShrink: 0,
                    color: '#476CA2',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    About Us
                  </button>
                </div>

                {/* Heading */}
                <h2 style={{
                  color: '#476CA2',
                  fontFamily: 'Inter',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  marginBottom: '12px'
                }}>
                  What is SLMS?
                </h2>

                {/* Description */}
                <p style={{
                  color: '#5A88B8',
                  textAlign: 'justify',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '28px',
                  width: '100%',
                  maxWidth: '456px',
                  height: 'auto',
                  flexShrink: 0,
                  marginBottom: '24px'
                }}>
                  The Smart Urban Management System (SUMS) is a government-led digital platform developed by Tabaarak ICT Solutions for comprehensive land registration, permits, and housing services. We emphasize transparency, efficiency, and public trust in every interaction.
                </p>

                {/* Divider */}
                <div style={{
                  background: '#CBDEEF',
                  width: '100%',
                  maxWidth: '456px',
                  height: '1px',
                  marginBottom: '24px'
                }}></div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '24px', width: '100%', maxWidth: '456px', justifyContent: 'center' }}>
                  {/* Feature 1 - Secure & Transparent */}
                  <div className="flex flex-col items-center text-center">
                    <div style={{
                      borderRadius: '14px',
                      background: '#DFE8F4',
                      width: '50px',
                      height: '50px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px'
                    }}>
                      <Icon icon="solar:shield-check-bold" width="30" height="30" style={{ color: '#476CA2', flexShrink: 0 }} />
                    </div>
                    <span style={{ 
                      color: '#476CA2', 
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 500,
                      whiteSpace: 'nowrap'
                    }}>
                      Secure & Transparent
                    </span>
                  </div>

                  {/* Feature 2 - 24/7 Accessibility */}
                  <div className="flex flex-col items-center text-center">
                    <div style={{
                      borderRadius: '14px',
                      background: '#DFE8F4',
                      width: '50px',
                      height: '50px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px'
                    }}>
                      <Icon icon="solar:clock-circle-bold" width="30" height="30" style={{ color: '#476CA2', flexShrink: 0 }} />
                    </div>
                    <span style={{ 
                      color: '#476CA2', 
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      24/7 Accessibility
                    </span>
                  </div>

                  {/* Feature 3 - Citizen-Centric */}
                  <div className="flex flex-col items-center text-center">
                    <div style={{
                      borderRadius: '14px',
                      background: '#DFE8F4',
                      width: '50px',
                      height: '50px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px'
                    }}>
                      <Icon icon="solar:user-id-bold" width="30" height="30" style={{ color: '#476CA2', flexShrink: 0 }} />
                    </div>
                    <span style={{ 
                      color: '#476CA2', 
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      Citizen-Centric
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default About

