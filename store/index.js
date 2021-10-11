export const state = () => ({
  empId: null
})

export const mutations = {
  updateEmpId(state, id) {
    state.empId = id
    console.log('user found', id)
  }
}

export const getters = {
  empId: state => {
    return state.empId
  }
}