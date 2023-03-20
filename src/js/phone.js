// int-tel-input 
$("#anything_mobile").intlTelInput({
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
  initialCountry: "In",
});
// var input = document.querySelector("#anything_mobile");
// var iti = $("#anything_mobile").intlTelInput({
//   utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
//   initialCountry: "In",
// });
// store the instance variable so we can access it in the console e.g. window.iti.getNumber()
// window.iti = iti;

(function ($) {
  // $('.specific-form').on('submit', function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   let form = $(this).get(0);
  //   $('form').addClass('was-validated');
  //   // Need to display invalid feedback explicitly on submit for input fields due to plugin changing structure
  //   $('form .tel-input').each(function () {
  //     let telInput = $(this).get(0);
  //     if ($(this).prop('required') && !telInput.checkValidity()) {
  //       $(this).parents('.form-group').find('.invalid-feedback').show();
  //     }
  //   });
  // });

  // input.addEventListener("countrychange", function () {
  //   let isValidNumber = iti.isValidNumber();
  //   checkPhoneValidation($(this), isValidNumber);
  // });

  // $('.specific-form').on('keyup', '.tel-input', function (event) {
  //   let isValidNumber = iti.isValidNumber();
  //   checkPhoneValidation($(this), isValidNumber);
  // });

})(jQuery);

function checkPhoneValidation(element, isValidNumber) {
  let invFeedbackDiv = element.parents('.form-group').find('.invalid-feedback');
  input = element.get(0);
  if (isValidNumber) {
    //need to set this first as otherwise input validity is falsely linking to custom error
    input.setCustomValidity('');
  }
  if (isValidNumber && input.validity.valid) {
    input.setCustomValidity('');
    invFeedbackDiv.hide();
  } else {
    invFeedbackDiv.html('Invalid phone number');
    input.setCustomValidity('invalid');
    if ($('form').hasClass('was-validated')) {
      invFeedbackDiv.show();
    }
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        let vale = $(".tel-input").intlTelInput("getNumber")
        let valid = $(".tel-input").intlTelInput("isValidNumber")
        let sbttn = this.querySelector('.submit-bttn');
        console.warn('bttn', sbttn);
        var telInput = document.querySelector(".tel-input")
        var checkPhoneValidity = function() {
          // console.warn('checkPhoneValidity', valid);
          if (valid) {
            $(".tel-input").removeClass("is-invalid")
            $(".tel-input").addClass("is-valid")
            // sbttn.prop('disabled', false);
          } else {
            $(".tel-input").removeClass("is-valid")
            $(".tel-input").addClass("is-invalid")
            // sbttn.prop('disabled', true);
          }
        };
        console.warn('tel-input', vale, this, valid, telInput)
        telInput.addEventListener('keyup', checkPhoneValidity);
        $(".phone2").val(vale);
        checkPhoneValidity();

        if (!form.checkValidity()) {
          console.warn('!form.checkValidity1', form.checkValidity());
          event.preventDefault()
          event.stopPropagation()
        }

        if (valid === false) {
          console.warn('!form.valid', valid);
          event.preventDefault()
          event.stopPropagation() 
        }
        // console.warn('!form.checkValidity2', form.checkValidity());
        form.classList.add('was-validated')

      }, false)
    })
})()