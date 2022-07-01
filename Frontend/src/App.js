import { Stack } from "@mui/material";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserCard from "./components/UserCard";

function App() {
  return (
    <box>
      <Topbar/>
      <Stack direction="row" spacing={2}>
      <Sidebar/>
      <Main/>
      <UserCard/>
      </Stack>
    </box>
  );
}

export default App;
