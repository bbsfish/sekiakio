const scrllTarget = document.querySelectorAll('a[href^="#"]');
scrllTarget.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    // get value of linked index
    let href = element.getAttribute('href');
    let linked_id = document.getElementById(href.replace('#', ''));

    // get target position
    const rect = linked_id.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const position = rect + offset;

    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  });
});