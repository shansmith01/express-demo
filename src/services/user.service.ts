const createUser = async (id: string) => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: 'John Doe' })
    }, 300)
  })
  return myPromise
}

export default createUser
