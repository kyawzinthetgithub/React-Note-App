import { RouterProvider, createBrowserRouter } from "react-router";
import { ThemeProvider } from './context/ThemeContext';
import Layout from "./components/Layout";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
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
