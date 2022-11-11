import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


export function Login(){

const Transfer2=(e)=>{
    
        e.preventDefault();

        var datastring = new FormData(e.target);

        const config = {headers: {'enctype':"multipart/form-data"}}

        axios.post('http://localhost:5000/login',datastring,config)

        .then(function(res){
                if(res.data.status==="usernameerror"){
                    alert("USERNAME ERROR...")
                    window.location.reload();
                }
                else if(res.data.status==="Success"){
                    alert("LOGINED SUCCESSFULLY...");
                    window.location.href="/dashboard"
                }
                else if(res.data.status==="Invalid"){
                    alert("INVALID LOGIN...")
                    window.location.reload();
                }  
            })
        }

   return(
         <div>
            <div className='container'>
                <div className='col-lg-6 ml-auto mr-auto mt-5'>
                <form onSubmit={Transfer2}>
                <label>USERNAME</label>
                <input type="text" name="username"/><br/>
                <label>PASSWORD</label>
                <input type="password" name="password"/><br/>
                </form>
                <button type='submit'>LOGIN</button>
             </div>

            </div>

         </div>
    );
}