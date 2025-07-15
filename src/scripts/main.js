const pushNotification = (posTop, posRight, title, description, type) => {
  const blockType = document.createElement('section');

  blockType.style.position = `absolute`;
  blockType.style.top = `${posTop}px`;
  blockType.style.right = `${posRight}px`;
  blockType.classList.add(`notification`);
  blockType.classList.add(`${type}`);

  document.querySelector('body').append(blockType);

  const titleH2 = document.createElement('h2');

  titleH2.classList.add('title');
  titleH2.textContent = title;
  blockType.append(titleH2);

  const descriptionP = document.createElement('p');

  descriptionP.textContent = description;
  blockType.append(descriptionP);

  // setTimeout(() => {
  //   blockType.style.display = 'none';
  // }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
