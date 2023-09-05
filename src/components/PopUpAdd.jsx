import { useState } from "react";
import { motion } from "framer-motion";

const PopUpAdd = ({ setAdds }) => {
  const images = [
    "https://png.pngtree.com/png-clipart/20190516/original/pngtree-super-sale-and-special-offer-banner-design-png-image_3688401.jpg",
    "https://previews.123rf.com/images/arcady31/arcady311606/arcady31160600002/59113161-special-offer-red-star-icon.jpg",
    "https://static.vecteezy.com/system/resources/previews/005/020/297/original/limited-time-offer-design-in-red-and-black-with-stop-watch-free-vector.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const showNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setButtonDisabled(true);
      setAdds(false);
    }
  };

  const handleClearAdds = () => {
    setAdds(false);
  };
  return (
    <div className="flex items-center justify-center h-screen fixed bg-SubTextColor w-screen z-40 bg-opacity-80">
      <motion.div
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 270, 270, 0],
      }}
        style={{
          clipPath:
            "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
        }}
        className=""
      >
        <img
          className="h-[30vw] w-[60vw]"
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
        />
      </motion.div>
      <div className="flex flex-col h-[30vw] justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          onClick={showNextImage}
          disabled={buttonDisabled}
          className="btn-sm lg:btn btn-info rounded-full text-2xl text-CardColor"
        >
          X
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="text-CardColor btn-sm lg:btn btn-info rounded-full"
          onClick={handleClearAdds}
        >
          Clear All
        </motion.button>
      </div>
    </div>
  );
};

export default PopUpAdd;
