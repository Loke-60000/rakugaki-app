
import axios from 'axios';
import { data } from 'jquery';
import { useState } from 'react';
import '../custom.scss'
import { Navigate, useNavigate } from 'react-router-dom';

const Register=(props)=>{

    let history = useNavigate(); // Use for Navigate on Previous
    const [data, setData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value }); 

        //console.log(data)
    }
   
    const handleTermsChange = (e) => {
        setData({ ...data, acceptedTerms: e.target.checked });
    };
    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password

        }

        console.log(sendData);

        axios.post('http://localhost/rakugaki_server/login-register/insert.php',sendData)
        .then((result)=>{
            if (result.data.Status == 'Invalid') { 
          alert('Invalid User');  
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           history(`/MainApp`);
        }
      })  
    }

    return(
        <div className="main-box">
        <form  onSubmit={submitForm}>
        <div className="row m-1">
         <div className="col-md-12 text-center"><h1>Register</h1></div>
        </div>
            <div className="row m-1">
                <div className="col-md-6">First Name</div>
                <div className="col-md-6">
                    <input type="text" name="first_name" className="form-control"
                    onChange={handleChange} value={data.first_name}
                     />
                </div>
            </div>

            <div className="row m-1">
                <div className="col-md-6">Last Name</div>
                <div className="col-md-6">
                    <input type="text" name="last_name" className="form-control" 
                        onChange={handleChange} value={data.last_name}
                    />
                </div>
            </div>


            <div className="row m-1">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control"
                     onChange={handleChange} value={data.email}
                     />
                </div>
            </div>


            <div className="row m-1">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" className="form-control" 
                         onChange={handleChange} value={data.password}

                    />
                </div>
            </div>

            <div className="row m-1">
                <div className="col-md-12">
                    <label>
                        <input
                            type="checkbox"
                            name="acceptedTerms"
                            checked={data.acceptedTerms}
                            onChange={handleTermsChange}
                            className="terms"
                        />
                        I accept the terms and conditions
                    </label>
                </div>
            </div>

            <div className="row m-1">
                <div className="col-md-12 text-center p-3">
                    <input type="submit" name="submit" value="Register" className="btn btn-primary" />
                </div>
            </div>
            </form>
        </div>
    )
}

export default Register;