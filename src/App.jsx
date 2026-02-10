import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Talents from "./pages/Talents";
import UploadJob from "./pages/UploadJob";
import About from "./pages/About";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="talents" element={<Talents />} />
        <Route path="upload" element={<UploadJob />} />
        <Route path="about" element={<About />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}
