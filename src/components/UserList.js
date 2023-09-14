import React,{ useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./UserList.css";

const UserList = (props) => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const handlePrevPage = () => {
        setPage((page) => {
          if (page === 1) return page;
          else return page - 1;
        });
    };
    
    const handleNextPage = () => {
        setPage((page) => page + 1);
    };
    
    const f = async () => {
        const res = await fetch("https://reqres.in/api/users?page="+ page)
        const json = await res.json();
        setUsers(json.data);
        setTotalPage(json.total_pages);

    };
    const logoutAction = () => {
        localStorage.setItem('token', "")
        navigate("/");
    }
    useEffect(() => {
        f();
    }, [page]);
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-box clearfix">
                    <a href="/" type="button" class="btn btn-dark m-2" onClick={()=>logoutAction()}>Back</a>
                        <div class="table-responsive">
                        <table class="table user-list">
                            <thead>
                                <tr>
                                    <th><span>User</span></th>
                                    <th><span>Email</span></th>
                                    <th></th>
                                </tr>
                            </thead>
                        {users &&
                            users.map((user) => {
                                return (
                                    <tbody key={user.id}> 
                                        <tr>
                                            <td>
                                                <img key={user.avatar} src={user.avatar} />
                                                <p class="user-link">{user.first_name} {user.last_name}</p>
                                            </td>
                                            <td>
                                                <a href="#">{user.email}</a>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info" onClick={() => navigate(`/info/${user.id}`)}>Info</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                                </table>
                        </div>
                        <nav>
                            <ul class="pagination justify-content-end">
                                <li class="page-item">
                                <button class="page-link" href="#" aria-label="Previous" onClick={handlePrevPage} disabled={page == 1 ? "true" : ""}>
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                                </li>
                                <li class="page-item">
                                <button class="page-link" href="#" aria-label="Next" onClick={handleNextPage} disabled={page == totalPage ? "true" : ""}>
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    </div>  
    )
};

export default UserList;
