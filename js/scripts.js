window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value;

    document.querySelector("span#nameGenerator").innerText = nameInput;

    document.querySelector("div#story").removeAttribute("class");

    // event.preventDefault();
  };
};
