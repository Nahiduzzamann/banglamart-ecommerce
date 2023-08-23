
const TimerFlashSell = ({countdownValue}) => {
    return (
        <div className="grid grid-flow-col gap-1 lg:gap-2 text-center auto-cols-max">
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": countdownValue / (24 * 60 * 60) }}></span>
              </span>
              <p>days</p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": (countdownValue / 3600) % 24 }}></span>
              </span>
              <p>hours</p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": (countdownValue / 60) % 60 }}></span>
              </span>
              <p>min</p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": countdownValue % 60 }}></span>
              </span>
              <p>sec</p>
            </div>
          </div>
    );
};

export default TimerFlashSell;