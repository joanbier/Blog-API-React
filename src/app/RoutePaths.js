import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Photos from "../pages/Photos";
import RandomPhotoPage from "../pages/RandomPhotoPage";
import SearchPage from "../pages/Search";

export default function RoutePaths(params) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/photos/:id" component={Photos} />
      <Route path="/photos" component={Photos} />
      <Route path="/random" component={RandomPhotoPage} />
      <Route path="/search" component={SearchPage} />
    </Switch>
  );
}
