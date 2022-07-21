import { Box, Stack } from "@mui/material";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserCard from "./components/UserCard";
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Topbar/>
      <Stack direction="row" spacing={0}>
      <Sidebar/>
      <Content/>
      <UserCard/>
      </Stack>
    </GlobalProvider>
  );
}

export default App;
