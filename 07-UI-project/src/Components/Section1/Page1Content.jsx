 
import LeftTask from './LeftTask'
import RightContent from './RightContent'
 

const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 flex gap-10 h-[90vh]'>
        <LeftTask/>
        <RightContent  users={props.users}/>
    </div>
  )
}

export default Page1Content
