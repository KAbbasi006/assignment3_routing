'use client'
import { useRouter } from 'next/navigation'
function Footer() {
  const route = useRouter()
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: 'purple',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <button onClick={() => route.push('./')}>Go to Home Page</button><br /><br />
        <button onClick={() => route.push('./navbar')}>Go to Navbar</button><br /><br />
        <button onClick={() => route.push('./about')}>Go to About</button><br /><br />
        <button onClick={() => route.push('./contact-us')}>Go to Contact us</button>  </div><br /><br />
      <h1
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '300%',
          marginBottom: '20px',
          textAlign: 'center',
        }}>I am Footer</h1>
    </div>
  );
}
export default Footer
