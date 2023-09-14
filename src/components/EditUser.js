import React,{ useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

const EditUser = () => {
    
    const [user, setUser] = useState([]);
    const param = useParams();

    const f = async () => {
        console.log(param);
        const res = await fetch(`https://reqres.in/api/users/${param.id}`);
        const json = await res.json();
        console.log(json);
        setUser(json.data);

    };
    useEffect(() => {
        f();
    },[param]);

    return (
        <div class="container-xl px-4 mt-4">
            
            <a href="/users" type="button" class="btn btn-dark m-2">Back</a>
            
            <div class="row">
                <div class="col-xl-4">
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-header">Profile Picture</div>
                        <div class="card-body text-center">
                            <img class="img-account-profile rounded-circle mb-2" src={user.avatar} alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="card mb-4">
                        <div class="card-header">Account Details</div>
                        <div class="card-body">
                                <form>
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">First name</label>
                                            <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={user.first_name} />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">Last name</label>
                                            <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={user.last_name} />
                                        </div>
                                    </div>
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputOrgName">Email</label>
                                            <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value={user.email}/>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditUser;
