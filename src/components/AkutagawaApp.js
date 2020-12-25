import React, { useState } from 'react';
import {Route, Switch} from "react-router-dom"
import '../app.css';
import '../nav.css';
import WinnerIndex from "./WinnerIndex"  
import WinDetails from "./WinDetails"  
import About from "./About"  
import Nav from "./Nav"
import Jdata from "../data/akutagawa.json"


function AkutagawaApp() {
  
  const [data, setData] = useState(Jdata)
  let l = data.length;
  let m = Math.floor(l / 2)
 
    

  return (
    <div className="AkutagawaApp">

      <Nav />
      
      
      <main>
      Hello, readers? please clap... <br />
      <Switch>
        <Route exact path="/" render={() => { return <WinnerIndex l={l} m={m} data={data} /> }}  />
        <Route exact path="/About" component={About}  />
        <Route exact path="/akutagawashou/:no" render={ (routeProps) => { return <WinDetails {...routeProps} winner={data.find(w => w.no === routeProps.match.params.no) }/> } } />
      </Switch>
      </main>
      
        
      
      
    </div>
  );
}

export default AkutagawaApp;
