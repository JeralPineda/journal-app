import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';

export const RegiterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              //
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              //
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              //
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid
            //
            container
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Grid item xs={12}>
              <Button ///
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid
            //
            container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
