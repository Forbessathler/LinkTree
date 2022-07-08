function changeColor() {
  const body = document.getElementsByTagName(`body`)[0]
  const button1 = document.getElementById(`button1`)
  const button2 = document.getElementById(`button2`)

  if (body.className) {
    body.className = ``
    button1.style.display = `block`
    button2.style.display = `none`
  } else {
    body.className = `dark-blue`
    button1.style.display = `none`
    button2.style.display = `block`
  }
  
}
