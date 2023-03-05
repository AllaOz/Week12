function changeName(name) {
    return name.trim().replace(/\b\w/g, (l) => l.toUpperCase());
  }
  function checkSpam(comment) {
    return comment.replace(/viagra|XXX/gi, '***');
  }
  
  const form = document.querySelector('.form__comment');
  const commentsDiv = document.getElementById('show__comments');
  const button = document.getElementById('submit');
  
  button.addEventListener('click', function (event) {
    event.preventDefault();
  
    const name = changeName(document.getElementById('name').value);
    const link = document.getElementById('link').value;
    const comment = checkSpam(document.getElementById('comment-field').value);
   
    const commentElem = document.createElement('div');
    commentElem.innerHTML = `
      <p>${name}</p>
      <p><img src="${link}"></p>
      <p>${comment}</p>
    `;
    commentsDiv.appendChild(commentElem);
  });
  