import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

function Navbar() {
  const location = useLocation()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'English',
    code: 'en'
  })
  const languageDropdownRef = useRef(null)
  const mobileLanguageDropdownRef = useRef(null)
  
  const isActive = (path) => location.pathname === path

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Somali', code: 'so' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false)
      }
      if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target)) {
        setIsMobileLanguageOpen(false)
      }
    }

    if (isLanguageOpen || isMobileLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageOpen, isMobileLanguageOpen])

  return (
    <nav className="w-full px-4 sm:px-6 py-3 sm:py-4 relative" style={{
      borderBottom: '2px solid #476CA2',
      background: '#FFF'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-1 sm:gap-2 cursor-pointer"
          style={{ textDecoration: 'none' }}
        >
          <img src="/logo.png" alt="SLMS Land Management" className="h-8 sm:h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-[#476CA2] font-bold text-base sm:text-xl">SLMS</span>
            <span className="text-[#476CA2] text-[10px] sm:text-xs opacity-70 hidden xs:block">Land Management</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon 
            icon={isMobileMenuOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} 
            className="w-6 h-6 text-[#476CA2]"
          />
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link 
            to="/" 
            style={{
              color: isActive('/') ? '#476CA2' : '#4B5563',
              fontWeight: isActive('/') ? 'bold' : 'normal',
              fontSize: '18px',
              fontFamily: 'Inter',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/')) e.target.style.color = '#476CA2'
            }}
            onMouseLeave={(e) => {
              if (!isActive('/')) e.target.style.color = '#4B5563'
            }}
          >Home</Link>
          <Link 
            to="/about" 
            style={{
              color: isActive('/about') ? '#476CA2' : '#4B5563',
              fontWeight: isActive('/about') ? 'bold' : 'normal',
              fontSize: '18px',
              fontFamily: 'Inter',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/about')) e.target.style.color = '#476CA2'
            }}
            onMouseLeave={(e) => {
              if (!isActive('/about')) e.target.style.color = '#4B5563'
            }}
          >About</Link>
          <Link 
            to="/properties" 
            style={{
              color: isActive('/properties') ? '#476CA2' : '#4B5563',
              fontWeight: isActive('/properties') ? 'bold' : 'normal',
              fontSize: '18px',
              fontFamily: 'Inter',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/properties')) e.target.style.color = '#476CA2'
            }}
            onMouseLeave={(e) => {
              if (!isActive('/properties')) e.target.style.color = '#4B5563'
            }}
          >Properties</Link>
          <Link
            to="/contact"
            style={{
              color: isActive('/contact') ? '#476CA2' : '#4B5563',
              fontWeight: isActive('/contact') ? 'bold' : 'normal',
              fontSize: '18px',
              fontFamily: 'Inter',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/contact')) e.target.style.color = '#476CA2'
            }}
            onMouseLeave={(e) => {
              if (!isActive('/contact')) e.target.style.color = '#4B5563'
            }}
          >Contact Us</Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-[#476CA2] md:hidden z-50">
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-lg transition-colors" 
                style={{
                  color: isActive('/') ? '#476CA2' : '#4B5563',
                  fontWeight: isActive('/') ? 'bold' : 'normal'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/')) e.target.style.color = '#476CA2'
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/')) e.target.style.color = '#4B5563'
                }}
              >Home</Link>
              <Link 
                to="/about" 
                className="block text-lg transition-colors" 
                style={{
                  color: isActive('/about') ? '#476CA2' : '#4B5563',
                  fontWeight: isActive('/about') ? 'bold' : 'normal'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/about')) e.target.style.color = '#476CA2'
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/about')) e.target.style.color = '#4B5563'
                }}
              >About</Link>
              <Link 
                to="/properties" 
                className="block text-lg transition-colors" 
                style={{
                  color: isActive('/properties') ? '#476CA2' : '#4B5563',
                  fontWeight: isActive('/properties') ? 'bold' : 'normal'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/properties')) e.target.style.color = '#476CA2'
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/properties')) e.target.style.color = '#4B5563'
                }}
              >Properties</Link>
              <Link
                to="/contact"
                className="block text-lg transition-colors"
                style={{
                  color: isActive('/contact') ? '#476CA2' : '#4B5563',
                  fontWeight: isActive('/contact') ? 'bold' : 'normal'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/contact')) e.target.style.color = '#476CA2'
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/contact')) e.target.style.color = '#4B5563'
                }}
              >Contact Us</Link>
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#374151]">Language:</span>
                  <div ref={mobileLanguageDropdownRef} style={{ position: 'relative' }}>
                    <button
                      onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                      style={{
                        borderRadius: '12px',
                        display: 'inline-flex',
                        height: '40px',
                        padding: '8px 12px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0,
                        border: '1px solid #DFE8F4',
                        background: '#FFF',
                        gap: '8px',
                        cursor: 'pointer',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        color: '#374151'
                      }}
                    >
                      <span>{selectedLanguage.name}</span>
                      <Icon 
                        icon="solar:alt-arrow-down-linear" 
                        style={{ 
                          width: '16px', 
                          height: '16px', 
                          color: '#6B7280',
                          transform: isMobileLanguageOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s'
                        }} 
                      />
                    </button>

                    {/* Mobile Language Dropdown Menu */}
                    {isMobileLanguageOpen && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '8px',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        minWidth: '120px',
                        zIndex: 1000,
                        overflow: 'hidden'
                      }}>
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setSelectedLanguage(lang)
                              setIsMobileLanguageOpen(false)
                            }}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '12px 20px',
                              border: 'none',
                              background: selectedLanguage.code === lang.code ? '#F9FAFB' : 'white',
                              cursor: 'pointer',
                              fontFamily: 'Inter',
                              fontSize: '14px',
                              color: '#374151',
                              textAlign: 'left'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = '#F3F4F6';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = selectedLanguage.code === lang.code ? '#F9FAFB' : 'white';
                            }}
                          >
                            <span>{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <button className="bg-[#476CA2] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium w-full">
                  <Icon icon="solar:login-2-outline" className="w-5 h-5" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right Side - Language Selector & Login - Desktop */}
        <div className="hidden md:flex items-center" style={{ gap: '25px', position: 'relative' }}>
          {/* Language Selector */}
          <div ref={languageDropdownRef} style={{ position: 'relative' }}>
            <button 
              className="hidden sm:inline-flex"
              style={{
                borderRadius: '12px',
                display: 'inline-flex',
                height: '48px',
                padding: '14px 16px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                border: 'none',
                background: 'transparent',
                gap: '8px',
                cursor: 'pointer',
                fontFamily: 'Inter'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#F9FAFB';
              }}
              onMouseLeave={(e) => {
                if (!isLanguageOpen) {
                  e.target.style.background = 'transparent';
                }
              }}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Icon 
                icon="solar:global-linear" 
                style={{ 
                  width: '18px', 
                  height: '18px', 
                  color: '#6B7280'
                }} 
              />
              <span className="hidden lg:inline" style={{ color: '#374151', fontSize: '14px' }}>{selectedLanguage.name}</span>
              <Icon 
                icon="solar:alt-arrow-down-bold" 
                style={{ 
                  width: '16px', 
                  height: '16px', 
                  color: '#6B7280',
                  transform: isLanguageOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }} 
              />
            </button>

            {/* Dropdown Menu */}
            {isLanguageOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                minWidth: '150px',
                zIndex: 1000,
                overflow: 'hidden'
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang)
                      setIsLanguageOpen(false)
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 20px',
                      border: 'none',
                      background: selectedLanguage.code === lang.code ? '#F9FAFB' : 'white',
                      cursor: 'pointer',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#374151',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#F3F4F6';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = selectedLanguage.code === lang.code ? '#F9FAFB' : 'white';
                    }}
                  >
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Button */}
          <button className="hidden sm:inline-flex" style={{
            borderRadius: '12px',
            background: '#476CA2',
            display: 'inline-flex',
            height: '48px',
            padding: '14px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            color: 'white',
            gap: '8px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter',
            fontWeight: 500
          }}>
            <Icon icon="solar:login-2-outline" className="hidden lg:block" style={{ width: '20px', height: '20px', color: 'white' }} />
            <span className="text-sm lg:text-base">Login</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

