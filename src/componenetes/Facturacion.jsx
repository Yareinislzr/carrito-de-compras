import { useContext } from "react";
import { CarContext } from "../contex/compras";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Facturacion = () => {
  const [car, setCar] = useContext(CarContext);

  const quantity = car.reduce((acc, curr) => {
    acc + curr.quantity;
  }, 0);

  const totalPrecio = car.reduce(
    (acc, curr) => acc + curr.quantity * curr.precio,
    0
  );

  console.log(car);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "48px",
          backgroundColor: "#7e5686",
        }}
      >
        <Link to="/">
          <span>Tienda</span>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "120px",
          height: "300px",
          position: "fixed",
          overflowY: "scroll",
        }}
      >
        {car.map((item) => {
          return (
            <div key={item.id}>
              {item.quantity > 0 && <div>{item.nombre} </div>}{" "}
              {item.quantity != 0 ? item.quantity : ""}{" "}
              {item.quantity > 0 && <div>{item.precio * item.quantity} </div>}
            </div>
          );
        })}
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "5mm",
            fontWeight: "300",
          }}
        >
          Productos en el Carrito {quantity}
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "5mm",
            fontWeight: "600",
          }}
        >
          Total:${totalPrecio}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => alert("En construccion")}
        >
          Pagar
        </Button>
      </Box>
    </>
  );
};
