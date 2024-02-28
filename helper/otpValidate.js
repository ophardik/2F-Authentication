const otpVerification=async (otpTime)=>{
    try{
   
        console.log("Millisecond is:",+ otpTime);

        const cDateTime=new Date();
       let differenceValue=(otpTime-cDateTime.getTime())/1000;
       differenceValue/=60;
       const minutes=Math.abs(differenceValue);
       console.log("Expired Minutes",+minutes);

       if(minutes>2){
        return true;
       }
       return false;



    }catch(error){
        console.log("Error",error)
    }
}

module.exports={
    otpVerification,
};