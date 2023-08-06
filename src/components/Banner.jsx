import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
    return (
        <div className=''>
            <Carousel
            className=' max-h-[400px]'
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={2000}
                // centerMode={true}
                // centerSlidePercentage={95}
            >
                <div className=''>
                    <img className='object-fill  max-h-[340px]' src="https://banglamartecommerce.com/public/uploads/all/kXCe3Y1g843cxpLKM9P43kEEaNkX0hdVSHfEuOR1.jpg" alt="Slider Image 1" />
                    
                </div>
                <div>
                    <img className='object-fill  max-h-[340px]' src="https://banglamartecommerce.com/public/uploads/all/kXCe3Y1g843cxpLKM9P43kEEaNkX0hdVSHfEuOR1.jpg" alt="Slider Image 2" />
                    
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;