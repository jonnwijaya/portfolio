import './App.css'
import Footer from './components/Footer'
import Container from './components/Container'
import "@fontsource/roboto"

function App() {
  return (
    <div>

      <div className="flex flex-col min-h-screen">
        <Container />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;