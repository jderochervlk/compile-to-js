const info = jest.spyOn(console, 'info')
    .mockImplementation(() => {})

test('logs status to console', () => {
    require('./index')
    expect(info).toHaveBeenCalledWith("Project is working as expected...")
})