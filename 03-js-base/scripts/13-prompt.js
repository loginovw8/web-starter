function showGreeting(inputName) {
  let message = 'Hello, ' + inputName;
  return message;
}

let username = prompt("Please enter your name", "Your name");

if (username != null) {
  alert(showGreeting(username));
}

