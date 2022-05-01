import { Grid } from "@mui/material";

function MainLayout() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <h1>8</h1>
        <h1>8</h1>
        <h1>8</h1>
      </Grid>
      <Grid item xs={4}>
        <h1>4</h1>
        <h1>4</h1>
        <h1>4</h1>
      </Grid>
      <Grid item xs={4}>
        <h1>4</h1>
        <h1>4</h1>
        <h1>4</h1>
      </Grid>
      <Grid item xs={8}>
        <h1>8</h1>
        <h1>4</h1>
        <h1>4</h1>
      </Grid>
      <Grid item xs={8}>
        <h1>8</h1>
        <h1>4</h1>
        <h1>4</h1>
      </Grid>
    </Grid>
  );
}

export default MainLayout;
