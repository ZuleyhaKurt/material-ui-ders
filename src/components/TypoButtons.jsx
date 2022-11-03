import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button  from "@mui/material/Button";
import  Box  from "@mui/system/Box";

const TypoButtons = () => {
  return(
    <>
    <Container maxWidth="md">
  <Typography variant="h1" component="h6" align="center" mt={4} color="secondary">
    MUI typgraphy
  </Typography>

  <Typography variant="body2"   mt={4} align="justify" sx={{background:"lightgreen", color:"#eee",fontSize:"1.6rem"}}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia iste sed commodi nihil nesciunt exercitationem necessitatibus eveniet vitae ad.
  </Typography>

  <Typography variant="button" sx={{display:"inline-block",marginTop:"2rem"}}  >
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit magni, totam consectetur porro facere deleniti laudantium quaerat laborum assumenda at impedit quo quasi quod eos perferendis perspiciatis deserunt eaque blanditiis.
  </Typography>


    </Container>;
      

    <Container>
  <Box sx={{display:"flex", flexDirection:"column", gap:"0.5rem",  alignItems:"center"}}>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Box>
    </Container>
    </>
    

  
  )
};

export default TypoButtons;
