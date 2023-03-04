const form = document.querySelector('.form__comment');
const commentsDiv = document.getElementById('show__comments');

button = document.getElementById("submit");
button.addEventListener("click", function(event){
  event.preventDefault();
  const name = document.getElementById('name').value;
  const link = document.getElementById('link').value;
  const comment = document.getElementById('comment-field').value;

 const commentElem = document.createElement('div');
  commentElem.innerHTML = `
    <p>${name}</p>
    <p>${link}</p>
    <p>${comment}</p>
  `;
commentsDiv.appendChild(commentElem);});
