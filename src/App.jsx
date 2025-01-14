import Navigation from "./Components/Navigation/Navigation"
import Home from "./Components/Pages/Home"
import Login from "./Components/Authentication/Login"
import SignUp from "./Components/Authentication/SignUp"
import TradeSignal from "./Components/Pages/TradeSignal"
import PaymentSuccess from "./TransactionPages/PaymentSuccess"
import PaymentFailed from "./TransactionPages/PaymentFailed"
import { Outlet, Route , Routes } from 'react-router-dom'
import AdminPanel from "./Dashboard/AdminPanel"
import CoinsDetailsGraph from "./Dashboard/CoinsDetailsGraph"
import PaymentGatewayQR from './PaymentGateway/PaymentGatewayQR'
import Deposit from "./Components/Pages/Deposit"

export default function App() {

  return (
    <div  className="relative bg-[#010B13]">
      <div className="z-50">
        <Navigation />
      </div>
      <div className=" h-auto lg:max-w-[90%] mx-auto">


      <div className="mx-auto py-6"> 
        <Routes>
          <Route path="/" element={<SignUp/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/AdminPanel" element={ <AdminPanel/>}></Route>
          <Route path="/TradeSignal" element={<TradeSignal/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/PaymentGatewayQR" element={<PaymentGatewayQR/>}></Route>
          <Route path="/Deposit" element={<Deposit/>}></Route>
          <Route path="/CoinsDetailsGraph" element={<CoinsDetailsGraph/>}></Route>
          <Route path="/PaymentSuccess" element={<PaymentSuccess/>}></Route>
          <Route path="/PaymentFailed" element={<PaymentFailed/>}></Route>

  



        </Routes>
      </div>

    </div>

  </div>

  )
}