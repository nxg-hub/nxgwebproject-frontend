import NLogo from '../../assets/icons/n.png';
import Location from '../../assets/svgs/location.svg';
import Call from '../../assets/svgs/call.svg';
import Mail from '../../assets/svgs/mail.svg';
import CustomButton from '../Button';
import {
    FaFacebookSquare,
    FaLinkedin,
    FaTwitter,
    FaInstagram
  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-[#F1F1F1] w-full pt-8 center text-primary">
            <div className="relative w-[95%] bg-gray py-10 rounded-[20px] flex-col center">
                <div className="w-[90%] flex flex-wrap md:justify-center md:flex-nowrap justify-between lg:gap-0 gap-6  font-light">
                    <div className="md:w-[60%] mb-18 md:mb-0 flex-col gap-5 flex items-start">
                        <div className='center gap-1'>
                            <div className='flex items-start'>
                                <img src={NLogo} alt="logo" />
                            </div>
                            <h2 className='text-secondary text-[20px] font-semibold'>
                                CONTACT US
                            </h2>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='flex items-start'>
                                <img src={Location} alt="logo" />
                            </div>
                            <p className='w-[60%]'>
                                1 Chris Okafor Street Isolo, Lagos, Nigeria.
                            </p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='flex items-start'>
                                <img src={Call} alt="logo" />
                            </div>
                            <p className='w-[80%]'>
                                Phone:  +234-813-856-3840 || +234 706 885 8151 || +234 706 784 7829
                            </p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='flex items-start'>
                                <img src={Mail} alt="logo" />
                            </div>
                            <p className=''>
                                Email: Info@Nextgenhub.Com.Ng
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row md:justify-center md:gap-[6rem] mt-24 md:mt-0 gap-[4rem] w-full'>
                    <div className="md:w-fit w-full flex-col gap-4 flex items-start">
                        <h2 className='text-secondary text-[20px] font-semibold'>
                            ABOUT US
                        </h2>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Our Services</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="md:w-fit w-full flex-col gap-4 flex items-start">
                        <h2 className='text-secondary text-[20px] font-semibold'>
                            USEFUL LINKS
                        </h2>
                        <p>Training</p>
                        <p>NXG-Job-Hub</p>
                        <p>Career</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                    </div>
                    </div>
                    <div className="md:w-[50%] w-full flex-col gap-4 flex items-start">
                        <h2 className='text-secondary text-[20px] font-semibold'>
                            SUBSCRIPTION
                        </h2>
                        <p>
                            Combining Our Expertise Yields A Versatile Team Ready To Accomplish All Your Brand Or Career Requirements. Stay Tuned For Our Latest Updates By Subscribing Here.
                        </p>
                        <div className='border border-primary rounded-md between p-1 w-full'>
                            <input type="email" name="email" id="email" required className='border-none outline-none bg-gray pl-4 w-full' />
                            <CustomButton children="Subscribe" backgroundColor="#FFF" textColor="#717171" border="1px solid #fff"/>
                        </div>
                    </div>
                </div>
                <div className='absolute md:static top-[13rem] md:top-0 mt-16 flex items-start w-[90%] gap-6'>
                    <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
                        <FaTwitter />
                    </div>
                    <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
                        <FaLinkedin />
                    </div>
                    <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
                        <FaInstagram />
                    </div>
                    <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
                        <FaFacebookSquare />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;