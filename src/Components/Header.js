import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [activetab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() =>{
        if (location.pathname === "/"){
            setActiveTab("Home");
        }else if (location.pathname === "/create"){
            setActiveTab("Create");
        }else if (location.pathname === "/update"){
            setActiveTab("Update");
        }
    }, [location] );
  return (
    <div className=' container mx-auto flex flex-row justify-between float-right space-y-4 '>
        <div>
            
        </div>
        <div className=' flex flex-auto flex-col lg:flex-row space-x-5 float-right'>
            <Link  to="/">
                <p 
                    className={`${activetab === "Home"} ? "active" :""`}
                    onClick ={() => setActiveTab("Home")}
                >
                    Home
                </p>
            </Link>
            <Link  to="/create">
                <p 
                    className={`${activetab === "Create"} ? "active" :""`}
                    onClick ={() => setActiveTab("Create")}
                >
                    Create
                </p>
            </Link>
            <Link  to="/update">
                <p 
                    className={`${activetab === "Update"} ? "active" :""`}
                    onClick ={() => setActiveTab("Update")}
                >
                    Update
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Header