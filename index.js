function changeName(name) {
  if (name.value.trim() === '')
  return 'username'
  else
	return name.value.trim().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
}
  function checkSpam(comment) {
    return comment.replace(/viagra|XXX/gi, '***');
  }
  const ava = [
    '/images/ava1.jpg',
    '/images/ava2.jpg',
    '/images/ava3.jpg',
    '/images/ava4.jpg',
    '/images/ava5.jpg',
    '/images/ava6.jpg'
  ];

  function checkLink(link){
    if(link === '') {
      const randomAva = Math.floor(Math.random() * ava.length);
      link = ava[randomAva];}
      return link
  }
  
  const form = document.querySelector('.form__comment');
  const commentsDiv = document.getElementById('show__comments');
  const button = document.getElementById('submit');
  
  button.addEventListener('click', function (event) {
    event.preventDefault();
  
    const name = changeName(document.getElementById('name'));
    const link = checkLink(document.getElementById('link').value);
    const comment = checkSpam(document.getElementById('comment-field').value);
    const commentDate =  new Date();
   
    const commentElem = document.createElement('div');
    commentElem.innerHTML = `
      <p>${name}</p>
      <p><img src="${link}" style ="width: 100px"></p>
      <p>${comment}</p>
      <p>${commentDate}</p>
    `;
    commentsDiv.appendChild(commentElem);

    document.getElementById('name').value = '';
    document.getElementById('link').value = '';
    document.getElementById('comment-field').value = '';
  });
  
  const nameField = document.getElementById('name-field');
  const checkedNo = document.getElementById('answerNo');
  const checkedYes = document.getElementById('answerYes');

  checkedNo.addEventListener('click', function() {
    nameField.style.display = 'none';
  })
  checkedYes.addEventListener('click', function(){
    nameField.style.display = 'block';
  })

  
  
  