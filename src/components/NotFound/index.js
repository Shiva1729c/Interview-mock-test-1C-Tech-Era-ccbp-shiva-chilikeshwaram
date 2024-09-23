import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="main-heading">Page Not Found</h1>
      <p className="description">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
