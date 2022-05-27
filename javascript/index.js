// firstname
let fname = document.getElementById("fname");
fname.addEventListener("change", function () {
  nameValidation(this);
});
// last name
let lname = document.getElementById("lname");
lname.addEventListener("change", function () {
  nameValidation(this);
});
//institution
let institution = document.getElementById("institution");
institution.addEventListener("change", function () {
  inst_deptValidation(this);
});
//dropdown select
let select = document.getElementById("select");
select.addEventListener("change", function () {
  selectValidation(this);
});
//department
let department = document.getElementById("department");
department.addEventListener("change", function () {
  inst_deptValidation(this);
});
//graduation yr
let graduation_yr = document.getElementById("graduation_yr");
graduation_yr.addEventListener("change", function () {
  graduationYrValidation(this);
});
//email
let email = document.getElementById("email");
email.addEventListener("change", function () {
  emailValidation(this);
});
//phone
let phone = document.getElementById("phone");
phone.addEventListener("change", function () {
  phoneValidation(this);
});
//address
let address = document.getElementById("address");
address.addEventListener("change", function () {
  locationValidation(this);
});
//city
let city = document.getElementById("city");
city.addEventListener("change", function () {
  locationValidation(this);
});
//state
let state = document.getElementById("state");
state.addEventListener("change", function () {
  locationValidation(this);
});
//pincode
let pincode = document.getElementById("pincode");
pincode.addEventListener("change", function () {
  pincodeValidation(this);
});
//age
let age = document.getElementById("age");
age.addEventListener("change", function () {
  ageValidation(this);
});
//dob
let dob = document.getElementById("dob");
dob.addEventListener("change", function () {
  dobValidation(this);
});
//gender
let genders = document.getElementsByClassName("gender_ele");
//file
let file = document.getElementById("file");
file.addEventListener("change", function () {
  fileValidation(this);
});
//url
let url = document.getElementById("url");
url.addEventListener("change", function () {
  urlValidation(this);
});
//creating password
let crtPassword = document.getElementById("crtPassword");
crtPassword.addEventListener("change", function () {
  crtPasswordValidation(this);
});
//show password checkbox
let showPassword = document.getElementById("showPassword");
showPassword.addEventListener("click", function () {
  showPasswordValidation(showPassword);
});
//confirm password
let confirmPassword = document.getElementById("confirmPassword");
confirmPassword.addEventListener("change", function () {
  confirmPasswordValidation(this);
});
//terms and condition
let condition_checkbox = document.getElementById("condition_checkbox");
//reset btn
let resetBtn = document.getElementById("reset-btn");
//msg
resetBtn.addEventListener("click", function () {
  let msgs = document.getElementsByClassName("msg");
  for (let i = 0; i < msgs.length; i++) {
    msgs[i].innerHTML = "";
  }
  //icon tag
  let iconsTag = document.getElementsByClassName("position");

  for (let i = 0; i < iconsTag.length; i++) {
    iconsTag[i].innerHTML = "";
  }
});
// ___________________________form validation____________________________

function formValidate() {
  if (
    nameValidation(fname) &&
    nameValidation(lname) &&
    inst_deptValidation(institution) &&
    inst_deptValidation(department) &&
    selectValidation(select) &&
    graduationYrValidation(graduation_yr) &&
    emailValidation(email) &&
    phoneValidation(phone) &&
    dobValidation(dob) &&
    genderValidation(genders) &&
    fileValidation(file) &&
    urlValidation(url) &&
    crtPasswordValidation(crtPassword) &&
    confirmPasswordValidation(confirmPassword) &&
    termsCondition(condition_checkbox)
  ) {
    return true;
  } else {
    return false;
  }
}
let myform = document.getElementById("myform");
myform.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formValidate()) {
   
    swal({
      title: "Are you sure you want to submit the form?",
      text: "Form once submitted,cannot be edited!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      //submit
      .then((willDelete) => {
        if (willDelete) {
          e.preventDefault = false;
          swal({
            title: "Welcome!",
            text: "Successfully registered",
            icon: "success",
            button: "Ok",
          });
          setTimeout(function () {
            location.reload();
          }, 2500);
        }
      });
  }
  else{
    let requiredMsg = document.getElementById("requiredMsg");
    requiredMsg.innerHTML ="*Please fill all the required fields";
   
   
  }
});

// _____________________________________________________________________________  utility function__________________________________________________________________________________
// _____________________________________________________________________________  utility function__________________________________________________________________________________

//name validation utility function
function nameValidation(x) {
  {
    if (isEmpty(x)) {
      show_warning_icon(x);
      show_empty_msg(x);
      return false;
    } else {
      if (x.value.match(/^[a-zA-Z\-\'\`\u00E0-\u00FC]+$/)) {
        show_success_icon(x);
        x.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
      } else {
        show_error_icon(x);
        x.nextElementSibling.nextElementSibling.innerHTML =
          "Please enter valid one";
        return false;
      }
    }
  }
}

// __________________________________academic details___________________________________
//inst_deptValidation utility function
function inst_deptValidation(x) {
  if (isEmpty(x)) {
    show_warning_icon(x);
    show_empty_msg(x);
    return false;
  } else {
    show_success_icon(x);
    x.nextElementSibling.nextElementSibling.innerHTML = "";
    return true;
  }
}
function selectValidation(x) {
  let options = document.getElementsByClassName("option");
  let flag = false;

  for (let i = 0; i < options.length; i++) {
    if (options[i].selected == true) {
      flag = true;
      x.nextElementSibling.innerHTML = "";
      return true;
    }
  }
  if (flag == false) {
    x.nextElementSibling.innerHTML = "Please select any option";
    return false;
  }
}
// graduationYrValidation utility function
function graduationYrValidation(x) {
  if (isEmpty(x)) {
    show_warning_icon(x);
    show_empty_msg(x);
    return false;
  } else {
    if (x.value.match(/^[12][0-9]{3}$/)) {
      show_success_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "Invalid year";
      return false;
    }
  }
}
// ___________________________________contact details______________________________________

// emailValidation utility function
function emailValidation(x) {
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (isEmpty(x)) {
    show_warning_icon(x);
    show_empty_msg(x);
    return false;
  } else {
    if (x.value.match(email_regex)) {
      show_success_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "Invalid email id";
      return false;
    }
  }
}

// phoneValidation utility function
function phoneValidation(x) {
  if (isEmpty(x)) {
    show_warning_icon(x);
    show_empty_msg(x);
    return false;
  } else {
    if (x.value.match(/^[6789][0-9]{9}$/)) {
      show_success_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "Invalid";
      return false;
    }
  }
}
// locationValidation utility function
function locationValidation(x) {
  if (x.value != "") {
    show_success_icon(x);
    return true;
  } else {
    x.nextElementSibling.innerHTML = "";
    return false;
  }
}

// pincodeValidation utility function
function pincodeValidation(x) {
  let pincode_regex = /^[1-9]{1}[0-9]{2}[\s]{0,1}[0-9]{3}$/;
  if (x.value != "") {
    if (x.value.match(pincode_regex)) {
      show_success_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "Invalid pincode";
      return false;
    }
  }
  x.nextElementSibling.nextElementSibling.innerHTML = "";
  x.nextElementSibling.innerHTML = "";
}
// _____________________________________________________________other details_________________________________________________________
// ageValidation utility function
function ageValidation(x) {
  if (x.value != "") {
    if (x.value >= 0 && x.value <= 150) {
      show_success_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "Invalid age";
      return false;
    }
  }
  x.nextElementSibling.nextElementSibling.innerHTML = "";
  x.nextElementSibling.innerHTML = "";
}

// dobValidation utility function
function dobValidation(dob) {
  if (isEmpty(dob)) {
    show_empty_msg(dob);
    return false;
  } else {
    dob.nextElementSibling.nextElementSibling.innerHTML = "";
    return true;
  }
}

//genderValidation utility function
function genderValidation(genders) {
  if (genders[0].checked == false && genders[1].checked == false) {
    let gender_box = document.getElementById("gender_box");
    gender_box.lastElementChild.innerHTML = "This is a required field";
    return false;
  }
  gender_box.lastElementChild.innerHTML = "";
  return true;
}
// file inputValidation utility function
function fileValidation(x) {
  if (isEmpty(x)) {
    show_empty_msg(x);
    return false;
  } else {
    // file extension check
    let extStartingIndex = x.value.lastIndexOf(".") + 1;
    let ext = x.value.substr(extStartingIndex, x.value.length).toLowerCase();
    if (ext != "pdf") {
      x.nextElementSibling.innerHTML = "please select only pdf file";
      return false;
    }
    if (x.files[0].size / (1024 * 1024) > 10) {
      x.nextElementSibling.innerHTML = "File size exceeds 10MB";
      return false;
    }
    x.nextElementSibling.innerHTML = "";
    return true;
  }
}

// urlValidation utility function
function urlValidation(x) {
  let regex_url =
    "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";
  if (isEmpty(x)) {
    show_warning_icon(x);
    show_empty_msg(x);
    return false;
  } else {
    if (x.value.match(regex_url)) {
      show_success_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "Invalid url";
      return false;
    }
  }
}
//crtPasswordValidation utility function
function crtPasswordValidation(x) {
  let regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (isEmpty(x)) {
    show_warning_icon(x);
    show_empty_msg(x);
    return false;
  } else {
    if (x.value.match(regexPassword)) {
      show_success_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML =
        "Password must contain min 8 digit character,1 uppercase letter,1 lowercase letter, 1 digit,1 special character";
      return false;
    }
  }
}
//  show PasswordValidation
function showPasswordValidation(x) {
  let crtPassword = document.getElementById("crtPassword");
  if (x.checked) {
    crtPassword.type = "text";
  } else {
    crtPassword.type = "password";
  }
}
//confirmPasswordValidation utility function
function confirmPasswordValidation(x) {
  let crtPassword = document.getElementById("crtPassword");
  if (isEmpty(x)) {
    show_warning_icon(x);
    show_empty_msg(x);
    return false;
  } else {
    if (crtPassword.value == x.value) {
      show_success_icon(confirmPassword);
      x.nextElementSibling.nextElementSibling.innerHTML = "";
      return true;
    } else {
      show_error_icon(x);
      x.nextElementSibling.nextElementSibling.innerHTML =
        "Password not matched! Please try again";
      return false;
    }
  }
}
//_______________ termsCondition checkbox utility function_______________
function termsCondition(x) {
  if (!x.checked) {
    x.nextElementSibling.nextElementSibling.innerHTML =
      "This is a required field";
    return false;
  }
  return true;
}

//_______________ isEmpty, showing icon, showing empty error msg utility function_______________
function isEmpty(x) {
  if (x.value == "") return true;
  return false;
}
function show_empty_msg(x) {
  x.nextElementSibling.nextElementSibling.innerHTML =
    "This is a required field";
}
function show_success_icon(x) {
  x.style.cssText = "border:5px solid green";
  x.nextElementSibling.innerHTML =
    '<i class="fa fa-check-circle" id="success" aria-hidden="true"></i>';
}
function show_warning_icon(x) {
  x.style.cssText = "border:5px solid orange";
  x.nextElementSibling.innerHTML =
    '<i class="fa fa-exclamation-triangle" id="warning"  aria-hidden="true"></i>';
}
function show_error_icon(x) {
  x.style.cssText = "border:5px solid red;";
  x.nextElementSibling.innerHTML =
    '<i class="fa fa-times"id="error" aria-hidden="true"></i>';
}
