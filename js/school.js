$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
});

function openOverlay(src) {
  document.getElementById("largeImage").src = src;
  document.getElementById("imageOverlay").style.display = "block";
  document.body.classList.add("modal-open"); // ปิดการเลื่อนของหน้าเว็บ
}

function closeOverlay() {
  document.getElementById("imageOverlay").style.display = "none";
  document.body.classList.remove("modal-open"); // เปิดการเลื่อนของหน้าเว็บอีกครั้ง
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
  document.body.classList.add("modal-open"); // ปิดการเลื่อนของหน้าเว็บหลัก
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.classList.remove("modal-open"); // เปิดการเลื่อนของหน้าเว็บหลักอีกครั้ง
}

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // เมื่อเลื่อนลง, เอาเงาออก
  } else {
    navbar.classList.remove("scrolled"); // เมื่ออยู่บนสุด, เพิ่มเงากลับมา
  }
});

function toggleCouncil() {
  const male = document.getElementById("maleCouncil");
  const female = document.getElementById("femaleCouncil");
  male.classList.toggle("active");
  female.classList.toggle("active");
}
