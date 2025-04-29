import { Button, Stack } from "@mui/material"



const MUIButton = ()=>{
    return (
        <>
        <Stack gap={4}>
            {/* button Variant */}
        <Stack direction="row" gap={2}>
            <Button variant="contained">contained</Button>       
            <Button variant="outlined">outlined</Button>       
            <Button variant="text">text</Button>       
        </Stack>

{/* color's */}
        <Stack direction="row" gap={2}>
            <Button variant="contained" color="primary">
              Primary
            </Button>

            <Button variant="contained" color="secondary">
              secondary
            </Button>

            <Button variant="contained" color="warning">
              warning
            </Button>

            <Button variant="contained" color="error">
              error
            </Button>

            <Button variant="contained" color="info">
              info
            </Button>

            <Button variant="contained" color="inherit">
              inherit
            </Button>

            {/* Custom color */}
            <Button variant="contained" sx={{backgroundColor:"red"}}>
              Custom Color
            </Button>



        </Stack>


        </Stack>
        </>
    )
}

export default MUIButton