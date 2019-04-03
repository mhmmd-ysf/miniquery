
window.onload = function () {
  let satu = SweetSelector('#satu')
  let dua = SweetSelector('.dua')
  let tiga = SweetSelector('h3')
  satu.onclick = () => {console.log('1')}
  for(let i = 0; i < dua.length; i++) {
    dua[i].onclick = () => {console.log('2')}
  }
  for(let i = 0; i < tiga.length; i++) {
    tiga[i].onclick = () => {console.log('3')}
  }
  DOM.hide('#satu')
  DOM.show('#satu')
  DOM.addClass('#satu', 'satusatu')
}

function SweetSelector(input) {
    let [id, ...selectorname] = input
    selectorname = selectorname.join('')
    switch(id) {
      case '#': return document.getElementById(selectorname)
      case '.': return document.getElementsByClassName(selectorname)
      default: return document.getElementsByTagName(input)
    }
}

class DOM {
  static hide(input) {
    let element = SweetSelector(input)
    element.style.display = 'none'
  }
  static show(input) {
    let element = SweetSelector(input)
    element.style.display = 'block'
  }
  static addClass(input, kelas) {
    let element = SweetSelector(input)
    element.classList.add(kelas)
  }
  static removeClass(input, kelas) {
    let element = SweetSelector(input)
    element.classList.remove(kelas)
  }
}

class EventDispatcher {
  static on(select, event, cb) {
    if(select.length > 1) {
      for(let i = 0; i < select.length; i++) {
        select[i].addEventListener(event, cb)
      }
    } else {
      select.addEventListener(event, cb)
    }
  }
  static trigger(select, event) {
    let evt = new Event(event)
    select.dispatchEvent(evt)
  }
}