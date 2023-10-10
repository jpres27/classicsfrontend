import axios from 'axios'
const baseUrl = '/api/books'

const get = async (book) => {
    const request = await axios.get(`${baseUrl}/${book}`)
    console.log(request)
    return request.data
}

export default { get }