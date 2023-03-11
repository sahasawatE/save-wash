window.addEventListener('scroll', function () {
  const page1 = this.document.getElementById('sw-page')
  const page2 = this.document.getElementById('htu-page')
  const page3 = this.document.getElementById('n-page')
  const items = document.getElementsByClassName('fev-item')

  if (this.scrollY - page1.clientHeight < 0) {
    document.getElementsByClassName('mobile-title')[0].innerHTML = "Save Wash"
    items[0].classList.add('selected');
    items[1].classList.remove('selected');
    items[2].classList.remove('selected');
    items[3].classList.remove('selected');
    items[4].classList.add('selected');
    items[5].classList.remove('selected');
    items[6].classList.remove('selected');
    items[7].classList.remove('selected');
  }
  else if (this.scrollY - page1.clientHeight >= 0 && this.scrollY - (page2.clientHeight + page1.clientHeight) < 0) {
    document.getElementsByClassName('mobile-title')[0].innerHTML = "บริการและผลิตภัณฑ์"
    items[0].classList.remove('selected');
    items[1].classList.add('selected');
    items[2].classList.remove('selected');
    items[3].classList.remove('selected');
    items[4].classList.remove('selected');
    items[5].classList.add('selected');
    items[6].classList.remove('selected');
    items[7].classList.remove('selected');
  }
  else if (this.scrollY - page1.clientHeight >= 0 && this.scrollY - (page2.clientHeight + page1.clientHeight) >= 0 && this.scrollY - (page3.clientHeight + page2.clientHeight + page1.clientHeight) < 0) {
    document.getElementsByClassName('mobile-title')[0].innerHTML = "การเดินทาง"
    items[0].classList.remove('selected');
    items[1].classList.remove('selected');
    items[2].classList.add('selected');
    items[3].classList.remove('selected');
    items[4].classList.remove('selected');
    items[5].classList.remove('selected');
    items[6].classList.add('selected');
    items[7].classList.remove('selected');
  }
  else {
    document.getElementsByClassName('mobile-title')[0].innerHTML = "ติดต่อ"
    items[0].classList.remove('selected');
    items[1].classList.remove('selected');
    items[2].classList.remove('selected');
    items[3].classList.add('selected');
    items[4].classList.remove('selected');
    items[5].classList.remove('selected');
    items[6].classList.remove('selected');
    items[7].classList.add('selected');
  }
})

function closeSideBar() {
  const open_btn = document.getElementsByClassName('close')
  const sidebar = document.getElementsByClassName('sidebar')
  open_btn[0].style.display = 'flex'
  sidebar[0].style.width = '0'
  document.documentElement.style.overflow = 'auto'
}

function openSideBar() {
  const open_btn = document.getElementsByClassName('close')
  const sidebar = document.getElementsByClassName('sidebar')
  open_btn[0].style.display = 'none'
  sidebar[0].style.width = '100vw'
  document.documentElement.style.overflow = 'hidden'
}

function expandPanel(i) {
  const items = document.getElementsByClassName('fev-item')
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    if (i === 0 || i === 4) document.getElementById('sw-page').scrollIntoView({ behavior: 'smooth' })
    if (i === 1 || i === 5) document.getElementById('htu-page').scrollIntoView({ behavior: 'smooth' })
    if (i === 2 || i === 6) document.getElementById('n-page').scrollIntoView({ behavior: 'smooth' })
    if (i === 3 || i === 7) document.getElementById('c-page').scrollIntoView({ behavior: 'smooth' })
    if (i < 4) document.getElementsByClassName('mobile-title')[0].innerHTML = items[i].innerHTML
    if (i === index) item.classList.add('selected')
    else item.classList.remove('selected')
  }
  if (i < 4) closeSideBar()
}

function openModal(elementId = "") {
  const modal = document.getElementById(elementId)
  modal.style.opacity = '1'
  modal.style.zIndex = '1000'
  document.documentElement.style.overflow = 'hidden'
}

function closeModal(elementId = "") {
  const modal = document.getElementById(elementId)
  modal.style.opacity = '0'
  modal.style.zIndex = '-1'
  document.documentElement.style.overflow = 'auto'
}