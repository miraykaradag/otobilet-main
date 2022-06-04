import React from 'react'

function Login() {


  return (
      <div className='girisyap'>

          <br />
        <form action="">

          <div>
            <h1>Giriş Yap</h1>
          </div>

          <div> <label htmlFor="">  Kullanıcı Adı/ E-Mail
          <br />

            <input type="text" placeholder='Kullanıcı Adı /E-mail'/>
          </label>

          </div>
          <br />

          <div>
          <label htmlFor=""> Şifre
          <br />
            <input type="password" placeholder=' Şifre'/>
          </label>


         

          </div>
          <br />

            <a href="">Şifremi Unuttum</a>

            <div className='social'>
            <h4> <a href=""><i class="fa-brands fa-facebook"></i> ile bağlan </a></h4>

<h4> <a href=""><i class="fa-solid fa-g">

</i> ile bağlan </a></h4>




            </div>

            
          <br />
          <button>Giriş Yap</button>
         
        </form>



      </div>

  )
  
}

export default Login;