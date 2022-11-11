import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


export function Register(){

const Transfer=(e)=>{



                 const datastring = new FormData(e.target);

                 const config = {headers: {'enctype':'multipart/form-data'}}
         
                 axios.post('http://localhost:5000/register',datastring,config)
                 
                 .then(function(res){
                    
                      if(res.data.status === 'SigninError'){
                         alert('SIGNIN ERROR...');
                         window.location.reload();
                     }
                     else if(res.data.status === 'Created'){
                         alert('ACCOUNT CREATED...');
                         window.location.href="/login";
                     }
                 })
                 .catch(function(err){
                     console.log(err);
                 })

}


    return(
        <div>
            <div className="container">

                <div className="col-lg-6 ml-auto mr-auto mt-5 bordered">

                    <form onSubmit={Transfer}>
                    <table className='container font-weight-bold'>
                    <thead className='text-center'>
                        <tr><td colSpan={2}>REGISTER FORM</td></tr>
                    </thead>
                    <tbody>
                    <tr><td>
                        <label>NAME</label></td>
                        <td><input type="text" name="name" placeholder="Enter your name" className='formcontrol'/>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <label>E-MAIL</label></td>
                    <td><input type="email" name="email" placeholder="Enter your email"/></td>
                    </tr>
                    <tr>
                    <td>
                    <label>PHONE</label></td>
                    <td><input type="number" name="number" placeholder="Enter your number"/></td>
                    </tr>
                    <tr>
                    <td>
                    <label>DOB</label></td>
                    <td><input type="date" name="dob" placeholder="Enter your dob"/></td>
                    </tr>
                    <tr>

                    <td>
                    <label>PASSWORD</label></td>
                    <td><input type="password" name="password" placeholder="Enter your password"/></td>
                    </tr>
                    <tr><td><button type="submit">SUBMIT</button></td></tr>
                    </tbody>
                    </table>  
                    </form>                
                </div>
            </div>
        </div>
    );
}