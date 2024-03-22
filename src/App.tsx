import './App.css'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// ** React Imports
import { Fragment } from 'react'

// ** React Imports

// ** MUI Imports
import { Pagination } from '@mui/material'

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

      <Fragment>
        <div className='demo-space-y'>
          <Pagination count={10} />
          <Pagination count={10} color='primary' />
          <Pagination count={10} color='secondary' />
        </div>
      </Fragment>
    </>
  )
}

export default App
