//define functions here
function getIt() {
  $('p').on('click', function() {
<<<<<<< HEAD
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}
=======
    alert('hey!');
  })
};

>>>>>>> 4c48baed24a6629358c8a894db2d9e4a566bfd6b


$(document).ready(function(){

// call functions here

});
