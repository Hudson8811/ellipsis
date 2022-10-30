// *********************** VAR

// tab links
const tabLinks = document.querySelectorAll('.tab__link')
const tabsAll = document.querySelectorAll('.dropdown__section_tab')

const tabLinksTotal = tabLinks.length
const tabsAllTotal = tabsAll.length


// *********************** EVENT

for (let i = 0; i < tabLinksTotal; i++) {
  tabLinks[i].addEventListener('click', (e) => {
    e.preventDefault()

    ShowTab(tabLinks[i].dataset.tab);
    
    tabLinks[i].classList.add('active')
  })
}


// *********************** FUNC

function ShowTab(id) {
  for (let i = 0; i < tabsAllTotal; i++) {
    if (tabsAll[i].classList.contains('active')) {
      tabsAll[i].classList.remove('active')
    }

    if (tabsAll[i].id === id) {
      tabsAll[i].classList.add('active')
    }
  }

  for (let i = 0; i < tabLinksTotal; i++) {
    if (tabLinks[i].classList.contains('active')) {
      tabLinks[i].classList.remove('active')
    }
  }
}