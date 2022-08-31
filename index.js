console.log("hello world");

const message = document.querySelector("#message");

const addMovie = (event) => {
  event.preventDefault();
  let inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movie.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
};

const deleteMovie = (event) => {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
    revealMessage();
    event.target.parentNode.remove();
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent} added back!`;
  }
  revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')

    setTimeout(() => message.classList.add('hide'), 1000);
};

document.querySelector("form").addEventListener("submit", addMovie);