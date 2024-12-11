import axios from 'axios';
import { productBaseURL } from '../constants/base';

const BASE_URL = productBaseURL;

class ApiService {
  constructor() {
    // Axios instance create karna with default configurations
    this.api = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Interceptors ko handle karna (Optional)
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('jwtToken'); // JWT token agar available ho
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // GET request
  async get(endpoint, params = {}) {
    try {
      const response = await this.api.get(endpoint, { params });
      return response.data; // Return data directly
    } catch (error) {
      console.error("GET request error:", error);
      throw error.response ? error.response.data : new Error('Network Error');
    }
  }

  // POST request
  async post(endpoint, data) {
    try {
      const response = await this.api.post(endpoint, data);
      return response.data; // Return data directly
    } catch (error) {
      console.error("POST request error:", error);
      throw error.response ? error.response.data : new Error('Network Error');
    }
  }

  // PUT request
  async put(endpoint, data) {
    try {
      const response = await this.api.put(endpoint, data);
      return response.data; // Return data directly
    } catch (error) {
      console.error("PUT request error:", error);
      throw error.response ? error.response.data : new Error('Network Error');
    }
  }

  // DELETE request
  async delete(endpoint) {
    try {
      const response = await this.api.delete(endpoint);
      return response.data; // Return data directly
    } catch (error) {
      console.error("DELETE request error:", error);
      throw error.response ? error.response.data : new Error('Network Error');
    }
  }
}

// Export instance of ApiService
const apiService = new ApiService();
export default apiService;



