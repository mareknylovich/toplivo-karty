import './assets/css/reboot.css';
import './assets/css/App.css';
import AppHeader from './components/layout/AppHeader'
import AppMain from './components/layout/AppMain'
import AppFooter from './components/layout/AppFooter'

function App() {
  return (
    <div className="App" id="App">
        <AppHeader />
        <AppMain />
        <AppFooter />
    </div>
  );
}

export default App;
