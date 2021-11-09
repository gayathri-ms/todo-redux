import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todo/todoSlice';

const Form = () => {

	const dispatch = useDispatch()
	// const todos = useSelector((state) => state.todos)
	const [todo , setTodo] = useState(
    {
    	id:0,
      todoname: "",
      description: "",
      category: "Select the Category" ,

    }
  );
	const { todoname , description  } = todo

	const onHandlechange = (name) => (e) => {
		setTodo({ ...todo , [name] : e.target.value})
	}

	const onHandle = (e) => {
		e.preventDefault();
		todo.id += 1;
		if(todo.todoname !== "" & todo.description !== "")
		{
			dispatch(addtodo({
				id:todo.id,
				todoname:todo.todoname,
				description:todo.description,
				category:todo.category,
				isEdit: false
			}))
		
			setTodo({...todo , 
				todoname: "",
				description: ""
			})
		}

	}

	return (
		<div className="flex justify-center mt-8" >
	        <form className="w-3/4 max-w-sm" >
	          <div className="md:flex md:items-center mb-6">
	            <div className="md:w-1/3">
	              <label className="block text-gray-700 text-xl font-bold md:text-right mb-1 md:mb-0 pr-4">
	                Todo Name
	              </label>
	            </div>
	            <div className="md:w-2/3">
	              <input onChange={onHandlechange("todoname")} className=" appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-white focus:border-pink-400" type="text" value={todoname} placeholder="Todoname" />
	            </div>
	          </div>
	          <div className="md:flex md:items-center mb-6">
	            <div className="md:w-1/3">
	              <label className="block text-gray-700 text-xl font-bold md:text-right mb-1 md:mb-0 pr-4" >
	                Description
	              </label>
	            </div>
	            <div className="md:w-2/3">
	              <textarea onChange={onHandlechange("description")} className="appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-white focus:border-pink-400"  type="textarea" value={description} placeholder="Description" > </textarea>
	            </div>
	          </div>
	          <div className="md:flex md:items-center mb-6">
	            <div className="md:w-1/3">
	              <label className="block text-gray-700 text-xl font-bold md:text-right mb-1 md:mb-0 pr-4" >
	                Category 
	              </label>
	            </div>
	            <div className="inline-block relative md:w-2/3 w-full" >
				<select onChange={onHandlechange("category")} className="block appearance-none w-full bg-white border-2 border-gray-700 text-lg px-4 py-2 pr-8 rounded shadow-lg leading-tight focus:outline-none focus:border-pink-400 focus:shadow-outline">
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
	              <button onClick={onHandle} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-xl font-bold py-2 px-4 rounded" type="button">
	                Add Todo
	              </button>
	            </div>
	          </div>
	        </form>
	    </div>
	    
		);

}

export default Form;