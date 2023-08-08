;(function () {
  console.info('Project is working as expected...')

  const targetEl = document.getElementById('content')

  fetch('https://baconipsum.com/api/?type=meat-and-filler')
    .then(res => res.json())
    .then(strings => strings.map(str => `<p>${str}</p>`).join('<br />'))
    .then(content => (targetEl.innerHTML = content))
    .catch(console.error)
})()
