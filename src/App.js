import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hello from './Hello';
import OAuth from './OAuth';
import Users from './Users';
import Admin from './Admin';
const App= ()=>{
  return (
    <BrowserRouter>
    <div className='App'>
       
          <Routes>
					<Route path="/" element={<Hello />}></Route>
					<Route path="/Oauth" element={<OAuth />}></Route>
          <Route path="/Users" element={<Users/>}></Route>
          <Route path="/Admin" element={<Admin/>}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
            
    </div>
    </BrowserRouter>
  );
}

export default App;
