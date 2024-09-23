import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {courseDetails} = props
  const {name, logoUrl, id} = courseDetails

  return (
    <Link to={`/courses/${id}`} className="course-link">
      <li className="course-list-item">
        <img src={logoUrl} alt={name} className="course-logo" />
        <p className="course-item-title">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
