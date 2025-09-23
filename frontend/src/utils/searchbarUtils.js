import { useState } from "react";

export const DatePicker = (initialCheckIn, initialCheckOut)=>{
  const formatDate =  (date)=> date.toISOString().split('T')[0];

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() +1);

  const defaultCheckIn = initialCheckIn || formatDate(today);
  const defaultCheckOut = initialCheckOut || formatDate(tomorrow);

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);

  const handleCheckInChange = (e)=>{
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);

    if(checkOut<= newCheckIn){
      const nextDay = new Date(newCheckIn);
      nextDay.setDate(nextDay.getDate()+1);
      setCheckOut(formatDate(nextDay));
    }
  }
   return { checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today };
};
export const searchDestination = (initialDestination = "")=>{
   const [destination,setDestination] = useState(initialDestination)
   const handleDestination=(e)=>{
      setDestination( e.target.value)
   }
   return {handleDestination,destination};
};
export const guests = (initialGuest = 1)=>{
  const [guest,setGuest] = useState(initialGuest);
  const handleGuest = (e)=>{
  setGuest( e.target.value);
  }
  return {handleGuest,guest};
}