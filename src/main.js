document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]')

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    
    button.addEventListener('click', function(buttonClick) {
      escondeTodasAbas()
      removerBotaoAtivo()

      buttonClick.target.classList.add('shows__tabs__button--is-active')
      const abaAlvo = buttonClick.target.dataset.tabButton
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)

      aba.classList.add('shows__list--is-active')
    })
  }
})

function removerBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]')

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.classList.remove('shows__tabs__button--is-active')
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]')

  for (let i = 0; i < tabsContainer.length; i++) {
    const tab = tabsContainer[i]
    
    tab.classList.remove('shows__list--is-active')
  }
}