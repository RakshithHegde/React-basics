import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID b8CnbFIPVn-LDyLjtjbCpoMgtNDtBBFwp_NIHprR3uQ",
  },
});
