import React , { useState } from "react"
import Edit from "./edit"
import { useSelector, useDispatch } from 'react-redux';
import { deltodo , isEdit } from '../features/todo/todoSlice';

const Card = ({todo }) => {

	const dispatch = useDispatch()
	
	return (
		<div>
		{
	     	!todo.isEdit ? 
	     	<div> 
	     		<div className="container mt-4 mx-auto lg:-ml-5 w-full ">
				    <div className="md:grid md:grid-cols-1 flex">
				      <div className="card m-2 border border-gray-400 rounded-lg hover:shadow-md hover:border-pink-400 transform hover:-translate-y-1 transition-all duration-200">
				        <div className="m-3">
				          <h2 className="text-lg mb-2">{todo.todoname}
				         <span onClick={() => { dispatch(deltodo(todo.id))}} className="text-sm cursor-pointer text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">Delete</span>

				         <span onClick={() => {
				         	dispatch(isEdit(todo))

				         }} className="text-sm text-teal-800 cursor-pointer font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">Edit</span>
				         </h2>
				        <p className="font-light font-mono flex-wrap text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 overflow-hidden">{todo.description}</p>
				        </div>
				      </div>
				    </div>
				 </div>
	     	</div> 
	     	: <Edit todo={todo} />
	     }
		</div>
		);
}

export default Card;