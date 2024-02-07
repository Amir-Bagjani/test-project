import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//hooks
import { useUser } from "context/UserContext";

//components
import { Footer } from "components/Footer";
import { Header } from "components/Header";

//pages
import Home from "pages/Home";
import Auth from "pages/Auth";
import Detail from "pages/Detail";
import NotFoundPage from "pages/NotFoundPage";

const queryClient = new QueryClient();

function App() {
  const { user } = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {user ? (
          <main className="app">
            <Header />
            <section className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="detail/:id" element={<Detail />} />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </section>
            <Footer />
          </main>
        ) : (
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="*" element={<Auth />} />
          </Routes>
        )}
      </Router>
    </QueryClientProvider>
  );
}

export default App;
