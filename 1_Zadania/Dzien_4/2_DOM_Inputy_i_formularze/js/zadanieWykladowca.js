// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector('form');
//
//   form.addEventListener("submit", function(event){
//     const mail = document.getElementById('email');
//     const mailString = mail.value.includes("@");
//     const errorMessage = document.querySelector('.error-message');
//     const succesMessage = document.querySelector('.success-message');
//
//     if (mailString === false){
//       errorMessage.innerText += "Email musi posiadać znak @";
//       event.preventDefault();
//     }
//
//     const name = document.getElementById('name');
//     if (name.value.length <= 6){
//       errorMessage.innerText += " Twoje imię jest za krótkie";
//       event.preventDefault();
//     }
//
//     const surname = document.getElementById('surname');
//     if (surname.value.length <= 6){
//       errorMessage.innerText += " Twoje nazwisko jest za krótkie";
//       event.preventDefault();
//     }
//
//     const pass1 = document.getElementById('pass1');
//     const pass2 = document.getElementById('pass2');
//     if (pass1.value==="" || pass2.value==="" || pass1.value!==pass2.value){
//       errorMessage.innerText += " Hasła nie są takie same lub puste";
//       event.preventDefault();
//     }
//
//     const check = document.getElementById('agree');
//     if (check.checked === false){
//       errorMessage.innerText += " Musisz zaakceptować warunki";
//       event.preventDefault();
//     }
//
//   })
//
// });

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        const email = document.querySelector("#email");
        const name = document.querySelector("#name");
        const surname = document.querySelector('#surname');
        const pass1 = document.querySelector("#pass1");
        const pass2 = document.querySelector("#pass2");
        const agree = document.querySelector('#agree');
        const errorMessage = document.querySelector('.error-message');
        const successMessage = document.querySelector('.success-message');

        if(email.value.indexOf("@") === -1){
            errorMessage.innerText = "Email musi posiadać znak @";
            return;
        }

        if(name.value.length < 6){
            errorMessage.innerText = "Twoje imię jest za krótkie";
            return;
        }

        if(surname.value.length < 6){
            errorMessage.innerText = "Twoje nazwisko jest za krótkie";
            return;
        }

        if(pass1.value !== pass2.value || pass1.value.length === 0 || pass2.value.length === 0){
            errorMessage.innerText = "Hasła nie są takie same lub puste";
            return;
        }

        if(!agree.checked){
            errorMessage.innerText = "Musisz zaakceptować warunki";
            return;
        }

        errorMessage.innerText = "";
        successMessage.innerText = "Zaraz cie przekieruje";
        setTimeout(function(){
            form.submit();
        }, 5000);
    });
});
