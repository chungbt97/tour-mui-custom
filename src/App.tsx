import './App.css'
import reactLogo from './assets/react.svg'
import Breadcrumbs from './components/breadcrumbs'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Breadcrumbs
        items={[
          {
            label: 'Home',
            href: '/'
          },
          {
            label: 'Patient',
            href: '/patient'
          },
          {
            label: 'Detail',
            href: '/detail'
          }
        ]}
      />
    </>
  )
}

export default App
