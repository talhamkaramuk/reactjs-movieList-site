import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./context/MovieContext";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <MovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
