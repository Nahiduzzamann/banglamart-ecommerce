const PopUpAdd = ({setAdds}) => {
    const handleClearAdds = () =>{
        setAdds(false); 
    }
  return (
    <div className="flex items-center justify-center h-screen fixed bg-SubTextColor w-screen z-40 bg-opacity-80">
      <div
        style={{
          clipPath:
            "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
        }}
        className=""
      >
        <img
          className="h-[40vw] w-[60vw]"
          src="https://previews.123rf.com/images/arcady31/arcady311606/arcady31160600002/59113161-special-offer-red-star-icon.jpg"
          alt=""
        />
        
      </div>
      <div className="">
          <button onClick={handleClearAdds}>Clear All</button>
        </div>
    </div>
  );
};

export default PopUpAdd;
