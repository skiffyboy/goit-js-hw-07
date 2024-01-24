const items = document.querySelectorAll(".item")
console.log( `Number of categories: ${items.length}`);

const itemForEach = items.forEach(item =>{
  const categoryItem = item.querySelector('h2').textContent;
  const countItem = item.querySelectorAll('li').length
  console.log(`Category: ${categoryItem}`);
  console.log(`Elements: ${countItem}`);
})