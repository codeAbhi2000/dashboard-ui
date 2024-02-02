import React,{useState} from "react";
import {
  Box,
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
import GoogleIgon from "../assets/icons8-google-32.png";
import AppleIcon from "../assets/icons8-apple-32.png";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
    const [user, setUser] = useState([]);

  
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        setUser(codeResponse);
        console.log(codeResponse);
      },
      onError: (error) => console.log("Login Failed:", error),
    });
  

  return (
    <Stack
      direction={{ sm: "row", xs: "column" }}
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          height: { sm: "100vh", xs: "10%" },
          backgroundColor: " #605BFF",
        }}
        className="clipPathBox"
        p={2}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          direction={{ sm: "column", xs: "row" }}
        >
          <Box
            sx={{
              width: { xs: "25%", sm: "12%" },
              height: { xs: "100%", sm: "20%" },
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
            >
              <ShowChartIcon sx={{ fontSize: 40 }} />
            </Stack>
          </Box>

          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700 }}
              color={"white"}
              mr={5}
            >
              BASE
            </Typography>
          </Stack>
          <Stack
            width={"100%"}
            height={"20vh"}
            justifyContent={"center"}
            p={3}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Stack
              width={"30%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              direction={"row"}
              position={"relative"}
              left={"28%"}
            >
              <Box>
                <GitHubIcon sx={{ color: "white" }} fontSize="large" />
              </Box>
              <Box>
                <LinkedInIcon sx={{ color: "white" }} fontSize="large" />
              </Box>
              <Box>
                <XIcon sx={{ color: "white" }} fontSize="large" />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          height: { sm: "100vh", xs: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Stack
          spacing={4}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          width={"100%"}
          p={2}
        >
          <Stack spacing={2} width={{ sm: "80%", xs: "100%" }}>
            <Stack justifyContent={"left"} width={"100%"}>
              <Typography variant="h4" fontWeight={"600"}>
                Sign In
              </Typography>
              <Typography variant="subtitle1">
                Sign in to your account
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              alignItems={"center"}
              justifyContent={"space-around"}
              width={"100%"}
              direction={"row"}
            >
              <Box>
                <Button startIcon={<img src={GoogleIgon} alt="google" />} onClick={()=>login()}>
                  Sign in with Google
                </Button>
              </Box>
              <Box>
                <Button startIcon={<img src={AppleIcon} alt="apple" />}>
                  Sign in with Apple Id
                </Button>
              </Box>
            </Stack>
            <Stack spacing={3} alignItems={"center"} width={"100%"}>
              <TextField
                variant="outlined"
                type="email"
                name="name"
                label="Email"
                fullWidth
              />
              <TextField
                variant="outlined"
                type="password"
                name="password"
                label="Password"
                fullWidth
              />
            </Stack>
            <FormHelperText>
              <Link style={{ textDecoration: "none", color: "blue" }}>
                Forgot password?
              </Link>
            </FormHelperText>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              spacing={4}
              mt={3}
            >
              <Button variant="contained" fullWidth>
                Sign in
              </Button>
              <FormHelperText>
                Don't have a account?{" "}
                <Link style={{ textDecoration: "none", color: "blue" }}>
                  Register here
                </Link>
              </FormHelperText>
            </Stack>
            <Stack
              display={{ xs: "flex", sm: "none" }}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack
                spacing={2}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"30%"}
                direction={"row"}
                mt={4}
              >
                <Box>
                  <GitHubIcon sx={{ color: "grey" }} fontSize="large" />
                </Box>
                <Box>
                  <LinkedInIcon sx={{ color: "grey" }} fontSize="large" />
                </Box>
                <Box>
                  <XIcon sx={{ color: "grey" }} fontSize="large" />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Login;
