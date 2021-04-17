//Menu
const ulList = document.querySelectorAll('.ul');
const ulHeader = document.querySelectorAll('.menu h4')
const arrowList = document.querySelectorAll('.arrow');
const decompressList = (list) => {
  list.classList.contains('compressed')
  ? list.classList.remove('compressed')
  : list.classList.add('compressed')
}
const rotateArrow = (arrow) => {
  arrow.classList.contains('rot')
  ? arrow.classList.remove('rot')
  : arrow.classList.add('rot')
}
ulHeader.forEach(ul => {
  ul.addEventListener('click', function() { 
    if(ul === ulHeader[0]) {
      decompressList(ulList[0])
      rotateArrow(arrowList[0])
    } if(ul === ulHeader[1]) {
      decompressList(ulList[1])
      rotateArrow(arrowList[1])
    } if(ul === ulHeader[2]) {
      decompressList(ulList[2])
      rotateArrow(arrowList[2])
    }
    
  })
})
