import React, { useState } from 'react';

import andonControl1 from '../assets/andon control 1.png';
import codeBlueCallPoint from '../assets/Code Blue medical emergancy call point .png';
import codeBlueEmergencyPoint from '../assets/Code Blue medical emergancy point.png';
import dataLogger16Ch from '../assets/data logger 16 ch.png';
import dataLogger from '../assets/data looger.jpg';
import dataLoggerRs485 from '../assets/deta logger 16 ch.png';
import mhmsDashboard from '../assets/mhms .png';
import mhmsSystem from '../assets/mhms 5.png';
import shaktiLogo from '../assets/shakti full logo trac.png';

function Home() {
  const [expandedService, setExpandedService] = useState(null);
  const [showTestimonialPopup, setShowTestimonialPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('services');
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const services = [
    {
      title: "PLC Panels & Automation",
      icon: "⚙",
      description: "We design and develop high-performance Programmable Logic Controller (PLC) panels for industrial automation.",
      features: [
        "Custom-built PLC panels",
        "Seamless integration",
        "Brands: Siemens, Allen-Bradley, Schneider"
      ]
    },
    {
      title: "Touch Screen Panels",
      icon: "👆",
      description: "Our Human-Machine Interface (HMI) panels offer intuitive control and real-time data visualization.",
      features: [
        "Custom GUI design",
        "PLC & SCADA integration",
        "Industrial-grade screens"
      ]
    },
    {
      title: "Control Panels",
      icon: "🎛",
      description: "We provide custom-built control panels for various industrial applications.",
      features: [
        "Motor control solutions",
        "Safety-compliant designs",
        "Tailored automation"
      ]
    },
    {
      title: "Testing Equipment",
      icon: "🔍",
      description: "Precision testing equipment for electrical and electronic industries.",
      features: [
        "Automated testing rigs",
        "R&D lab solutions",
        "Calibration systems"
      ]
    }
  ];

  const products = [
    {
      title: "Andon Control System",
      description: "Real-time monitoring solution for conveyor belt operations with stoppage logging and analysis.",
      features: [
        "Real-time Monitoring",
        "Stoppage Logging",
        "Accountability Tracking",
        "Historical Data Analysis"
      ],
      images: [andonControl1]
    },
    {
      title: "Machine Health Monitoring",
      description: "Advanced solution to monitor and analyze key health parameters of industrial machines.",
      features: [
        "Early issue detection",
        "Proactive maintenance",
        "Real-time tracking"
      ],
      images: [mhmsDashboard, mhmsSystem]
    },
    {
      title: "Data Loggers System",
      description: "Highly efficient data recording solution that captures and stores sensor data.",
      features: [
        "Multi-sensor support",
        "Comprehensive storage",
        "Trend analysis"
      ],
      images: [dataLogger16Ch, dataLogger, dataLoggerRs485]
    },
    {
      title: "Code Blue Systems",
      description: "Enhances emergency medical responses.",
      features: [
        "Rapid activation",
        "Real-time alerting",
        "Performance tracking"
      ],
      images: [codeBlueCallPoint, codeBlueEmergencyPoint]
    }
  ];

  const clients = [
    {
      name: "Bajaj Auto Limited",
      location: "Waluj, Chh. Sambhajinagar",
      testimonial: "Shakti's automation solutions increased our production efficiency by 30%."
    },
    {
      name: "Garware Polyester Limited",
      location: "Chikalthana, Chh. Sambhajinagar",
      testimonial: "Their control panels have been running flawlessly for 5+ years."
    },
    {
      name: "Siemens Ltd.",
      location: "Waluj, Chh. Sambhajinagar",
      testimonial: "Excellent technical support and reliable products."
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: "🏭" },
    { name: "Automotive", icon: "🚗" },
    { name: "Pharmaceutical", icon: "💊" },
    { name: "Food Processing", icon: "🍔" },
    { name: "Power & Energy", icon: "⚡" },
    { name: "R&D Labs", icon: "🔬" }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const showNextClient = () => {
    setCurrentClientIndex((prev) => (prev + 1) % clients.length);
  };

  const showPrevClient = () => {
    setCurrentClientIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const openContactPopup = () => {
    setShowContactPopup(true);
    setShowTestimonialPopup(false);
  };

  const openTestimonialPopup = () => {
    setShowTestimonialPopup(true);
    setShowContactPopup(false);
  };

  const showNextImage = (productIndex) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [productIndex]: ((prev[productIndex] || 0) + 1) % products[productIndex].images.length
    }));
  };

  const showPrevImage = (productIndex) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [productIndex]: ((prev[productIndex] || 0) - 1 + products[productIndex].images.length) % 
                     products[productIndex].images.length
    }));
  };

  // Styles
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      lineHeight: 1.6,
      maxWidth: '100%',
      overflowX: 'hidden'
    },
    hero: {
      background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative'
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#d32f2f',
      position: 'relative'
    },
    ctaButton: {
      background: '#0288d1',
      color: 'white',
      border: 'none',
      padding: '12px 30px',
      fontSize: '1.1rem',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease'
    },
    popupOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    popupContent: {
      background: 'white',
      padding: '30px',
      borderRadius: '8px',
      maxWidth: '600px',
      width: '90%',
      position: 'relative'
    },
    contactInfo: {
      marginTop: '20px',
      lineHeight: '2'
    },
    imageContainer: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    productImage: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain'
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0,0,0,0.5)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to Shakti Electrotech</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px' }}>
          Pioneering Industrial Automation & Control Solutions
        </p>
        <button 
          style={styles.ctaButton}
          onClick={() => setActiveTab('services')}
        >
          Explore Our Services
        </button>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <p>
              Shakti Electrotech is a leading electronics and automation technology company with 18 years of experience.
            </p>
            <div style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '20px', 
              borderRadius: '8px', 
              marginTop: '20px',
              borderLeft: '5px solid #0288d1'
            }}>
              <h3>Our Mission</h3>
              <p>To provide innovative, high-quality automation solutions that enhance productivity and safety.</p>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
            <img 
              src={shaktiLogo} 
              alt="Shakti Electrotech Logo" 
              style={{ 
                width: '100%',
                height: 'auto',
                maxHeight: '300px',
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
      </section>

      {/* Services/Products Section */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <button 
            style={{ 
              padding: '10px 20px',
              background: activeTab === 'services' ? '#d32f2f' : 'transparent',
              color: activeTab === 'services' ? 'white' : '#333',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600'
            }}
            onClick={() => setActiveTab('services')}
          >
            Services
          </button>
          <button 
            style={{ 
              padding: '10px 20px',
              background: activeTab === 'products' ? '#d32f2f' : 'transparent',
              color: activeTab === 'products' ? 'white' : '#333',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600'
            }}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
        </div>

        {activeTab === 'services' ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px' 
          }}>
            {services.map((service, index) => (
              <div 
                key={index}
                style={{ 
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => toggleService(index)}
              >
                <div style={{ 
                  padding: '20px',
                  background: '#0288d1',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h3 style={{ margin: 0 }}>{service.title}</h3>
                  <span style={{ fontSize: '1.5rem' }}>
                    {expandedService === index ? '-' : '+'}
                  </span>
                </div>
                {expandedService === index && (
                  <div style={{ padding: '20px' }}>
                    <p>{service.description}</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px' 
          }}>
            {products.map((product, index) => (
              <div 
                key={index}
                style={{ 
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => toggleService(index)}
              >
                <div style={{ 
                  padding: '20px',
                  background: '#d32f2f',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <h3 style={{ margin: 0 }}>{product.title}</h3>
                </div>
                
                {/* Product Image Display */}
                {product.images.length > 0 && (
                  <div style={styles.imageContainer}>
                    <img 
                      src={product.images[currentImageIndices[index] || 0]} 
                      alt={product.title}
                      style={styles.productImage}
                    />
                    {product.images.length > 1 && (
                      <>
                        <button 
                          style={{ ...styles.navButton, left: '10px' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            showPrevImage(index);
                          }}
                        >
                          &lt;
                        </button>
                        <button 
                          style={{ ...styles.navButton, right: '10px' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            showNextImage(index);
                          }}
                        >
                          &gt;
                        </button>
                      </>
                    )}
                  </div>
                )}

                {expandedService === index && (
                  <div style={{ padding: '20px' }}>
                    <p>{product.description}</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
                      {product.features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Industries Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Industries We Serve</h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px'
        }}>
          {industries.map((industry, index) => (
            <div 
              key={index}
              style={{
                padding: '20px',
                borderRadius: '8px',
                background: `hsl(${index * 60}, 70%, 45%)`,
                color: 'white',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{industry.icon}</div>
              <h3 style={{ margin: 0 }}>{industry.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
        <h2 style={styles.sectionTitle}>Our Clients</h2>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <button 
            style={{ 
              background: '#d32f2f',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              borderRadius: '50%'
            }}
            onClick={showPrevClient}
          >
            &lt;
          </button>
          <div 
            style={{ 
              flex: 1,
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              margin: '0 20px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
            onClick={openTestimonialPopup}
          >
            <h3>{clients[currentClientIndex].name}</h3>
            <p>{clients[currentClientIndex].location}</p>
          </div>
          <button 
            style={{ 
              background: '#d32f2f',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              borderRadius: '50%'
            }}
            onClick={showNextClient}
          >
            &gt;
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 20px',
        textAlign: 'center',
        background: '#0288d1',
        color: 'white'
      }}>
        <h2 style={{ ...styles.sectionTitle, color: 'white' }}>Ready to Automate Your Business?</h2>
        <button 
          style={{ 
            ...styles.ctaButton,
            background: '#d32f2f'
          }}
          onClick={openContactPopup}
        >
          Contact Us
        </button>
      </section>

      {/* Testimonial Popup */}
      {showTestimonialPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <button 
              style={{ 
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              onClick={() => setShowTestimonialPopup(false)}
            >
              ×
            </button>
            <h3 style={{ color: '#d32f2f' }}>{clients[currentClientIndex].name}</h3>
            <p style={{ fontStyle: 'italic' }}>"{clients[currentClientIndex].testimonial}"</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button 
                style={{ 
                  padding: '8px 15px',
                  background: '#d32f2f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={showPrevClient}
              >
                Previous
              </button>
              <button 
                style={{ 
                  padding: '8px 15px',
                  background: '#0288d1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={showNextClient}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContactPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <button 
              style={{ 
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              onClick={() => setShowContactPopup(false)}
            >
              ×
            </button>
            <h3 style={{ color: '#d32f2f' }}>Contact Shakti Electrotech</h3>
            <div style={styles.contactInfo}>
              <p><strong>Address:</strong> "Shakti" Plot No.73, Auditor Housing Society, Jalgaon Road, Chh. Sambhajinagar, 431003</p>
              <p><strong>Phone:</strong> Shankar Kinge - 9822315028<br />
                 Gajanan Narkhede - 9881391966<br />
                 Kaushal Kinge - 8055560185</p>
              <p><strong>Email:</strong> shaktietech@gmail.com</p>
              <p><strong>Website:</strong> www.shaktietech.com</p>
              <p><strong>Working Hours:</strong> Mon-Sat: 9:30 AM - 6:30 PM</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;