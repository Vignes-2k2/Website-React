import Header from "./Sections/Header"
import Footer from "./Sections/Footer"
import PageRender from "./Sections/Page-render"


function App() {
  return (
    <>
      <Header />
      <div className="page">
        <PageRender />
      </div>
      <Footer />
    </>
  )
}

export default App
