import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./pages/Login";
import DataLocal from "./functions/dataLocal";
import Product from "./pages/Product";
import News from "./pages/News";
import AddProduct from "./pages/Product/AddProduct";
import Bill from "./pages/Bill";
import DetailBill from "./pages/Bill/DetailBill";
import AddNews from "./pages/News/AddNews";

function App() {
    DataLocal.loadToken();

    const [token, setToken] = useState(DataLocal.token);

    console.log(token)

    if(!token) {
        return <Login setToken={setToken} />
    }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Product} />
          <Route path='/addProduct' exact component={AddProduct} />
            <Route path='/bill' component={Bill} />
            <Route path='/detail-bill' component={DetailBill} />
            <Route path='/news' component={News} />
            <Route path='/add-news' component={AddNews} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
