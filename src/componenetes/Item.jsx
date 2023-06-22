import { useContext } from "react";
import { CarContext } from "../contex/compras";
import { Box, Button, Typography } from "@mui/material";

export const Item = ({ prod }) => {
  const [car, setCar] = useContext(CarContext);

  const AgregarProducto = () => {
    const item = car.find((it) => it.id === prod.id);
    if (item) {
      setCar(
        car.map((it) => {
          if (it.id === item.id) {
            return {
              ...it,
              quantity: item.quantity + 1,
              nombre,
            };
          }
          return it;
        })
      );
    } else {
      setCar([...car, { ...prod, quantity: 1 }]);
    }
  };
  const removeItem = (id) => {
    const item = car.find((it) => it.id === prod.id);
    if (item) {
      setCar(
        car.map((it) => {
          if (it.id === item.id) {
            return {
              ...it,
              quantity: item.quantity - 1,
            };
          }
          return it;
        })
      );
    } else {
      setCar([...car, { ...prod, quantity: 1 }]);
    }
  };
  const { id, nombre, precio, imagen, descripcion, categoria } = prod;

  const getQuantity = (id) => {
    return car.find((item) => item.id === id)?.quantity || 0;
  };
  const quantityPerItem = getQuantity(id);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "13rem",
        height: "22rem",
        borderRadius: "8px",
        backgroundColor: "#7e5686",
        marginTop: "20px",
        marginLeft: "10px",
        p: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px",
          width: "12rem",
          height: "21rem",
          p: "5px",
          fontFamily: "sans-serif",
          fontSize: "4mm",
          fontWeight: "300",
          backgroundColor: "#fff",
          borderRadius: "6px",
        }}
      >
        {quantityPerItem > 0 && <div>{quantityPerItem} </div>}
        <div>{nombre} </div>
        <div>
          <img src={imagen} width="100px" height="100px"></img>
        </div>
        <div>${precio} </div>
        <div>{descripcion} </div>
        <div>Categoria:{categoria}</div>
        {quantityPerItem === 0 ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => AgregarProducto()}
          >
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "3mm" }}>
              Agregar
            </Typography>
          </Button>
        ) : (
          <Button onClick={() => AgregarProducto()}>
            <Typography
              color="secondary"
              variant="contained"
              sx={{ fontSize: "4mm" }}
            >
              Agregar
            </Typography>
          </Button>
        )}
        {quantityPerItem > 0 && (
          <Button onClick={() => removeItem()}>
            <Typography
              color="secondary"
              variant="contained"
              sx={{ fontSize: "4mm" }}
            >
              Disminuir Cantidad
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};
