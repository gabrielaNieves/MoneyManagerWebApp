import { Box, Stack } from "@mui/material";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserCard from "./components/UserCard";

function App() {
  return (
    <Box>
      <Topbar/>
      <Stack direction="row" spacing={2}>
      <Sidebar/>
      <Content/>
      <UserCard/>
      </Stack>
    </Box>
  );
}

export default App;
