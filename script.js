/* M1 jQuery inlämning start */
/* M1 jQuery inlämning start */
/* M1 jQuery inlämning start */
$(document).ready(function () {
  var typed2 = new Typed('#typed2', {
    strings: ['Din hemsida <br>Mitt hantverk'],
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true
  });
})

$(document).ready(function () {
  var typed6 = new Typed('#typed6', {
    strings: [' `Webbutvecklare ` ^500\n `- UX designer` ^500\n `-  Front end`'],
    startDelay: 2800,
    typeSpeed: 15,
    backSpeed: 0
  });
})

$(document).ready(function () {
  $(".ctaButton").delay(4200).fadeIn(1000);
});

$(document).ready(function () {
  $(".scrollIndicator").delay(4000).fadeIn(20000);
});

$(document).ready(function () {
  $('.skill1').hover(function () {
    $('.htmlSass').toggle();
  })
})

$(document).ready(function () {
  $('.skill2').hover(function () {
    $('.photoshop').toggle();
  })
})

$(document).ready(function () {
  $('.skill3').hover(function () {
    $('.wordpress').toggle();
  })
})

$(document).ready(function () {
  $('.skill4').hover(function () {
    $('.javaScript').toggle();
  })
})

$(document).ready(function () {
  $('.skill5').hover(function () {
    $('.php').toggle();
  })
})

$(document).ready(function () {
  $('.blogText').click(function () {
    $('.blogText').animate({
      deg: 720
    }, {
      duration: 1200,
      step: function (now) {
        $(this).css({
          transform: 'rotate(' + now + 'deg)'
        });
      }
    });
  });
})

$(document).ready(function () {
  $('.HVSkolUppgiftText').css('cursor', 'pointer');
})


$(document).ready(function () {
  $('.blogText').css('cursor', 'pointer');
})

$(document).ready(function () {
  $('#firstSocial, #social, #social').css('cursor', 'pointer');
})

$(document).ready(function () {
  $('.HVSkolUppgiftText').click(function () {
    $('.HVSkolUppgiftText').css('background-color', '#E74C3C');
  })
})
/* M1 jQuery inlämning End */
/* M1 jQuery inlämning End */
/* M1 jQuery inlämning End */



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //Ändrar så att rätt bild och text kommer upp.
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./full/${originalSrc}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    original.classList.remove("open");
  }
});