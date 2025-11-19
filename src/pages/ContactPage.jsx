import { useState } from 'react'
import Footer from '../components/Footer'
import { Icon } from '@iconify/react'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      {/* Hero Section with "Contact Us" */}
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
          Contact Us
        </h1>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ alignItems: 'start', gap: '24px' }}>
            {/* Left Section - Send Us a Message */}
            <div>
              {/* Heading */}
              <h2 style={{
                color: '#476CA2',
                fontFamily: 'Inter',
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                marginBottom: '16px',
                marginTop: 0
              }}>
                Send Us a Message
              </h2>

              {/* Description */}
              <p style={{
                color: '#5A88B8',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '25px',
                marginBottom: '32px',
                marginTop: 0
              }}>
                If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
              </p>

              {/* Get in touch Card */}
              <div style={{
                borderRadius: '14px',
                background: '#F8F9FB',
                width: '100%',
                minHeight: '525px',
                flexShrink: 0,
                padding: '24px',
                boxSizing: 'border-box'
              }}>
                {/* Card Title */}
                <h3 style={{
                  color: '#476CA2',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  marginBottom: '24px',
                  marginTop: 0
                }}>
                  Get in touch
                </h3>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Full Name Field */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '6px',
                      color: '#374151',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: 500
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        border: '1px solid #DFE8F4',
                        background: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Email Address Field */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '6px',
                      color: '#374151',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: 500
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email.@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        border: '1px solid #DFE8F4',
                        background: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Message Field */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '6px',
                      color: '#374151',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: 500
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                      style={{
                        width: '100%',
                        height: '120px',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        border: '1px solid #DFE8F4',
                        background: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        outline: 'none',
                        resize: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    style={{
                      borderRadius: '12px',
                      background: '#476CA2',
                      color: '#FFF',
                      padding: '14px 24px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginTop: '0',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#3a5a87'}
                    onMouseLeave={(e) => e.target.style.background = '#476CA2'}
                  >
                    <Icon icon="solar:map-arrow-right-outline" width="20" height="20" style={{ color: 'white' }} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Section - Contact Information */}
            <div className="md:mt-[138px] mt-8 md:mt-[138px]" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Contact Details Card */}
              <div style={{
                borderRadius: '14px',
                background: '#F8F9FB',
                width: '100%',
                minHeight: '300px',
                flexShrink: 0,
                padding: '24px',
                marginBottom: '24px',
                boxSizing: 'border-box'
              }}>
                {/* Heading */}
                <h2 style={{
                  color: '#476CA2',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  marginBottom: '24px',
                  marginTop: 0
                }}>
                  Contact Information
                </h2>
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    borderRadius: '14px',
                    border: '1px solid #DFE8F4',
                    background: '#FFF',
                    width: '50px',
                    height: '50px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon icon="solar:phone-rounded-linear" width="24" height="24" style={{ color: '#476CA2', flexShrink: 0 }} />
                  </div>
                  <div>
                    <div style={{
                      color: '#6B7280',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: 400,
                      marginBottom: '4px'
                    }}>
                      Phone
                    </div>
                    <div style={{
                      color: '#374151',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500
                    }}>
                      +252 61 234 5678
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    borderRadius: '14px',
                    border: '1px solid #DFE8F4',
                    background: '#FFF',
                    width: '50px',
                    height: '50px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon icon="solar:map-point-wave-linear" width="24" height="24" style={{ color: '#476CA2', flexShrink: 0 }} />
                  </div>
                  <div>
                    <div style={{
                      color: '#6B7280',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: 400,
                      marginBottom: '4px'
                    }}>
                      Address
                    </div>
                    <div style={{
                      color: '#374151',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500
                    }}>
                      KM4 Street, Hodan District
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    borderRadius: '14px',
                    border: '1px solid #DFE8F4',
                    background: '#FFF',
                    width: '50px',
                    height: '50px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon icon="solar:letter-linear" width="24" height="24" style={{ color: '#476CA2', flexShrink: 0 }} />
                  </div>
                  <div>
                    <div style={{
                      color: '#6B7280',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: 400,
                      marginBottom: '4px'
                    }}>
                      Email
                    </div>
                    <div style={{
                      color: '#374151',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500
                    }}>
                      info@slms.so
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div style={{
                borderRadius: '14px',
                background: '#F8F9FB',
                width: '100%',
                minHeight: '201px',
                flexShrink: 0,
                padding: '24px',
                boxSizing: 'border-box',
                marginTop: 'auto'
              }}>
                <h3 style={{
                  color: '#476CA2',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  marginBottom: '20px',
                  marginTop: 0
                }}>
                  Business Hours
                </h3>
                {/* Horizontal Line */}
                <div style={{
                  background: '#DFE8F4',
                  width: '100%',
                  maxWidth: '474px',
                  height: '1px',
                  marginBottom: '20px'
                }}></div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '43px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span style={{
                      color: '#6D717F',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px',
                      marginBottom: '4px'
                    }}>
                      Saturday - Thursday
                    </span>
                    <span style={{
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px'
                    }}>
                      9:00 am - 8:00 pm
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span style={{
                      color: '#6D717F',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px',
                      marginBottom: '4px'
                    }}>
                      Thursday
                    </span>
                    <span style={{
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px'
                    }}>
                      9:00 am - 6:00 pm
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span style={{
                      color: '#6D717F',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px',
                      marginBottom: '4px'
                    }}>
                      Friday
                    </span>
                    <span style={{
                      color: '#476CA2',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px'
                    }}>
                      9:00 am - 5:00 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div style={{ marginTop: '48px', width: '100%', minHeight: '300px', height: '391px', borderRadius: '24px', flexShrink: 0, overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5!2d45.3381!3d2.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDInNDguOCJOIDQ1wrAyMCcxNy4yIkU!5e0!3m2!1sen!2sso!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SLMS Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactPage


