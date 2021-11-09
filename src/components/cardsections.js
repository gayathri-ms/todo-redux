import Card from "./card"
import { useSelector } from 'react-redux';

const Cardsections = () => {

	const todos = useSelector((state) => state.todos)
	
	return (
		<div>
			<section className="text-gray-600 min-w-full body-font -mt-10 px-7">
		      <div className="container px-5 py-24 mx-auto">
		        <div className="flex flex-wrap -m-4">
		          <div className="p-4 mx-auto lg:w-1/3 md:w-3/4">
		          <h1 className="mb-7 font-bold text-2xl uppercase" > To Be Done</h1>
		            <div className="lg:max-h-full  lg:overflow-hidden max-h-64 pr-9 pl-4  overflow-y-scroll">
		           	{
		             	(todos.length !== 0) ?
		             	(todos.map((todo,i) => {
		             		 return (
		             		 	(todo.category === "To be done") ?
		             			( <Card todo={todo} key={i} /> )
		             			: ""
		             		)
		             		
		             	})) : "Add new Todos"
		             }
		             </div>
		          </div>
		          <div className="p-4 mx-auto lg:w-1/3 md:w-3/4">
		          <h1 className="mb-7 font-bold text-2xl uppercase" >On Progress</h1>
		            <div className="lg:max-h-full lg:overflow-hidden max-h-64 pr-9 pl-4 overflow-y-scroll">
		             {
		             	(todos.length !== 0) ?
		             	(todos.map((todo,i) => {
		             		 return (
		             		 	(todo.category === "On Progress") ?
		             			( <Card todo={todo} key={i} /> )
		             			: ""
		             		)
		             		
		             	})) : "Add new Todos"
		             }
		            </div>
		          </div>
		          <div className="p-4 mx-auto lg:w-1/3 md:w-3/4">
		          <h1 className="mb-7 font-bold text-2xl uppercase" >Completed</h1>
		            <div className="lg:max-h-full lg:overflow-hidden max-h-64 pr-9 pl-4  overflow-y-scroll">
		             {
		             	(todos.length !== 0) ?
		             	(todos.map((todo,i) => {
		             		 return (
		             		 	(todo.category === "Completed") ?
		             			( <Card todo={todo} key={i} /> )
		             			: ""
		             		)
		             		
		             	})) : "Add new Todos"
		             }
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
		</div>

		);
}

export default Cardsections;