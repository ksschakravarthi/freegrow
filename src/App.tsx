import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./apputils/Protected";
import UnProtected from "./apputils/UnProtected";
import HomeMain from "./features/home/HomeMain";
import Homepage from "./features/home/homepage/Homepage";
import SignUp from "./features/signup/SignUp";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<UnProtected />}>
            <Route path="/" index element={<HomeMain />} />
            <Route path="/login" element={<Homepage />} />
            <Route path="/signup" index element={<SignUp />} />
          </Route>

          <Route element={<Protected />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
