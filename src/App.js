
import './App.css';
import Simple from "./Components/Simple";
import Users from "./Components/Users";
import Toggle from "./Components/Toggle";
import Bindding from "./Components/Bindding";
import Disable from "./Components/Disable";
import Parentstate from "./Components/Parentstate"
import {Parent, Child} from "./Components/Parent";
import  Sumof from "./Components/Sumof";
import Counter from "./Components/Counter";
import Effect from "./Components/Effect"
import Fetch from "./Components/Fetch";
import Time from "./Components/Time";
import DigitalTime from "./Components/DigitalTime";
import Handler from "./Components/Handler";
import Input from "./Components/Input";
import TwoInput from "./Components/TwoInput";
import SimpleForm from "./Components/SimpleForm";
import ToDo from "./Components/ToDo";
import NpmClock from "./Components/NpmClock";
import Acoordiaan from './Components/ReactQuestions/Acoordiaan';
import Statewise from "./Components/Covid/Statewise"
import ComaA from './Components/Axios/ComaA';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import About from "./Components/Router/About";
import Contact from "./Components/Router/Contact";
import Error from "./Components/Router/Error"
import Todo from "./Components/ToDo/Todo";
import Pract from "./Components/Pract";
import UseReducer from "./Components/UseReducer";
import {Interview} from "./Components/Interview"





function App() {
  const Name =() => {
    return <h1>Hello, I am Name Page</h1>
  }
  return (
    <div className="App">
     <Simple />
<hr />
     <Time />
     < DigitalTime />
     < Handler />
     <Input />
     <TwoInput />
     < Interview />
     < SimpleForm />
     < ToDo />
     < NpmClock />
     < Acoordiaan />
     
     <Users />
     < Toggle />
     <Bindding />
     < Disable />
     < Parentstate />
     <Parent >
      <Child />
     </Parent>
     <Sumof />
     <Counter />
     < Effect />
    < UseReducer />
     <Statewise />
     <ComaA/>
     <Todo />
     
     <Fetch />
     <BrowserRouter>
     <Routes>
     <Route  exact path="/" component={<About/>}/>
     <Route path="/contact" component={<Contact/>}/>
     <Route path="/contact/name" component={<Name/>}/>
     <Route   path ="*" component={<Error/>}/>
     </Routes>
     </BrowserRouter>
    
   
    
     
    </div>
  );
}

export default App;

