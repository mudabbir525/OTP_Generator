var image = document.querySelector("img");
var otpContainer = document.getElementById("otp");

function otpgenerate() {
  var otp = generateOTP(4); // Generate a 4-digit OTP

  image.style.display = "none"; // Hide the image
  otpContainer.innerText = otp; // Display the OTP in the container
}

// Function to generate a random OTP of specified length
function generateOTP(length) {
  var characters = "0123456789";
  var otp = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters.charAt(randomIndex);
  }

  return otp;
}
