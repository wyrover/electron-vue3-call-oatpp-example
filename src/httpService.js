import axios from 'axios'

const APIURL = 'https://127.0.0.1:8002'

export const httpService = {
  methods: {
    getContacts() {
      return axios.get(`${APIURL}/test`)
    },
    addContact(data) {
      return axios.post(`${APIURL}/contacts`, data)
    },
    editContact(data) {
      return axios.put(`${APIURL}/contacts/${data.id}`, data)
    },
    deleteContact(id) {
      return axios.delete(`${APIURL}/contacts/${id}`)
    }
  }
}
