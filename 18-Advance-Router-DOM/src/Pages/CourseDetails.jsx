 
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params = useParams() 
         
        

  return (
    <div>
        <h1>{params.CourseId} Course Details Page</h1>
    </div>
  )
}

export default CourseDetails