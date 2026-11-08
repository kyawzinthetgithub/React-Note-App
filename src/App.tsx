import { RouterProvider, createBrowserRouter } from "react-router";
import { ThemeProvider } from './context/ThemeContext';
import Layout from "./components/Layout";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import CreateNote from "./pages/CreateNote";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader
      },
      {
        path: '/create-note',
        element: <CreateNote />
      }
    ],
  }
  ]);


  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
