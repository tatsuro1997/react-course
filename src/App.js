import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainNavigation from "./components/layput/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/FavoritesMeetup";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
