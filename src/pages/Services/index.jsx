import React from 'react'
import './index.css';
import CustomButton from '../../components/Button';
import NLogo from '../../assets/icons/n.png';
import LearnArrow from '../../assets/svgs/learnArrow.svg';
import { ServicesUtils } from '../../utils/services';
import Footer from '../../components/Footer';

const Services = () => {
  return (
    <main className="center w-screen overflow-x-hidden">
      <div className="w-full h-full flex-col center overflow-x-hidden">

        {/* Banner */}
        <div className="w-[95%] lg:h-[848px] h-[100vh] banner center text-primary overflow-hidden rounded-[20px]">
          <div className='flex-col w-[85%] md:items-start items-center flex md:gap-4 gap-3'>
            <h1 className='lg:leading-[76px] text-lg md:text-xl lg:text-[64px] lg:w-[825px]  font-semibold text-center md:text-left'>
              Engineering The Future Through Technology Innovation 
            </h1>
            <h3 className='lg:text-[28px] textt-lg'>
              With NXG-HUB
            </h3>
            <div className='pt-10'>
              <CustomButton children="Learn More" />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className='w-full center my-12 flex-col gap-10'>
          <div className='flex-col gap-6 center w-[80%]'>
            <div className='center'>
              <div className='flex items-start'>
                <img src={NLogo} alt="logo" />
              </div>
              <h2 className='text-secondary text-[36px] font-semibold'>
                Our Services
              </h2>
            </div>
            <p className='text-center text-[18px] text-gray leading-[28px]'>
              We Assist You In Constructing Top-Tier Digital Solutions And Products Following Best Practices, While Also Offering An Extensive Array Of Associated Professional Services. Our Commitment Is To Provide Unparalleled Service To Our Esteemed Clients On A Global Scale.
            </p>
          </div>

          <div className='w-full center flex-wrap services py-8 text-primary'>
            <div className='center flex-wrap w-[95%] gap-4'>
              {ServicesUtils.map((service) => (
                <div key={service.id} className='bg-gray md:h-[590px] lg:w-[32%] md:w-[48%] w-full p-4 flex-col flex rounded-[26px]'>
                  <div>
                    <img src={service.image} alt="service image" className='rounded-[20px]' />
                  </div>
                  <div className='flex-col flex items-start w-full mt-6'>
                    <h3 className='text-[24px] font-semibold mb-3'>
                      {service.title}
                    </h3>
                    <p className='font-light leading-[28px]'>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training */}
        <div className='w-full center my-8 flex-col gap-8 bg-[#F1F1F1]'>
            <div className='flex-col gap-6 center w-[80%]'>
                <div className='center'>
                    <div className='flex items-start'>
                      <img src={NLogo} alt="logo" />
                    </div>
                    <h2 className='text-secondary text-[36px] font-semibold'>
                      Training
                    </h2>
                </div>
                <div className='text-[28px]'>
                  <p className='text-center font-semibold text-gray leading-[36px]'>
                    Register For Our Next Cohort
                  </p>
                  <p className='text-center font-semibold text-gray leading-[36px]'>
                    Click Here To Register For Our Next Tech BootCamp
                  </p>
                </div>
                <div className='my-4'>
                  <CustomButton backgroundColor="#FFF" border="1px solid #717171" textColor="#717171" borderRadius="20px" padding="5px 40px">
                    <p>Learn</p>
                    <img src={LearnArrow} alt="learn arrow" />
                  </CustomButton>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}

export default Services
