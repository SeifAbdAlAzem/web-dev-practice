import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Importing layouts and pages
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { tasksLoader } from "./services/api";

// Create a router instance for handling navigation
const router = createBrowserRouter(
  // Define routes and their corresponding components
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route
        path="create"
        element={<Create onSubmit={(data) => console.log(data)} />}
      />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

// App component serves as the entry point of the application
function App() {
  // Provide the router to the application
  return <RouterProvider router={router} />;
}

export default App;
