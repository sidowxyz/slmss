import { useState, useEffect, useMemo } from 'react'
import Footer from '../components/Footer'
import { Icon } from '@iconify/react'

function PropertiesPage() {
  const [viewMode, setViewMode] = useState('list')
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [properties, setProperties] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts')
  const [selectedPropertyType, setSelectedPropertyType] = useState('All Types')
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  useEffect(() => {
    // Load properties from JSON file
    fetch('/properties.json')
      .then(response => response.json())
      .then(data => {
        setProperties(data)
        // Initialize image index for each property using id as key
        const initialIndices = {}
        data.forEach((property) => {
          initialIndices[property.id] = 0
        })
        setCurrentImageIndex(initialIndices)
      })
      .catch(error => console.error('Error loading properties:', error))
  }, [])

  const handleImageChange = (propertyId, imageIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: imageIndex
    }))
  }

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = (propertyId, property) => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    const currentIndex = currentImageIndex[propertyId] || 0
    
    if (isLeftSwipe && currentIndex < property.images.length - 1) {
      // Swipe left - next image
      handleImageChange(propertyId, currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      // Swipe right - previous image
      handleImageChange(propertyId, currentIndex - 1)
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Filter properties based on search and filters
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Search filter - search in id, location, and type
      const matchesSearch = searchQuery === '' || 
        property.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase())

      // District filter
      const matchesDistrict = selectedDistrict === 'All Districts' || 
        property.location === selectedDistrict

      // Property type filter
      const matchesPropertyType = selectedPropertyType === 'All Types' || 
        property.type === selectedPropertyType

      // Price range filter
      const matchesPriceRange = property.price >= priceRange[0] && 
        property.price <= priceRange[1]

      return matchesSearch && matchesDistrict && matchesPropertyType && matchesPriceRange
    })
  }, [properties, searchQuery, selectedDistrict, selectedPropertyType, priceRange])

  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden" style={{
        background: '#476CA2',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '100px'
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
          Property Marketplace
        </h1>
      </section>

      {/* Search and Filter Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20" style={{ marginTop: '-80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          borderRadius: '12px',
          background: '#F8F9FB',
          width: '100%',
          maxWidth: '1128px',
          minHeight: '251px',
          flexShrink: 0,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box'
        }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4" style={{ marginBottom: '24px' }}>
            {/* Search Bar */}
            <div className="relative w-full sm:w-auto sm:flex-1" style={{ maxWidth: '872px', height: '48px', flexShrink: 0 }}>
              <Icon icon="solar:magnifer-linear" className="absolute left-5 top-1/2 transform -translate-y-1/2" style={{ width: '20px', height: '20px', color: '#6B7280', zIndex: 1 }} />
              <input
                type="text"
                placeholder="Search Properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  borderRadius: '12px',
                  border: '1px solid #DFE8F4',
                  background: '#FFF',
                  display: 'flex',
                  width: '100%',
                  height: '48px',
                  padding: '14px 20px 14px 48px',
                  alignItems: 'center',
                  flexShrink: 0,
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* View Mode Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                style={{
                  borderRadius: '10px',
                  background: '#476CA2',
                  color: '#FFF',
                  padding: '10px 16px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  height: '48px'
                }}
              >
                <Icon icon="solar:widget-4-outline" width="20" height="20" />
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                style={{
                  borderRadius: '10px',
                  background: '#DFE8F4',
                  width: '85px',
                  height: '48px',
                  flexShrink: 0,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  color: '#476CA2'
                }}
              >
                <Icon icon="solar:map-outline" width="20" height="20" style={{ color: '#476CA2' }} />
                <span>Map</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: '0' }}>
            {/* District Filter */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500
              }}>
                District
              </label>
              <div style={{ position: 'relative' }}>
                <select 
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #DFE8F4',
                    background: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    outline: 'none',
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'
                  }}
                >
                  <option>All Districts</option>
                  <option>Hodan</option>
                  <option>Waberi</option>
                  <option>Hammar Weyne</option>
                </select>
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  style={{ width: '20px', height: '20px', color: '#6B7280', pointerEvents: 'none' }}
                />
              </div>
            </div>

            {/* Property Type Filter */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Property Type
              </label>
              <div style={{ position: 'relative' }}>
                <select 
                  value={selectedPropertyType}
                  onChange={(e) => setSelectedPropertyType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #DFE8F4',
                    background: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    outline: 'none',
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'
                  }}
                >
                  <option>All Types</option>
                  <option>Villa House</option>
                  <option>Apartment</option>
                  <option>Land</option>
                </select>
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  style={{ width: '20px', height: '20px', color: '#6B7280', pointerEvents: 'none' }}
                />
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Price Range
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  style={{
                    flex: 1,
                    cursor: 'pointer'
                  }}
                />
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  color: '#374151'
                }}>
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>-</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <div style={{
            background: '#DFE8F4',
            width: '100%',
            maxWidth: '1068px',
            height: '1px',
            marginTop: '30px',
            marginBottom: '14px',
            alignSelf: 'center'
          }}></div>

          {/* Results Count */}
          <div style={{
            color: '#476CA2',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
            textAlign: 'left'
          }}>
            {filteredProperties.length} properties found
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20" style={{ display: 'flex', justifyContent: 'center', marginTop: '44px', paddingTop: 0 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ 
          maxWidth: '1128px',
          width: '100%',
          justifyContent: 'center',
          margin: '0 auto',
          placeItems: 'center'
        }}>
          {filteredProperties.map((property) => (
            <div key={property.id} style={{
              borderRadius: '12px',
              border: '1px solid #DFE8F4',
              background: '#FFF',
              width: '100%',
              maxWidth: '347px',
              minHeight: '324px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              {/* Image Carousel */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '140px',
                  flexShrink: 0,
                  borderRadius: '11px 11px 0 0',
                  background: '#DFE8F4',
                  overflow: 'hidden',
                  touchAction: 'pan-x'
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={() => onTouchEnd(property.id, property)}
              >
                <img
                  src={property.images[currentImageIndex[property.id] || 0]}
                  alt={property.type}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  borderRadius: '11px',
                  background: property.status === 'For Sale' ? '#476CA2' : '#EF4444',
                  width: '63px',
                  height: '22px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    color: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '20px'
                  }}>
                    {property.status}
                  </span>
                </div>

                {/* Carousel Dots */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center',
                  zIndex: 10
                }}>
                  {property.images && property.images.map((imageUrl, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleImageChange(property.id, imgIndex)
                      }}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        background: (currentImageIndex[property.id] || 0) === imgIndex ? '#FFF' : 'rgba(255, 255, 255, 0.5)',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'background 0.2s',
                        zIndex: 11
                      }}
                      aria-label={`Go to image ${imgIndex + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                flex: 1
              }}>
                {/* First Row: Listed ID and Location */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                  {/* Listed ID Column */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    alignItems: 'flex-start',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      color: '#8E8E93',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '20px',
                      textAlign: 'left'
                    }}>
                      Listed ID:
                    </div>
                    <div style={{
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '20px',
                      textAlign: 'left'
                    }}>
                      {property.id}
                    </div>
                  </div>

                  {/* Location Column */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    alignItems: 'flex-end',
                    textAlign: 'right'
                  }}>
                    <div style={{
                      color: '#8E8E93',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '20px',
                      textAlign: 'right'
                    }}>
                      Location:
                    </div>
                    <div style={{
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '20px',
                      textAlign: 'right'
                    }}>
                      {property.location}
                    </div>
                  </div>
                </div>

                {/* Second Row: Price and Property Type */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                  {/* Price Column */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    alignItems: 'flex-start',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      color: '#8E8E93',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '20px',
                      textAlign: 'left'
                    }}>
                      Price:
                    </div>
                    <div style={{
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '20px',
                      textAlign: 'left'
                    }}>
                      ${property.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>

                  {/* Property Type Column */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    alignItems: 'flex-end',
                    textAlign: 'right'
                  }}>
                    <div style={{
                      color: '#8E8E93',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '20px',
                      textAlign: 'right'
                    }}>
                      Property Type:
                    </div>
                    <div style={{
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '20px',
                      textAlign: 'right'
                    }}>
                      {property.type}
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  style={{
                    borderRadius: '8px',
                    background: '#E7F2FA',
                    display: 'flex',
                    width: '307px',
                    height: '35px',
                    padding: '8px 12px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#476CA2',
                    marginTop: 'auto'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#D4E8F5'}
                  onMouseLeave={(e) => e.target.style.background = '#E7F2FA'}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default PropertiesPage
