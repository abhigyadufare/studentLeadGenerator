const firebase = require("./../config/Firebase.js")
const {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } =  require("firebase/auth");

  const auth = getAuth(firebase);

  const onCaptchaVerify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
        },
      }
    );
  };

  const onSignInSubmit = () => {
    onCaptchaVerify();
    const phoneNumber = "+91" + mobile;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP Sent Successfully !");
        setverifyOtp(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyCode = () => {
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Verification Done !");
        setOtpVerified(true);
        setverifyOtp(false);
      })
      .catch((error) => {
        alert("Invalid OTP !");
      });
  };

  module.exports = {auth, onCaptchaVerify, onSignInSubmit, verifyCode};