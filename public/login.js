var loginform = document.querySelector("#login")
var signupform = document.querySelector("#form")



loginform.addEventListener ("submit", async function(event){
    event.preventDefault();
    var password = document.querySelector("#loginPassword").value;

    var username = document.querySelector("#loginUser").value;

    if (username && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ name:username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

    const results = await response.json();
    console.log(results);

        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in.');
        }
      }
});

signupform.addEventListener ("submit", async function(event){
    event.preventDefault();
    var email = document.querySelector("#signupUser").value;

    var password = document.querySelector("#signupPassword").value;
    
    if (email && password) {
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ email, password, name:"John Doe" }),
          headers: { 'Content-Type': 'application/json' },
        });

    const results = await response.json();
    console.log(results);

        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in.');
        }
      }
    
});
