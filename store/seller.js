export const state = () => ({
  name: 'Danilo Ramon',
  email: 'daniloras84@gmail.com',
  phone: '11954426650'
})

export const mutations = {
  setName (state, value) {
    state.name = value
  },
  setEmail (state, value) {
    state.email = value
  },
  setPhone (state, value) {
    state.phone = value
  }
}
