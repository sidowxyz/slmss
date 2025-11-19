import { Icon } from '@iconify/react'

function NeedHelp() {
  return (
    <section className="w-full" style={{ background: '#476CA2', minHeight: '375px', flexShrink: 0 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-white w-full">
            <h2 style={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.2',
              marginBottom: '12px'
            }} className="sm:text-3xl md:text-4xl lg:text-[40px]">
              Need Help Accessing Your <br />Records?
            </h2>
            <p style={{
              color: '#FFF',
              textAlign: 'left',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '1.6',
              width: '100%',
              maxWidth: '492px',
              flexShrink: 0,
              marginTop: '0',
              marginBottom: '16px'
            }} className="sm:text-base md:text-lg">
              Our support team is here to assist you with any questions or technical issues you might encounter.
            </p>
            <button style={{
              borderRadius: '12px',
              border: '1px solid #FFF',
              background: '#FFF',
              color: '#476CA2',
              display: 'inline-flex',
              height: '48px',
              padding: '14px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              gap: '8px',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              marginTop: '0',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              Contact Us
              <Icon icon="solar:alt-arrow-right-linear" width="20" height="20" style={{ color: '#476CA2' }} />
            </button>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex-1 flex justify-center items-center">
            <img 
              src="/illustrator-support.png" 
              alt="Support Illustration" 
              style={{
                width: '100%',
                maxWidth: '408px',
                height: 'auto',
                flexShrink: 0,
                aspectRatio: '408/359',
                objectFit: 'contain'
              }}
              className="w-full sm:w-[300px] md:w-[408px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedHelp

