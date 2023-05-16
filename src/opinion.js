function highlightSection(element) {
  element.classList.add('select-highlight');
}

function removeHighlight(element) {
  element.classList.remove('select-highlight');
}

function limitTextareaHeight(element, maxHeight) {
  element.style.height = ''; // Restablecer la altura para recalcular correctamente
  var scrollHeight = element.scrollHeight;
  if (scrollHeight > maxHeight) {
    element.style.height = maxHeight + 'px';
  } else {
    element.style.height = scrollHeight + 'px';
  }
}

$(document).ready(function() {
  $('#submitButton').click(function() {
    var email = $('#emailInput').val();
    var selectValue = $('#selectInput').val();
    var textareaValue = $('#textareaInput').val();

    if (validateEmail(email) && selectValue !== 'Selecciona' && textareaValue !== '') {
      location.reload();
    }
    if (!validateEmail(email)) {
      $('#habilitar').html("Correo inválido, pruebe a usar:<br>@<br>.<br>es/com");
    }
    if (selectValue === 'Selecciona') {
      $('#habilitar').html("Selecciona un lugar.");
    }
    if (textareaValue === '') {
      $('#habilitar').html("Aporta informacion porfavor.");
    }
  });

  function validateEmail(email) {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  }

  var maxCharacters = 100;
  $('#textareaInput').on('input', function() {
    var textareaValue = $(this).val();
    var remaining = maxCharacters - textareaValue.length;

    if (remaining >= 0) {
      $('#charactersRemaining').text(remaining + ' caracteres restantes');
    } else {
      $(this).val(textareaValue.substring(0, maxCharacters));
    }
  });
});