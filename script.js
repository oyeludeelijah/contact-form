const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const message = document.getElementById("comments");
const consent = document.getElementById("consent");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");

const firstNErrorMsg = document.getElementById("firstN-error-msg");
const lastNErrorMsg = document.getElementById("lastN-error-msg");
const emailErrorMsg = document.getElementById("email-error-msg");
const queryTypeErrorMsg = document.getElementById("querytype-error-msg");
const commentNErrorMsg = document.getElementById("comments-error-msg");
const consentErrorMsg = document.getElementById("consent-error-msg");

const generalEnquiryCont = document.getElementById("general-enquiry-cont");
const supportRequestCont = document.getElementById("support-request-cont");

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value.match(emailPattern)) {
    emailErrorMsg.textContent = "Please enter a valid email address";
    email.style.borderColor = "hsl(0, 66%, 56%)";
    return false;
  }
  emailErrorMsg.textContent = "";
  email.style.borderColor = "";
  return true;
}

function queryColor() {
  if (generalEnquiry.checked) {
    generalEnquiryCont.style.backgroundColor = "hsl(148, 38%, 91%)";
    supportRequestCont.style.backgroundColor = "";
    generalEnquiryCont.style.borderColor = "hsl(169, 82%, 27%)";
    supportRequestCont.style.borderColor = "";
  } else if (supportRequest.checked) {
    supportRequestCont.style.backgroundColor = "hsl(148, 38%, 91%)";
    generalEnquiryCont.style.backgroundColor = "";
    supportRequestCont.style.borderColor = "hsl(169, 82%, 27%)";
    generalEnquiryCont.style.borderColor = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // First Name Validation
  if (!firstName.value) {
    firstNErrorMsg.textContent = "This field is required";
    firstName.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    firstNErrorMsg.textContent = "";
    firstName.style.borderColor = "";
  }

  // Last Name Validation
  if (!lastName.value) {
    lastNErrorMsg.textContent = "This field is required";
    lastName.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    lastNErrorMsg.textContent = "";
    lastName.style.borderColor = "";
  }

  // Email Validation
  if (!email.value) {
    email.style.borderColor = "hsl(0, 66%, 56%)";
    emailErrorMsg.textContent = "This field is required";
    email.placeholder = "email@example.com";
    isValid = false;
  } else if (!validateEmail()) {
    isValid = false;
  }

  // Query Type Validation
  if (!generalEnquiry.checked && !supportRequest.checked) {
    queryTypeErrorMsg.textContent = "Please select a query type";
    isValid = false;
  } else {
    queryTypeErrorMsg.textContent = "";
  }

  // Message Validation
  if (!message.value) {
    commentNErrorMsg.textContent = "This field is required";
    message.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    commentNErrorMsg.textContent = "";
    message.style.borderColor = "";
  }

  // Consent Validation
  if (!consent.checked) {
    consentErrorMsg.textContent =
      "To submit this form, please consent to being contacted";
    isValid = false;
  } else {
    consentErrorMsg.textContent = "";
  }

  // If all validations are passed
  if (isValid) {
    alert(
      "Message Sent! \nThanks for completing the form. We'll be in touch soon!"
    );

    window.location.reload();
  }
});

generalEnquiry.addEventListener("click", queryColor);
supportRequest.addEventListener("click", queryColor);
