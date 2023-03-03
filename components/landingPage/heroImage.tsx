import Box from '@mui/material/Box'

const HeroImage = () => {
  return (
    <Box
      sx={{
        mt: 1,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/blog/images/hero.png)`,
        height: {
          xs: '250px',
          sm: '500px',
        },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        fontFamily: { xs: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'] },
      }}
    >
      <Box
        sx={{
          fontSize: '4rem',
          textAlign: { xs: 'center' },
        }}
      >
        FINANZA PERSONALE
      </Box>
      <Box
        sx={{
          fontStyle: 'italic',
        }}
      >
        il tuo percorso verso l'indipendenza finanziaria
      </Box>
    </Box>
  )
}
export default HeroImage
