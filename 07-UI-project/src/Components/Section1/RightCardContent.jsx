 

const RightCardContent = (props) => {
  return (
  
        <div className="absolute top-0 left-0 h-full w-full  p-8 mt-5 flex flex-col justify-between ">
            <h2 className="bg-white rounded-full text-2xl font-semibold flex items-center justify-center h-13 w-13">{props.id+1}</h2>
            <div>
                <p className="text-lg leading-relexed text-white mt-35">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eius sapiente sed inventore repellat delectus?</p>
            </div>
            <div className="flex justify-between ">
                <button style={{backgroundColor:props.color}} className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full ">{props.tag}</button>
                <button className="bg-blue-600 text-white font-medium px-4 py-3 rounded-full "><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
  )
}

export default RightCardContent
