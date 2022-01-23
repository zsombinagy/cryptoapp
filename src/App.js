import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space } from "antd";

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import "./App.css"



const App = () => {
  return (
    <Router>
      <div className='app'>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout >
            <Routes >
              <Route exact path="/">
                <Homepage />
              </Route>
            </Routes>
            <Routes >
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
            </Routes>
            <Routes >
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
            </Routes>
            <Routes >
              <Route exact path="/crypto/:coinID">
                <CryptoDetails />
              </Route>
            </Routes>
            <Routes >
              <Route exact path="/news">
                <News />
              </Route>
            </Routes>
            </Layout>
          </div>
          <div className="footer" >
            <Typography.Title  level={5} style={{color: "white", textAlign: "center"}}>
              Cryptoverse <br />
              ALl rights reserved
            </Typography.Title>
            <Space>
              <Link to="/" >Home</Link>
              <Link to="/exchanges" >Exchanges</Link>
              <Link to="/news" >News</Link>
            </Space>
          </div>
      </div>
    </Router>
)
};

export default App;
