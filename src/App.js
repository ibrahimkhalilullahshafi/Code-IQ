import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Topic from './components/Topic/Topic';
import Stat from './components/Stat/Stat';
import Blog from './components/Blog/Blog';
import Questions from './components/Questions/Questions';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path: '/stat',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Stat></Stat>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Questions></Questions>
        }
      ]
    },
    {
      path: '*',
      element: <h1>404:This route not found.</h1>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
