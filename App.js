import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { signup } from "./components/signup";
import { Contact } from "./components/Contact";
import { Blogs } from "./components/Blogs";
import { Videos } from "./components/Videos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";
import { login } from "./components/login";
import { BlogAdd } from "./components/BlogAdd.jsx";
import { BlogEdit } from "./components/BlogEdit";
import { Blogview } from "./components/Blogview";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/Videos" component={Videos} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/login" component={login} />
        <Route exact path="/posts/add" component={BlogAdd} />
        <Route exact path="/posts/edit/:id" component={BlogEdit} />
        <Route exact path="/posts/view/:id" component={Blogview} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
