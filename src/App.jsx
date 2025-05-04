
import MainPage from './MainPage/MainPage.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState({});

  useEffect ( () => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, []
  )

  return (
    <>

      <MainPage />
    </>
  )
}

export default App
