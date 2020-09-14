import React from "react";
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import "./App.css";
//import "./SearchPage"
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ MainPage }/>
        <Route path='/search' component={ SearchPage }/>
        
        {
          /*
          <Route path='/' render={() => (
            <SearchPage onNavigate = {() => {
              this.setState(() => ({
                showSearchPage: false
              }))
            }}
            />
          ) }/>

          <Route path='/search' render={() => (
            <MainPage onNavigate = {() => {
              this.setState(() => ({
                showSearchPage: true
              }))
            }}
            />
          ) }/>
          */
        
        /*this.state.showSearchPage ? (
          <SearchPage onNavigate = {() => {
            this.setState(() => ({
              showSearchPage: false
            }))
          }}
          />
        ) : (
          <MainPage onNavigate = {() => {
            this.setState(() => ({
              showSearchPage: true
            }))
          }}/>
        )*/
        }
      </div>
    );
  }
}

export default BooksApp;
