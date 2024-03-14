const axios = require("axios");
// Create a new instance of Axios with custom config
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Disables certificate verification
  }),
});

export default axiosInstance;
