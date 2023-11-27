module.exports = {
  useState: () => {
    return {
      state: 'state',
      setState: () => {}
    }
  }
}