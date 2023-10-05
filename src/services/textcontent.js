import axios from 'axios'
const baseUrl = '/api/texts'

const get = (book, section) => {
    const request = axios.get(`${baseUrl}/${book}/${section}`)
    return request.then(response => response.data)
}