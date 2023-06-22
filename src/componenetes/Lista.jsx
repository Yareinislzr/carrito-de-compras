import { Item } from "./Item.jsx";
import Data from "../data/Data.json";
import { Facturacion } from "./Facturacion.jsx";
import { Box } from "@mui/material";
export const Lista = () => {
  console.log(Data);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "left" },
            width: { xs: "100%", md: "80%" },
            gap: "5px",
            backgroundColor: "#fff",
            pb: "30px",
            marginTop: "50px",
            padding: "15px",
          }}
        >
          {Data.map((item) => (
            <Item key={item.id} prod={item} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "20%" },
            overflow: "scroll",
          }}
        >
          <Facturacion />
        </Box>
      </Box>
    </>
  );
};
