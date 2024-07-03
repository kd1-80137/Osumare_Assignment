
import imag1 from './images1.jpeg'
import React from 'react';
import './home.css'; // Ensure this path is correct
import imag2 from './images2.jpeg'
import images3 from './images3.jpeg'

const Home = () => {
  return (
    <div className='container'>
      <div className='company-Heading'>
        <h1>
          Elevate <span className='highlight'>Real Estate Success</span> with
          <br /> Osumare's Digital Expertise
        </h1>
        <p className='company-Heading2'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
      </div>
      <div className='buttonDiv'>
        <button className='button'>Get Started</button>
        <div className='imageContainer'>
          <img className='imageStyle' src={imag1} alt='image description' />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div><h4 className='company-Heading3'>
        Real Estate-Focused Digital Mastery
      </h4 ></div>
      <div className='row' >
        <img className='column' src={imag2} alt='image description' />
        <div className='column'>
          <h6 className='company-Heading3'>Unlock the Potential of Digital Real Estate Excellence
          </h6>
          <p className='company-Heading4'>
            At Osumare, we understand that the real estate
            landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's
            success in the ever-evolving digital property market.
          </p>
          <div className='buttonDiv'>
            <button className='button'>Get Started</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* second Div */}

      <div className='color-Div' >
        <h6 className='company-Heading3'>Our Service Offerings</h6>
        <p className='company-Heading4'>Strategies that Drive Property Market Excellence</p>
        <div className=' grid-container'>
          <div className='grid-item'>
            <h6 className='company-Heading3'>
              Automotive SEO
            </h6>
            <p className='grid-para'>
              Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition.
              Accelerate Your Business Growth Today
            </p>
          </div>
          <div className='grid-item'>
            <h6 className='company-Heading3'>
              PPC Precision
            </h6>
            <p className='grid-para'>
              Maximize visibility and drive quality
              traffic with meticulously targeted Pay-Per-Click campaigns.
            </p>
          </div>
          <div className='grid-item'>
            <h6 className='company-Heading3'>
              Social Acceleration
            </h6>
            <p className='grid-para'>
              Engage and influence your audience across social media platforms,
              amplifying your brand's presence and connection.
            </p>
          </div>

          <div className='grid-item'>
            <h6 className='company-Heading3'>
              Content Excellence
            </h6>
            <p className='grid-para'>
              Craft compelling, automotive-specific content
              that resonates with enthusiasts and drives engagement.
            </p>
          </div>

          <div className='grid-item'>
            <h6 className='company-Heading3'>
              Web Design
            </h6>
            <p className='grid-para'>
              Transform visitors into customers with high-performance websites designed for
              seamless user experiences and increased conversions.
            </p>
          </div>

          <div className='grid-item'>
            <h6 className='company-Heading3'>
              Data-Driven Insights
            </h6>
            <p className='grid-para'>
              Leverage data to refine your strategies,
              making informed decisions that drive revenue growth.
            </p>
          </div>

          <div className='grid-item'>
            <h6 className='company-Heading3'>
              End-to-End Solutions
            </h6>
            <p className='grid-para'>
              From initial awareness to post-purchase loyalty,
              we offer full-funnel solutions
              that guide customers through every step of their journey.
            </p>
          </div>

          <div className='grid-item'>
            <h6 className='company-Heading3'>
              Video marketing
            </h6>
            <p className='grid-para'>
              Unleash the Power of Video Marketing: Captivate, Engage,
              and Elevate Your Brand with Compelling Visual Stories.
            </p>
          </div>

        </div>
        <div className='buttonDiv'>
          <button className='button'>Get Started</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div >
        <h6 className='company-Heading3'>Navigating Real Estate's Digital Landscape</h6>
        <p>
          Insights for Real Estate Marketing Advantage
        </p>
      </div>
      <br />
      <br />
      <br />
      {/* gird-item2 */}
      <div className='container2'>
        <div className='row'>
          <div className='column'>
            <div className='grid-item2'>
              <h6 className='company-Heading3'>Market Trends Analysis</h6>
              <p className='grid-para'>Predictive insights to guide real estate strategies.</p>
            </div>

            <div className='row'>

              <div className='grid-item2'>
                <h6 className='company-Heading3'>Targeted Buyer Persona</h6>
                <p className='grid-para'>Understand and connect with your ideal property buyers.</p>
              </div>

              <div className='grid-item2'>
                <h6 className='company-Heading3'>Competitor Insights</h6>
                <p className='grid-para'>Stand out in the property
                  market with informed strategies</p>
              </div>

              <div className='grid-item2'>
                <h6 className='company-Heading3'>Visual Content Appeal</h6>
                <p className='grid-para'>Captivate buyers with appealing visuals
                  and immersive experiences.s.
                </p>
              </div>

            </div>
          </div>
          <div className='column'>
            <img src={images3} alt='image description' />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* 3rd container */}
      <div className='container3'>
        <h6 className='company-Heading3'> Driving Property Inquiries to Conversions</h6>
        <p>Streamlined Strategies for Real Estate Success</p>
      </div>

      {/* 4th container */}
      <div className='container4'>
        <div className='grid-container3'>

          <div className='container4-Div1'>
          <img src={images3} alt='image description' />
          </div>

          <div className='container4-Div2'>
        <h6 className='company-Heading3'>Optimized Path to Property Purchase</h6>
        <p>In the dynamic realm of real estate, the journey from a 
          property inquiry to a successful conversion demands a well-crafted
           approach. At Osumare, we specialize in guiding potential buyers 
           through this journey seamlessly, maximizing
           inquiries-turned-conversions with expert strategies.</p>
          <button className='button'>Get Started</button> 
        </div>

        <div>
          
        </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
