import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddEntry from "./pages/AddEntry";
import UpdateEntry from "./pages/UpdateEntry";
import Chats from "./pages/Chats";
import Car from "./pages/Car";

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/add-car" component={AddEntry} />
        <Route path="/update-car/:id" component={UpdateEntry} />
        <Route path="/chats" component={Chats} />
        <Route path="/car/:id" component={Car} />
      </Switch>
    </div>
  );
}
