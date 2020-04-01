import axios from "axios"

export default function axiosWithAuth() {
  return axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://api.thesneakerdatabase.com/v1",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
}
