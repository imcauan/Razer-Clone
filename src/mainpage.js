const shopNowBtn = document.getElementById('shopNowBtn')

const shopBtnClick = () => {
 shopNowBtn.addEventListener('click', (ev) => {
  ev.preventDefault()
  alert(`Not done yet.`)
})
}


export {shopBtnClick}