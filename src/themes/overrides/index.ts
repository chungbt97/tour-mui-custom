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
import MuiBackdrop from './backdrop'
import MuiBreadcrumb from './breadcrumbs'
import MuiTypography from './typography'

const Overrides = (settings: Settings) => {
  const alert = MuiAlert()
  const accordion = MuiAccordion()
  const avatar = MuiAvatar()
  const backdrop = MuiBackdrop()
  const button = MuiButton()
  const breadcrumb = MuiBreadcrumb()

  return Object.assign(accordion, alert, avatar, backdrop, breadcrumb, button, MuiTypography)
}

console.log(Overrides)

export default Overrides
