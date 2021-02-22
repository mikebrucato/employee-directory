import axios from "axios"

export default {
    // random user API request with axios
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}