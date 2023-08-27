
const FlashSaleBanner = ({bannerURL}) => {
 const imgURL =bannerURL || 'https://static.vecteezy.com/system/resources/previews/017/771/015/original/flash-sale-banner-horizontal-background-of-discount-event-for-media-promotion-and-social-media-post-vector.jpg'
    return (
        <div className="container mx-auto mt-4 p-1 lg:p-0">
            <img className="max-h-[290px] w-full object-fill " src={imgURL} alt="" />
        </div>
    );
};

export default FlashSaleBanner;