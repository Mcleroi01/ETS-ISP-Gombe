// // window.onscroll = function () {
// //     scroll()

// // }

// // let nav = document.getElementById('navbar')
// // let stick = nav.offsetTop

// // function scroll() {
// //     if (window.pageYOffset >= stick) {
// //         nav.classList.add('stick')
// //     }
// //     else {
// //         nav.classList.remove('stick')
// //     }
// // }

// function change(x) {
//     x.classList.toggle("change")
//     document.querySelector('.menu').classList.toggle('menu-mobile');
//     window.onclick = function (e) {
//         if (e.target.matches('pro')) {
//             let drop = document.querySelector('.nav_menu');
//             if (drop.classList.contains('menu-mobile')) {
//                 drop.classList.remove('show')
//             }
//         }

//     }

// }

// window.addEventListener('scroll', reveal)
// function reveal() {
//     var reveals = document.querySelectorAll('.reveal');

//     for (let i = 0; i < reveals.length; i++) {
//         let windowheight = window.innerHeight;
//         let revealtop = reveals[i].getBoundingClientRect().top
//         let revealpoint = 150;

//         if (revealtop < windowheight - revealpoint) {
//             reveals[i].classList.add('active');

//         } else {
//             reveals[i].classList.remove('active');
//         }

//     }
// }

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     grabCursor: true,
//     loop: true,

//     autoplay: {
//         delay: 5000,
//     },
// });

// var myVar;

// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//     document.getElementById("loader").style.display = "none";
// }

async function createAdmission(event) {
  event.preventDefault();

  const form = document.querySelector("#form_creat");
  const data = {
    programmes: form.programme.value,
    date_demanded: form.date.value,
    name: form.name.value,
    last_name: form.lastname.value,
    email: form.email.value,
    phone: form.phone.value,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/api/admission/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Données d'erreur :", errorData);
      displayErrors(errorData.errors || { error: "Une erreur est survenue" });
      throw new Error(
        `Erreur HTTP ! Statut : ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    console.log("Succès :", result);


    window.location.href = "http://127.0.0.1:5501/pages/success.html"; 
  } catch (error) {
    console.error("Erreur :", error);

    displayErrors({ error: "Une erreur est survenue lors de la soumission" });
  }
}

function displayErrors(errors) {
  const errorMessages = document.querySelector("#errorMessages");
  errorMessages.innerHTML = "";

  for (const [field, messages] of Object.entries(errors)) {
    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.textContent = Array.isArray(messages)
      ? messages.join(", ")
      : messages;
    errorMessages.appendChild(errorMessage);
  }
}
