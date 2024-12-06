import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com' 
});

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelTokenSource, setCancelTokenSource] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    setCancelTokenSource(source);

    return () => {
      source.cancel('Component unmounted'); 
    };
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      // Introduce an artificial delay for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds

      const response = await api.get('/posts', {
        cancelToken: cancelTokenSource.token,
      });
      setData(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.error('Error fetching data:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  const cancelRequest = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Request canceled by user');
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      <button onClick={cancelRequest} disabled={!loading}>
        Cancel
      </button>

      {loading && <p>Fetching data...</p>} {/* Loading indicator */}

      {data && (
        <div>
          <h2>Post Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;