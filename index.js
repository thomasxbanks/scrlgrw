window.onscroll = () => {
  let fontSize = (window.pageYOffset < 2000) ? (10 + (window.pageYOffset / 100)) : 20
  if (fontSize <= 20) {
    document.querySelector('main').style.fontSize = `${fontSize}vw`
  }
}
