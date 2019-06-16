import React from 'react';
import './Login.scss';
import logo from "../src/icone/logo.svg";// Insert the icon's path
import axios from 'axios';


class Login extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
     error: false,
     user:{
       name:"",
       email:"",
       token:"",
       remember:false,
       first:true
     }
   }
   if (this.state.user.email.first === true) 
     localStorage.setItem('paginaCorrente', 'index');
 }
 randomBG(){
  let widthForm=document.querySelector("form").offsetWidth;
  let randomNumber;
  let heightForm=document.querySelector("form").offsetHeight;
  /* Create random position of Circle */
  function setCircle(ball){
    let topForm=document.querySelector("form").offsetTop;
    let leftForm=document.querySelector("form").offsetLeft;
    let randomPosition=Math.floor(Math.random()*4);
    switch (randomPosition) {
      case 0:
        ball.style.left=`${Math.floor(Math.random()*leftForm-1)+1}px`;
        ball.style.top=`${Math.floor(Math.random()*window.innerHeight-1)+1}px`;
        break;
      case 1:
        ball.style.left=`${Math.floor(Math.random()*window.innerWidth-1)+1}px`;
        ball.style.top=`${Math.floor(Math.random()*topForm-1)+1}px`;
        break;
      case 2:
        ball.style.left=`${Math.floor(Math.random()*leftForm)+(leftForm+widthForm)}px`;
        ball.style.top=`${Math.floor(Math.random()*window.innerHeight-1)+1}px`;
        break;
      case 3:
        ball.style.left=`${Math.floor(Math.random()*window.innerWidth)+1}px`;
        ball.style.top=`${Math.floor(Math.random()*topForm)+(topForm+heightForm)}px`;
        break;
    
      default:
        break;
    }

  }
  /* Set color and create random background */
  let colorMap=["rgba(39, 14, 122, 1)",
                "rgba(184, 14, 122, 1)",
                "rgba(255, 41, 21, 1)",
                "rgba(255, 222, 69, 1)"];
  let numberBalls=Math.floor(Math.random() * 30)+15;
  for(let i=0;i<numberBalls;i++){
    let ball=document.createElement("span");
    let widthAndHeight=Math.floor(Math.random()*2)+1;
    ball.style.width=`${widthAndHeight}em`;
    ball.style.height=`${widthAndHeight}em`;
    setCircle(ball);
    randomNumber=Math.floor(Math.random()*4);
    if(randomNumber%2===0){
      ball.style.background=`linear-gradient(-45deg, ${colorMap[randomNumber]},  ${colorMap[randomNumber+1]})`;
    }else{
      
      ball.style.background=`linear-gradient(-45deg, ${colorMap[randomNumber-1]},  ${colorMap[randomNumber]})`;
    }
  
    document.querySelector(".container-login").appendChild(ball);
  }

 }
 /* Render background */
 async componentDidMount() {
  if(JSON.parse(localStorage.getItem('user'))){
      if(!JSON.parse(localStorage.getItem('user')).remember){
        if(this.state.user.first){
         this.randomBG();
        }
      }      
    }else if(this.state.user.name===""){
      this.randomBG();
    }   
}


handleClick(event){
  event.preventDefault();
  let p;
  this.setState({error: true});
  /* Check if the fields are filled */
  if(!document.querySelector("input[type='text']").value || !document.querySelector("input[type='password']").value){
    if(this.state.error===false){
      p=document.createElement("p");
      p.setAttribute('class','error');
      p.innerHTML='Username o Password vuota.<br/>Compila tutte le caselle';
      document.querySelector(".info").appendChild(p);
      
    }
  }else{
    this.setState({error:false});
    if (document.querySelector(".error")) document.querySelector(".error").remove();
    // Check if data is correct 
    let check=document.querySelector("#remember").checked;
    axios
    .post('[InsertUrlStrapi]/auth/local', {
        identifier: document.querySelector("input[type='text']").value,
        password: document.querySelector("input[type='password']").value
    })
    .then(response => {
      // Set data in the localStorage if user exists
      this.setState({
        error:false,
        user:{
          id:response.data.user.id,
          name:response.data.user.username,
          email:response.data.user.email,
          token:response.data.jwt,
          remember:check,
          first:false
        }
      })
     
        localStorage.setItem('user', JSON.stringify(this.state.user));

    })
    .catch(error => {
      // Block access and show error message
      if(this.state.error===false){
        let p=document.createElement("p");
        p.setAttribute('class','error');
        p.innerHTML='Username o Password sbagliata';
        document.querySelector(".info").appendChild(p); 
      }else{
        p.innerHTML='Username o Password sbagliata';
      }
    });
      }
 
}
  /*Reset password*/
forgotPass(e){
 

  let p;
  /* If field is empty show the message */
  if(!document.querySelector("input[type=text]").value && !document.querySelector(".error")){
    p=document.createElement("p");
    p.setAttribute('class','error');
    p.innerHTML='Inserire indirizzo e-mail utente';
    document.querySelector(".info").appendChild(p); 

  }else{
      /* Connect strapi and send an e-mail with url for reset password */
      axios
      .post('[InsertUrlStrapi]/auth/forgot-password', {  
        email: document.querySelector("input[type=text]").value,
        url: '[InsertUrlStrapi]/admin/plugins/users-permissions/auth/reset-password'
      })
      .then(response => {
        /* Show success message */
        if(document.querySelector(".error")){
          document.querySelector(".error").remove();
        }
        p=document.createElement("p");
        p.setAttribute('class','success');
        p.innerHTML="Controlla la tua email";
        document.querySelector(".info").appendChild(p);

      })
      .catch(error => {
         /* Show error message */
        if(document.querySelector(".error")){
          document.querySelector(".error").innerHTML="Controlla meglio l'indirizzo inserito";
        }else{
          p=document.createElement("p");
          p.setAttribute('class','error');
          p.innerHTML="Controlla meglio l'indirizzo inserito";
          document.querySelector(".info").appendChild(p);
        }
      });
  }
}
/* Show login form */
loginSee(){
  return(
    <>
      <section className="container-login">
        <form>
          <h1><img src={logo} alt="logo Hyp"/></h1>
          <div className="info">
            <input type="text" name="username" placeholder="xxxxx@mohole.it" />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <span className="check">
              <input id="remember" type="checkbox"/><label htmlFor="remember">Ricordami</label>
            </span>
            <input className="button-login" onClick={this.handleClick} type="submit" value="Login"/>
            <span className="link" onClick={this.forgotPass} role="button">Password dimenticata?</span>
          </div>
        </form>

      </section>
    
    </>
  )
  
}
render() { 
  if(JSON.parse(localStorage.getItem('user'))){
      if(!JSON.parse(localStorage.getItem('user')).remember){
        if(this.state.user.first){
          return (
            this.loginSee() /* Show login form */
          )
        }else{
          return(
            <>
              <p>Insert page or component with Login Success</p>
            </>
          )
  
        }
      }else{
        return(
          <>
            <p>Insert page or component with Login Success</p>
          </>
        )
  
      }
        
      
      
    }else if(this.state.user.name!==""){
      return(
        <>
          <p>Insert page or component with Login Success</p>
        </>
      )
    
    }else{
      return (
        this.loginSee() /* Show login form  */
      )
    }
     
  
  }
}



export default Login;
