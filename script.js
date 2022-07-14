const items = [
  'Name: Sandra Nguyen, Mail: ajs@gamil.com, City: Ottawa, Province: ON',
  'Name: Chris Phan, Mail: ahdjdj@gamil.com, City: Ottawa, Province: ON',
  'Name: Jason Tran, Mail: aijtijir@gamil.com, City: Ottawa, Province: ON'
]

const $form = document.getElementById('form')
const $item = document.getElementById('item')
const $list = document.getElementById('list')


function buildList () {
  const list = []
  
  for (const item of items) {
    list.push(`<li class="list-group-item">${item}</li>`)
 }
  
 $list.innerHTML = list.join('')
}

buildList()
$list.addEventListener('click',handleItemClick)


$list.addEventListener('click', function (e) {
  
})
const $addButton = document.getElementById('addButton')
$addButton.addEventListener('click',addContact)
$form.addEventListener('click', function (e) {
  e.preventDefault()
  items.push($item.value)
  $form.reset()
  buildList()
})





