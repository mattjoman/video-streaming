import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    // Request interceptor (outbound)
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Log outgoing requests
        console.log('🚀 Outgoing Request:', {
          method: config.method?.toUpperCase(),
          url: config.url,
          data: config.data,
          headers: config.headers
        });
        
        // Add base URL if not present
        if (!config.url?.startsWith('http')) {
          config.baseURL = 'http://localhost:3000';
        }
        
        // Add default headers
        if (config.headers) {
          config.headers['Content-Type'] = 'application/json';
        }
        
        return config;
      },
      (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor (inbound)
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        // Log successful responses
        console.log('✅ Incoming Response:', {
          status: response.status,
          url: response.config.url,
          data: response.data
        });
        
        return response;
      },
      (error) => {
        // Log error responses
        console.error('❌ Response Error:', {
          status: error.response?.status,
          url: error.config?.url,
          message: error.response?.data?.message || error.message,
          data: error.response?.data
        });
        
        // Handle specific error cases
        if (error.response?.status === 401) {
          console.log('🔐 Unauthorized - redirecting to login');
          // Handle authentication errors
        }
        
        if (error.response?.status === 500) {
          console.log('💥 Server error - showing error message');
          // Handle server errors
        }
        
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on component unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App 