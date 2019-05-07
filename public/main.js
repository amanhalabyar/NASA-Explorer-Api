document.getElementById("submitButton").addEventListener("click", function(e) {
  e.preventDefault();
});

function fetchValue() {
  // var input = document.getElementById("search").value;
  fetch("/picture")
    .then(function(response) {
      return response.json();
    })
    .then(function((data) => {
      console.log(data);
      // const nasa = document.createElement('a');
      // nasa.href = data;
      // const section = document.getElementById('nasaApi');
      // section.appendChild('nasaApi');
      // })
      .catch(function(error) {
        console.log(error);
      });
    });
