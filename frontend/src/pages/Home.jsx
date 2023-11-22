import { Link } from "react-router-dom";
import Hero from "../components/Hero";



export default function Home() {
  return <main className="home-page">
    <Hero />
    <h1 className="direct"><span className="underlined">Or</span> make a <Link aria-label="On Click" to="/request">Request</Link></h1>
  </main>
}