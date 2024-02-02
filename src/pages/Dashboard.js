import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/icons8-pulse-30.png";
import CloseIcon from "@mui/icons-material/Close";

function Dashboard() {
  const [ToggleSidebar, setToggleSidebar] = useState("none");
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100vh",
        
          display: ToggleSidebar,
          position: "absolute",
          borderRadius: "0 10% 0 0",
          backgroundColor: "white",
          zIndex: 10,
          transition:'all 0.2s ease-in-out'
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          py={3}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#605BFF",
                  borderRadius: "50%",
                }}
              >
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"100%"}
                  height={"100%"}
                >
                  <img src={logo} alt="logo" />
                </Stack>
              </Box>
              <Typography variant="subtitle1">BASE</Typography>
            </Stack>
            <Stack alignItems={'center'} justifyContent={'center'}>
                <IconButton onClick={()=>{
                    setToggleSidebar('none')
                }}>
                    <CloseIcon/>
                </IconButton>
            </Stack>
          </Stack>
          <Stack spacing={4} width={"60%"} mt={2.5}>
            <Link to={"/dashboard/udash"}>
              <Button
                startIcon={<DashboardIcon />}
                sx={{ color: "grey" }}
                className="side-btn"
              >
                Dashboard
              </Button>
            </Link>
            <Link to={"/dashboard/uploads"}>
              <Button
                startIcon={<BarChartIcon />}
                sx={{ color: "grey" }}
                className="side-btn"
              >
                Uploads
              </Button>
            </Link>
            <Link to="/dashboard/invoice">
              <Button
                startIcon={<ReceiptIcon />}
                sx={{ color: "grey" }}
                className="side-btn"
              >
                Invoice
              </Button>
            </Link>
            <Link to={"/dashboard/schedule"}>
              <Button
                startIcon={<EventNoteIcon />}
                sx={{ color: "grey" }}
                className="side-btn"
              >
                Schedule
              </Button>
            </Link>
            <Link to={"/dashboard/calender"}>
              <Button
                startIcon={<CalendarMonthIcon />}
                sx={{ color: "grey" }}
                className="side-btn"
              >
                Calender
              </Button>
            </Link>
            <Link to={"/dashboard/notification"}>
              <Button
                startIcon={<NotificationsIcon />}
                sx={{ color: "grey" }}
                className="side-btn"
              >
                Notification
              </Button>
            </Link>
            <Link to={"/dashboard/settings"}>
              <Button
                startIcon={<SettingsIcon />}
                sx={{ color: "grey" }}
                className="side-btn"
              >
                Settings
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
      <Navbar setToggleSidebar={setToggleSidebar}/>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Stack direction={"row"} height={"100%"}>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              py={3}
            >
              <Stack spacing={4} width={"60%"} mt={2.5}>
                <Link to={"/dashboard/udash"}>
                  <Button
                    startIcon={<DashboardIcon />}
                    sx={{ color: "grey" }}
                    className="side-btn"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link to={"/dashboard/uploads"}>
                  <Button
                    startIcon={<BarChartIcon />}
                    sx={{ color: "grey" }}
                    className="side-btn"
                  >
                    Uploads
                  </Button>
                </Link>
                <Link to="/dashboard/invoice">
                  <Button
                    startIcon={<ReceiptIcon />}
                    sx={{ color: "grey" }}
                    className="side-btn"
                  >
                    Invoice
                  </Button>
                </Link>
                <Link to={"/dashboard/schedule"}>
                  <Button
                    startIcon={<EventNoteIcon />}
                    sx={{ color: "grey" }}
                    className="side-btn"
                  >
                    Schedule
                  </Button>
                </Link>
                <Link to={"/dashboard/calender"}>
                  <Button
                    startIcon={<CalendarMonthIcon />}
                    sx={{ color: "grey" }}
                    className="side-btn"
                  >
                    Calender
                  </Button>
                </Link>
                <Link to={"/dashboard/notification"}>
                  <Button
                    startIcon={<NotificationsIcon />}
                    sx={{ color: "grey" }}
                    className="side-btn"
                  >
                    Notification
                  </Button>
                </Link>
                <Link to={"/dashboard/settings"}>
                  <Button
                    startIcon={<SettingsIcon />}
                    sx={{ color: "grey" }}
                    className="side-btn"
                  >
                    Settings
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              width: { sm: "80%", xs: "100%" },
              height: { sm: "100%", xs: "100vh" },
            }}
          >
            <Outlet />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Dashboard;
