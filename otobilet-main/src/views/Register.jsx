import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Register = () => (
  <div className='register'>
         <div>
        <h1>Kayıt Ol</h1>

        </div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
   

        <label htmlFor="firstName">Ad </label><br />
        <Field id="form" name="firstName" placeholder="Ad " /><br /><br />
       

        <label htmlFor="lastName">Soyad </label><br />
        <Field id="form" name="lastName" placeholder="Soyad" /> <br /><br />
      


     

        <label htmlFor="country">Ülke | Şehir </label><br />
        <Field id="form" name="country" placeholder="Ülke " />

        <Field id="form" name="city" placeholder="Şehir" /><br />
        

        
        <br />
        

        

        <label htmlFor="telephone">Telefon </label><br />
        <Field id="form" name="telephone" placeholder="+90" /><br /><br />

        <label htmlFor="email">Email </label><br />
        <Field
          id="form"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> 
        <br />
        <br />


        
      
        <label htmlFor="lastName">Şifre </label><br />
        <Field id="form" type="password" name="password" placeholder="Şifre" /><br /> <br />


        <label htmlFor="lastName">Şifre (Tekrar)</label><br />
        <Field id="form" type="password" name="password" placeholder="Şifre" />

     
        <button type="submit">Kayıt Ol</button>
      </Form>
    </Formik>
  </div>
);



export default Register;