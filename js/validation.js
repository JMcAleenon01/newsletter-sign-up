function validateEmail(emailValue) {
      
    var error_message = document.getElementById("newsletter-error");
    var newsMain = document.getElementById("main");
    var newsMobileChange = document.getElementById("newsletter-mobile-image");
    var newsDeskChange = document.getElementById("newsletter-desktop-image");
    var newsSection = document.getElementById("newsletter-sign-up");
    var newsEmail = document.getElementById("newsletter-email");
    var customerEmail = document.getElementById("customer-email");
    var endSection = document.getElementById("end-section");

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailValue.value.match(mailformat))
    {
      error_message.style.display = "none";
      newsMain.classList.add("desktop-success");
      newsMobileChange.style.display = "none";
      newsDeskChange.style.display = "none";
      newsSection.style.display = "none";
      endSection.style.display = "flex";
      customerEmail.innerHTML = emailValue.value;
      return true;
    }
    else
    {
      error_message.style.display = "block";
      return false;
    }
 
}