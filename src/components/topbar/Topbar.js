import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// For the avator to the left side
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { LanguageOutlined, NotificationsNone } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { BadgeUnstyled, badgeUnstyledClasses } from "@mui/base";

//Here is some styled componenet
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// styled badge from Material UI
const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: red;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  & .${badgeUnstyledClasses.invisible} {
    display: none;
  }
`;

export default function Topbar() {
  return (
    <Item style={{ position: "sticky", top: 0, zIndex: 999 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <h2>My Admin</h2>
          </Grid>
          <Grid
            item
            xs={9}
            align="right"
            sx={{ paddingRight: 2, paddingTop: 2 }}
          >
            <StyledBadge badgeContent={4} max={3} showZero>
              <NotificationsNone />
            </StyledBadge>

            <LanguageOutlined sx={{ paddingRight: 2, paddingLeft: 2 }} />
            <StyledBadge badgeContent={9} max={8} showZero>
              <SettingsIcon />
            </StyledBadge>
          </Grid>
          <Grid xs={1} item>
            <Avatar
              sx={{
                bgcolor: deepPurple[500],
                marginBottom: 1,
                marginLeft: 1,
              }}
            >
              BZ
            </Avatar>
          </Grid>
        </Grid>
      </Box>
    </Item>
  );
}
