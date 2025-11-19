import { Icon } from '@iconify/react'

function Footer() {
  return (
    <footer className="w-full" style={{ background: '#000', minHeight: '400px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-8 md:py-12">
        {/* Top Section - Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Leftmost Column - Company Info */}
          <div className="flex-1 max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-white.png" alt="SLMS Logo" style={{ height: '40px', width: 'auto' }} />
              <div>
                <div style={{
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#FFF',
                  lineHeight: '1.2'
                }} className="sm:text-lg">
                  SLMS
                </div>
                <div style={{
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontWeight: 400,
                  color: '#476CA2',
                  lineHeight: '1.2'
                }} className="sm:text-sm">
                  Land Management
                </div>
              </div>
            </div>
            <p style={{
              width: '100%',
              maxWidth: '303px',
              minHeight: '65px',
              flexShrink: 0,
              color: '#D9D9D9',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              marginTop: '12px'
            }} className="sm:text-base">
              Smart Urban Management System Empowering citizens with digital property management.
            </p>
          </div>

          {/* Second Column - Quick Links */}
          <div>
            <h3 style={{
              color: '#FFF',
              textAlign: 'justify',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              marginBottom: '12px'
            }} className="sm:text-lg">
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{
                  color: '#D9D9D9',
                  textAlign: 'justify',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textDecoration: 'none'
                }} className="sm:text-base">
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{
                  color: '#D9D9D9',
                  textAlign: 'justify',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textDecoration: 'none'
                }} className="sm:text-base">
                  About
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{
                  color: '#D9D9D9',
                  textAlign: 'justify',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textDecoration: 'none'
                }} className="sm:text-base">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" style={{
                  color: '#D9D9D9',
                  textAlign: 'justify',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textDecoration: 'none'
                }} className="sm:text-base">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Legal */}
          <div>
            <h3 style={{
              color: '#FFF',
              textAlign: 'justify',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              marginBottom: '12px'
            }} className="sm:text-lg">
              Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{
                  color: '#D9D9D9',
                  textAlign: 'justify',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textDecoration: 'none'
                }} className="sm:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{
                  color: '#D9D9D9',
                  textAlign: 'justify',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textDecoration: 'none'
                }} className="sm:text-base">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Rightmost Column - Contact Us */}
          <div>
            <h3 style={{
              color: '#FFF',
              textAlign: 'justify',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              marginBottom: '12px'
            }} className="sm:text-lg">
              Contact Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon icon="solar:phone-rounded-linear" width="20" height="20" className="sm:w-6 sm:h-6" style={{ color: '#476CA2' }} />
                <span style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  color: '#FFF'
                }} className="sm:text-base">
                  123 456 789
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon icon="solar:letter-linear" width="20" height="20" className="sm:w-6 sm:h-6" style={{ color: '#476CA2' }} />
                <span style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  color: '#FFF'
                }} className="sm:text-base">
                  info@sums.gov.so
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Developer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center" style={{
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          gap: '16px'
        }}>
          <p style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0
          }} className="sm:text-base">
            © 2025 SUMS Land Management. All rights reserved.
          </p>
          <p style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0
          }} className="sm:text-base">
            Developed by Tabaarak ICT Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
