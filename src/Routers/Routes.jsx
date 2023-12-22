import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Banner from "../Components/Banner/Banner";
import Login from "../Components/LoginPage/Login";
import SignUpPage from "../Components/SignUpPage/SignUp";
import UserDasbord from "../LayOut/UserDasbord/UserDasbord";
import NewTasks from "../Components/DeshBoardPage/NewTasksPage/NewTasks";
import Error from "../Components/ErrorPage/Error";
import PreviousTask from "../Components/DeshBoardPage/PreviousTasks/PreviousTask";
import UpdateTask from "../Components/DeshBoardPage/UpdateTask/UpdateTask";
import DragDrop from "../Components/DeshBoardPage/dragDrop/DragDrop";

import IconBox from '../../public/test.png'
import Trems from "../Components/TreamandCondetion/Trems";
import Privacy from "../Components/PrivacyPolicy/Privacy";
import About from "../Components/About/About";


const TASKS = [
    {
      id: 1,
      status: "New Order",
      image: IconBox,
      time: "8 hrs",
      days: "5 days left"
    },
    {
      id: 2,
      status: "In Progress",
      image: IconBox,
      time: "6 hrs",
      days: "6 days left",
      done: false
    },
    {
      id: 3,
      status: "Completed",
      image: IconBox,
      time: "13 hrs",
      days: "4 days left"
    },
    {
      id: 4,
      status: "New Order",
      image: IconBox,
      time: "22 hrs",
      days: "2 days left",
      done: true
    },
    {
      id: 5,
      status: "In Progress",
      image: IconBox,
      time: "2 hrs",
      days: "1 day left",
      newOrder: true,
      done: false
    },
    {
      id: 6,
      status: "Completed",
      image: IconBox,
      time: "20 hrs",
      days: "11 days left",
      done: true
    },
    {
      id: 5,
      status: "Delivered",
      image: IconBox,
      time: "2 hrs",
      days: "1 day left",
      done: false
    }
  ];




const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/signup",
                element: <SignUpPage></SignUpPage>,
            },
            {
                path: "/Terms",
                element: <Trems></Trems>,
            },
            {
                path: "/privacy",
                element: <Privacy></Privacy>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
        ]
    },
    {
        path: 'userdeshbord',
        element: <UserDasbord></UserDasbord>,
        children:[
            {
                path: "newtasks",
                element: <NewTasks/>,
            },
            {
                path: "dragdrop",
                element: <DragDrop tasks={TASKS} ></DragDrop>,
            },
            {
                path: "previousTask",
                element: <PreviousTask/>,
            },
            {
                path: "previousTask/updateTask/:id",
                element: <UpdateTask/>,
                loader:({params})=> fetch(`https://task-management-server-site-amber.vercel.app/userTasks/${params.id}`)
            },
        ]
    }
])

export default router;