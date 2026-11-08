import { RouterProvider, createBrowserRouter } from "react-router";
import { ThemeProvider } from './context/ThemeContext';
import Layout from "./components/Layout";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import CreateNote, { createNoteAction } from "./pages/CreateNote";
import DetailNote, { noteDetailLoader } from "./pages/DetailNote";

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
        element: <CreateNote />,
        action: createNoteAction,
      },
      {
        path:'/note/:id',
        element: <DetailNote />,
        loader: noteDetailLoader
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
