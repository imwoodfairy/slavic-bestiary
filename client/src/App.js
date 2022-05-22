import AppHeader from './components/appHeader/AppHeader';
import AppFilters from './components/appFilters/AppFilters';
import HeroesList from './components/heroesList/HeroesList';
import './App.css';
import AppFooter from './components/appFooter/AppFooter';
import HeroInfo from './components/heroInfo/HeroInfo';



function App() {
  return (

    <main>
      <AppHeader />
      <AppFilters />
      <HeroInfo />
      <HeroesList />
      <AppFooter />

    </main >


  );
}

export default App;
