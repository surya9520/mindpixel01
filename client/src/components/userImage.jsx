import { Box } from "@mui/material";
import helper from "helper";

const UserImage = ({ image, size = "60px" }) => {
  const URLL = helper
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={URLL+`/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
