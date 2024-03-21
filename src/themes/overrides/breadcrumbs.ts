// ** Type Import
import { OwnerStateThemeType } from './'

const Breadcrumbs = () => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& a': {
            textDecoration: 'none',
            color: theme.palette.text.secondary
          },
          '& a.active': {
            textDecoration: 'none',
            color: theme.palette.info.main
          }
        }),
        li: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.secondary,
          '& .MuiTypography-root': {
            // color: 'inherit'
          }
        })
      }
    }
  }
}

export default Breadcrumbs
