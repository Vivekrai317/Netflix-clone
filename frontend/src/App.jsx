import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Footer from "./pages/Footer"
import { Toaster } from "react-hot-toast"
import { useAuthStore } from "../store/authUser"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import WatchPage from "./pages/WatchPage"
import SearchPage from "./pages/home/SearchPage"
import HistoryPage from "./pages/home/HistoryPage"
import Notfound from "./pages/Notfound"


function App() {
  const {user,isCheckingAuth,authCheck} =useAuthStore()
  useEffect(()=>{ 
    authCheck();
  },[authCheck])
  // console.log("Authorized user is here",user);

  if(isCheckingAuth){
    return(
      <div className="h-screen">
        <div className="flex justify-center bg-black items-center h-full">
          <Loader className="animate-spin text-red-600 w-10 h-10"/>
        </div>
      </div>
    )
  }

  return (
    <>
    <Routes>
      <Route path='/' element = <HomePage/> />
      <Route path='/login'element = {!user? <LoginPage/> : <Navigate to={"/"}/>} />
      <Route path='/signup'element = {!user ? <SignUpPage/> : <Navigate to={"/"}/>}/>
      <Route path='/watch/:id'element = {user ? <WatchPage/> : <Navigate to={"/login"}/>}/>
      <Route path='/search'element = {user ? <SearchPage/> : <Navigate to={"/login"}/>}/>
      <Route path='/history'element = {user ? <HistoryPage/> : <Navigate to={"/login"}/>}/>
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
