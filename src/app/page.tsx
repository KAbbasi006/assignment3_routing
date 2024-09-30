'use client'
import { useRouter } from 'next/navigation'

function Home() {
  const route = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '300%',
          marginTop: '20px'
        }}>This is Home Page</h1><br /><br />
      <button onClick={() => route.push('./navbar')}>Go to Navbar</button><br />
      <button onClick={() => route.push('./about')}>Go to About</button><br />
      <button onClick={() => route.push('./contact-us')}>Go to Contact us</button><br />
      <button onClick={() => route.push('./footer')}>Go to Footer</button>
    </div>
  );
}

export default Home
