import Typography from '@mui/material/Typography'

function MUITypography() {
  return (
    <>
    {/* variant */}
    <Typography variant="h1" color="initial">I am h1</Typography>
    <Typography variant="h2" color="initial">I am h2</Typography>
    <Typography variant="h3" color="initial">I am H3</Typography>
    <Typography variant="h4" color="initial">I am h4</Typography>
    <Typography variant="h5" color="initial">I am h5</Typography>
    <Typography variant="h6" color="initial" gutterBottom>I am h6</Typography>

    {/* subtitle */}
    <Typography variant='subtitle1'>subtitle1</Typography>
    <Typography variant="subtitle2" gutterBottom>subtitle2</Typography>

    {/* caption */}
    <Typography variant="caption">caption</Typography>

    </>
  )
}

export default MUITypography;
