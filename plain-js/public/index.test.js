const info = jest.spyOn(console, 'info').mockImplementation(() => {})

global.fetch = i =>
  Promise.resolve({ json: () => Promise.resolve(['one', 'two']) })

let el = {}

document.getElementById = () => el

test('logs status to console and sets html', done => {
  require('./index')

  setTimeout(() => {
    expect(info).toHaveBeenCalledWith('Project is working as expected...')
    expect(el.innerHTML).toEqual('<p>one</p><br /><p>two</p>')
    done()
  }, 100)
})
