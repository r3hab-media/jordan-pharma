//contact form submit
submit.addEventListener('click', event => {
  const leadName = document.getElementById('name').value;
  const leadCompany = document.getElementById('company').value;
  const leadEmail = document.getElementById('email').value;
  const leadPhone = document.getElementById('phone').value;
  const leadMessage = document.getElementById('message').value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("name", leadName);
  urlencoded.append("company", leadCompany);
  urlencoded.append("email", leadEmail);
  urlencoded.append("phone", leadPhone);
  urlencoded.append("message", leadMessage);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://us-central1-jordan-pharma-dev.cloudfunctions.net/sendMailOverHTTP", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    contactForm.reset();
});

