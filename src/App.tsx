import { Alert, Avatar, Box, Button, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Icon from '@components/icon'

function App() {
  const [count, setCount] = useState(0)

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
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div className='demo-space-x'>
          <Button variant='contained'>Primary</Button>
          <Button variant='outlined'>Primary</Button>
          <Button variant='outlined' disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon icon='bx:chevron-down' />}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>
              Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
              Topping soufflé tart sweet croissant.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            id='panel-header-2'
            aria-controls='panel-content-2'
            expandIcon={<Icon icon='bx:chevron-down' />}
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>
              Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
              pudding cheesecake pie ice cream.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            id='panel-header-3'
            aria-controls='panel-content-3'
            expandIcon={<Icon icon='bx:chevron-down' />}
          >
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>
              Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
              dessert sweet pastry powder.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Box className='my-5' sx={{ display: 'flex' }}>
        <Avatar src='/images/7.png' alt='Victor Anderson' />
      </Box>

      <div className='demo-space-y'>
        <Alert severity='error'>This is an error alert — check it out!</Alert>
        <Alert severity='warning'>This is an warning alert — check it out!</Alert>
        <Alert severity='info'>This is an info alert — check it out!</Alert>
        <Alert severity='success'>This is an success alert — check it out!</Alert>
      </div>

      <div className='demo-space-y'>
        <Typography variant='h1' gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant='h2' gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant='h3' gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant='h4' gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant='h5' gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant='h6' gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant='body1' gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='body2' gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='button' display='block' gutterBottom>
          button text
        </Typography>
        <Typography variant='caption' display='block' gutterBottom>
          caption text
        </Typography>
        <Typography variant='overline' display='block' gutterBottom>
          overline text
        </Typography>
      </div>
    </>
  )
}

export default App
