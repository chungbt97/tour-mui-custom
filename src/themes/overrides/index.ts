// ** MUI Imports
import { Theme } from '@mui/material/styles'
import { ComponentsPropsList } from '@mui/material'

// ** Type Import
import { Settings } from '@contexts/settingsContext'

export type OwnerStateThemeType = {
  theme: Theme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}

// ** Overrides Imports
import MuiAccordion from './accordion'
import MuiAlert from './alerts'
import MuiAvatar from './avatars'

import MuiButton from './button'
import MuiTypography from './typography'

const Overrides = (settings: Settings) => {
  const button = MuiButton()
  const accordion = MuiAccordion()
  const alert = MuiAlert()
  const avatar = MuiAvatar()
  return Object.assign(accordion, alert, avatar, button, MuiTypography)
}

console.log(Overrides)

export default Overrides
