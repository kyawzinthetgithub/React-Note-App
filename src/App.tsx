import { RouterProvider, createBrowserRouter } from "react-router";
import { ThemeProvider } from './context/ThemeContext';
import Layout from "./components/Layout";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";

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
