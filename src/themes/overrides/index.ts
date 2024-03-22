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
import MuiCard from './card'
import MuiCheckbox from './checkbox'
import MuiChip from './chip'
import MuiDataGrid from './dataGrid'
import MuiDialog from './dialog'
import MuiDivider from './divider'
import MuiInput from './input'
import MuiLink from './link'
import MuiList from './list'
import MuiMenu from './menu'

import MuiPagination from './pagination'
import MuiPaper from './paper'
import MuiPopover from './popover'
import MuiProgress from './progress'
import MuiRadio from './radio'
import MuiRating from './rating'
import MuiSelect from './select'
import MuiSlider from './slider'
import MuiSnackbar from './snackbar'
import MuiSwitch from './switches'
import MuiTable from './table'
import MuiTabs from './tabs'
import MuiTimeline from './timeline'
import MuiToolTip from './tooltip'
import MuiToggle from './toggleButton'

import MuiTypography from './typography'

const overrides = (settings: Settings) => {
  const { skin } = settings

  const alert = MuiAlert()
  const accordion = MuiAccordion()
  const avatar = MuiAvatar()
  const backdrop = MuiBackdrop()
  const button = MuiButton()
  const breadcrumb = MuiBreadcrumb()
  const cards = MuiCard(skin)
  const checkbox = MuiCheckbox()
  const chip = MuiChip()
  const dataGrid = MuiDataGrid()
  const dialog = MuiDialog(skin)
  const divider = MuiDivider()
  const input = MuiInput()
  const link = MuiLink()
  const list = MuiList()
  const menu = MuiMenu(skin)
  const pagination = MuiPagination()
  const paper = MuiPaper()
  const popover = MuiPopover(skin)
  const progress = MuiProgress()
  const radio = MuiRadio()
  const rating = MuiRating()
  const select = MuiSelect()
  const slider = MuiSlider()
  const snackbar = MuiSnackbar(skin)
  const switches = MuiSwitch()
  const table = MuiTable()
  const tabs = MuiTabs(skin)
  const timeline = MuiTimeline()
  const toggle = MuiToggle()
  const tooltip = MuiToolTip()

  const typograpy = MuiTypography()

  return Object.assign(
    accordion,
    alert,
    avatar,
    backdrop,
    breadcrumb,
    button,
    cards,
    checkbox,
    chip,
    dataGrid,
    dialog,
    divider,
    input,
    link,
    list,
    menu,
    paper,
    pagination,
    popover,
    progress,
    radio,
    rating,
    select,
    slider,
    snackbar,
    switches,
    table,
    tabs,
    timeline,
    toggle,
    tooltip,
    typograpy
  )
}

export default overrides
