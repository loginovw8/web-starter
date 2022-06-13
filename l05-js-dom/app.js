let button = document.querySelector('.section__button');
let input = document.querySelector('.section__input');
let container = document.querySelector('.section__container');

button.addEventListener('click', () => {
  if (input.value === '') {
    alert('Название не может быть пустым!');
    return;
  }

  let li = document.createElement('li');
  li.classList.add('section__list-item');

  let span = document.createElement('span');
  span.classList.add('section__list-item--text');
  span.innerText = input.value;

  li.appendChild(span);

  let btnDelete = document.createElement('button');
  btnDelete.classList.add('section__list-item--button');
  btnDelete.classList.add('button__color--red');
  btnDelete.innerText = 'Удалить';

  let btnEdit = document.createElement('button');
  btnEdit.classList.add('section__list-item--button');
  btnEdit.classList.add('button__color--green');
  btnEdit.innerText = 'Изменить';

  let inp = document.createElement('input');
  inp.value = input.value;
  inp.style.display = 'none';
  inp.style.flex = '1';
  li.appendChild(inp);

  btnDelete.addEventListener('click', () => {
    li.remove();
  });

  btnEdit.addEventListener('click', () => {
    if (inp.style.display === 'none') {
      span.innerText = '';
      span.style.display = 'none';

      btnDelete.style.display = 'none';

      inp.style.display = 'inline-block';
    } else {
      span.innerText = inp.value;
      span.style.display = 'block';

      btnDelete.style.display = 'inline-block';

      inp.style.display = 'none';
    }
  });

  li.appendChild(btnDelete);
  li.appendChild(btnEdit);

  container.appendChild(li);
});
