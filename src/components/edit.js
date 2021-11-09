import React , { useState } from "react"
import { useSelector , useDispatch } from 'react-redux';
import { updatetodo , isEdit } from '../features/todo/todoSlice';

const Edit = ({todo}) => {
 
	const  [todo1 , setTodo1] = useState({
		id:todo.id,
		todoname:todo.todoname,
		description:todo.description,
		category:todo.category,
		isEdit:todo.isEdit
	})
	const onHandle = (name) => (e) => {
		setTodo1({...todo1 , [name]:e.target.value});
	}
	const dispatch = useDispatch()

 return (
 	
        <div className="flex justify-center mt-8 border border-gray-400 rounded-lg hover:shadow-md hover:border-pink-400 transform hover:-translate-y-1 transition-all duration-200" >
	        <form className="w-3/4 max-w-sm" >
	          <div className="md:flex md:items-center mb-6">
	            <div className="md:w-1/3">
	              <label className="block text-gray-700 text-md font-bold md:text-right mb-1 md:mb-0 pr-4">
	                Todo Name
	              </label>
	            </div>
	            <div className="md:w-2/3">
	              <input onChange={onHandle("todoname")} className=" appearance-none bg-transparent border-b-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-400" type="text" placeholder={todo.todoname}/>
	            </div>
	          </div>
	          <div className="md:flex md:items-center mb-6">
	            <div className="md:w-1/3">
	              <label className="block text-gray-700 text-md font-bold md:text-right mb-1 md:mb-0 pr-4" >
	                Description
	              </label>
	            </div>
	            <div className="md:w-2/3">
	              <input onChange={onHandle("description")} className="appearance-none bg-transparent border-b-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-pink-400"  type="textarea"  placeholder={todo.description} /> 
	            </div>
	          </div>
	          <div className="md:flex md:items-center  mb-6">
	            <div className="md:w-1/3">
	              <label className="block text-gray-700 text-md font-bold md:text-right mb-1 md:mb-0 pr-4" >
	                Category 
	              </label>
	            </div>
	            <div className="inline-block relative md:w-2/3 w-full" >
				<select onChange={onHandle("category") } className="block bg-transparent appearance-none w-full border-2 border-gray-700 text-lg px-4 py-2 pr-8 rounded shadow-lg leading-tight focus:outline-none focus:border-pink-400 focus:shadow-outline">
				   <option>Select the Category</option>
				   <option>To be done</option>
				   <option>On Progress</option>
				   <option>Completed</option>
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
				</div>
			  </div>
	          </div>
	          
	          <div className="md:flex md:items-center">
	            <div className="md:w-1/3"></div>
	            <div className="md:w-2/3">
	              <button onClick={() => dispatch(updatetodo(todo1)) }
	               className="shadow mb-7 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-xl font-bold py-2 px-4 rounded" type="button">
	                Update
	              </button>
	            </div>
	          </div>
	        </form>
	       </div>

 );
}

export default Edit;