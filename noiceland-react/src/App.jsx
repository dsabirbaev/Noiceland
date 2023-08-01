import Header from "./components/Header"
import Intro from "./components/Intro"
import Cards from "./components/Cards"
import Posts from "./components/Posts"
import FeaturedPosts from "./components/FeaturedPosts"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <main>
          <Intro />
          <Cards />
          <Posts /> 
          <FeaturedPosts />
      </main>

      <Footer />
    </div>
  )
}

export default App