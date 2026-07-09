import "@/App.css";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";
import { Toaster } from "@/components/ui/sonner";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <Header />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Stats />
                <About />
                <Contact />
            </main>
            <Footer />
            <FloatingCTA />
            <Toaster
                position="bottom-center"
                toastOptions={{
                    style: {
                        background: "#1A1A1A",
                        color: "#F9F9F9",
                        border: "1px solid rgba(197,168,128,0.4)",
                        letterSpacing: "0.06em",
                        fontFamily: "Montserrat, sans-serif",
                    },
                }}
            />
        </div>
    );
}

export default App;
