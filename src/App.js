
import { Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupPage from './Pages/NewMeetup';
import FavoritesPage from './Pages/Favorites';

import Layout from './Components/layout/Layout';


function App() {
  return (
   
    <Layout>

      <Routes>      
          <Route exact path='/' element={<AllMeetupsPage />}/>
                    
          <Route exact path='/new-meetup' element={<NewMeetupPage />} />
           
          <Route exact path='/favorites' element={<FavoritesPage />} />           
      </Routes>
      
    </Layout>
  );
}

export default App;
