import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/layput/Layout";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/FavoritesMeetup";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
