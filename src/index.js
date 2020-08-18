import anime from 'animejs';



const animation = () => {
  const containerA = document.getElementById('container-applesA') 
const containerB = document.getElementById('container-applesB')

let leftSideContainerB = () => containerB.offsetLeft - (containerA.offsetLeft + containerA.offsetWidth)




anime({
  targets: [containerA],
  backgroundColor:['#4d44cf','#18edb1'],
  translateX: function () { console.log(leftSideContainerB()) ;  return leftSideContainerB() / 2 },
  duration: 2000,
  easing: 'easeInOutQuad',
  direction:'alternate',
  endDelay: 1000,
  loop: true,
})

anime({
  targets: [containerB],
  backgroundColor:['#af91b8','#18edb1'],
  translateX:function () { return -leftSideContainerB() / 2 },
  duration: 2000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  endDelay: 1000,
  loop: true,
})
}

window.onload = animation()
