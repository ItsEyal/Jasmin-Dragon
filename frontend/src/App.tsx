import { MantineProvider} from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/Root';
import { ErrorPage } from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
]);

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
       <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
