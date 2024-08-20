import { Box, Typography, useTheme, useMediaQuery, Card, CardContent } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <Box width={isNonMobileScreens ? "23.2%" : isTablet ? "31%" : "79%"}>
          <Typography
            fontWeight="bold"
            fontSize="32px"
            sx={{
              backgroundColor:" #4158D0;",
              backgroundImage:
                "linear-gradient(to right, #30CFD0 0%, #330867 100%);",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            MindPixel
          </Typography>
          <Typography width={isNonMobileScreens ? "30%" : isTablet ? "40%" : "31%"} fontSize="8.54px" mt="-0.60rem" mb="-0.49rem" ml="55%" fontStyle="italic">~ by Surya Joshi</Typography>
        </Box>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to MindPixel, the Social Media for Sociopaths!
        </Typography>
        <Form />
        <Card sx={{ mt: "2rem" }}>
          <CardContent>
            <Typography variant="h6">Demo Login Credentials</Typography>
            <Typography variant="body1" mt="1rem">
              <strong>Username:</strong> jalabi67@gmail.com
            </Typography>
            <Typography variant="body1" mt="0.5rem">
              <strong>Password:</strong> 123456
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default LoginPage;
