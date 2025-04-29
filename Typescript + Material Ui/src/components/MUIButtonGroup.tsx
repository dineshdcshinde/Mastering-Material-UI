import {  Button , ButtonGroup} from "@mui/material";

const MUIButtonGroup = ()=>{
    return (
        <>
        <ButtonGroup aria-label="Button Group" orientation="vertical" size="small" disableRipple >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
        </>
    )
}


export default MUIButtonGroup;