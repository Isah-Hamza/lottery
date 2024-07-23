import moment from "moment";
import React, {useState, useEffect} from "react";
import OtpInput from "react-otp-input";
import {useNavigate} from "react-router-dom";

function CountdownComponent({targetDate, onCountdownEnd}) {
  const calculateTimeLeft = (targetDate) => {
    const now = Date.now();
    const difference = targetDate - now;

    // Check for negative difference (target date in the past)
    if (difference <= 0) {
      return {days: 0, hours: 0, minutes: 0, seconds: 0, total: 0};
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {days, hours, minutes, seconds, total: difference};
  };

  const [countDown, setCountDown] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCountDown = calculateTimeLeft(targetDate);
      setCountDown(newCountDown);

      // Optional: Call a function when the countdown ends
      if (newCountDown.total <= 0) {
        clearInterval(intervalId);
        onCountdownEnd && onCountdownEnd(); // Call the provided callback
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function for the effect
  }, [targetDate]); // Re-run effect when targetDate changes

  // Function to calculate remaining time

  const pad = (num) => (num < 10 ? `0${num}` : num); // Add leading zero for single digits

  return (
    <div className="flex justify-center">
      {/* <span>{pad(countDown.hours)}h: </span> */}
      <span className="text-xs text-green-400 mr-2">{pad(countDown.minutes)}min :</span>
      <span className="text-xs text-red-400">{pad(countDown.seconds)}sec</span>
    </div>
  );
}

const CustomOTPInput = ({otp, setOtp, requestPinFunction = () => null, requestPin = false}) => {
  const navigate = useNavigate();
  const [countDownEnded, setcountDownEnded] = useState(false);
  return (
    <div className="w-full">
      <div className="mx-auto my-4 flex justify-center">
        <OtpInput
          value={otp}
          onChange={(c) => setOtp(c)}
          numInputs={4}
          renderSeparator={<div className="w-6"></div>}
          inputStyle={{
            width: "3em",
            height: "3em",
            display: "grid",
            placeContent: "center",
            border: "1px solid #E7E7E7",
            // outline: "1px solid #540A18",
            borderRadius: 4,
            backgroundColor: "#F9F9F9",
            color: "#888888",
            fontSize: "20px",
          }}
          renderInput={(props) => <input style={{border: "1px solid "}} className="border " {...props} />}
          //   inputStyle={"bg-gray-200 mr-2 border-gray-200 !w-10 h-10 md:!w-12 md:h-12 lg:!w-14 lg:h-14 rounded-md"}
        />
      </div>
      {requestPin &&
        (countDownEnded ? (
          <p className="text-xs text-center">
            Didn't Get A Pin?{" "}
            <span onClick={requestPinFunction} className="text-xs text-blue-500 cursor-pointer">
              Request Now
            </span>
          </p>
        ) : (
          <CountdownComponent targetDate={moment().add(60, "seconds")} onCountdownEnd={() => setcountDownEnded(true)} />
        ))}
    </div>
  );
};

export default CustomOTPInput;
