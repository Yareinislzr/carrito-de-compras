import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { CarContext } from "../contex/compras";
import { Box, Typography } from "@mui/material";
export const Nav = () => {
  const [car] = useContext(CarContext);
  const quantity = car.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        backgroundColor: "#7e5686",
        width: "100%",
        position: "fixed",
      }}
    >
      <Box
        sx={{
          width: "50%",
          color: "white",
        }}
      >
        <h3>Total de Productos Agregados: {quantity}</h3>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { sx: "none", md: "10px" },
          width: "50%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            color: "black",
            fontWeight: "600",
          }}
        >
          <Link to="/">
            <span>Tienda</span>
          </Link>
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            color: "black",
            fontWeight: "600",
          }}
        >
          <Link to="/Facturacion">
            <span>Facturacion</span>
          </Link>
        </Typography>
      </Box>
      <Outlet />
    </Box>
  );
};
