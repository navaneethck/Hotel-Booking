

export const InitRazorpay = (order,key,bookingId,navigate)=>{
    const options = {
        key:key,
        amount:order.amount,
        currency:order.currency,
        name:"REST.COM",
        description: "Booking Payment",
        order_id: order.id,
        handler: async function (response){
          try{
            const verifyResponse = await fetch(`${import.meta.env.VITE_API_URI}/api/payment/verify`,{
            method:'POST',
            headers:{
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
             razorpay_order_id: response.razorpay_order_id,
             razorpay_payment_id: response.razorpay_payment_id,
             razorpay_signature: response.razorpay_signature,
             bookingId
            })
         })
        const data = await verifyResponse.json();
        alert(data.message);

        if (data.success){
          navigate('/payment')
          console.log(`the verified the payment ${data.success}`)
        } else {
          alert('something went wrong')
        }
      }catch(err){
        console.error('Payment verification failed:', err);
        alert('Payment verification failed. Please try again.');
      }
        },
        prefill: {
        name: "Navan",  
        email: "navan@example.com",
        contact: "9999999999",
        },
        theme: {
        color: "#0d9488",
        },
    }
  const razor = new window.Razorpay(options);
  razor.open();
}