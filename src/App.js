import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePageRoutes from "./routes/HomePage";
import TopNav from "./components/Nav/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <div className="container">
        <HomePageRoutes />
      </div>
    </>
  );
}

export default App;
