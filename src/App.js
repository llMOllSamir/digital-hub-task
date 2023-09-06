import React from 'react';
import './App.css';
import { store } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import NotFound from './components/NotFound/NotFound';

function App() {
let routes = createBrowserRouter([{
  path:"",element: <Layout/>,children:[{
    index:true , element:<Home/>
  },{
    path:"*",element:<NotFound/>
  }
]
}])

  return (
  <React.Fragment>
  <Provider store={store}>
  <RouterProvider router={routes} />
   </Provider>
  </React.Fragment>
  );
}

export default App;
