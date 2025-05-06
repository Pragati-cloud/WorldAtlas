

export const Contact =() => {

  const handleFormSubmit =(formData) =>{
      const formInputData = Object.fromEntries(formData.entries());
      console.log(formInputData);
  };

  return (
    <section className="section-contact">
       <h2 className="container-title">
        Contact Us
       </h2>
       
       <div className ='contact-wrapper container'>
       
       <form action={handleFormSubmit}>

        <input type="text" required className = 'form-control' autoComplete="off" placeholder="Enter your name" name='userName'/>


        <input type="text" required className = 'form-control' autoComplete="off" placeholder="Enter your email" name='email'/>

        <textarea rows='10' required className = 'form-control' autoComplete="off" placeholder="Enter your message" name='message'/> 

        <button type="submit" value = 'send'>Send</button>
       </form>
       </div>
    </section>
  )
};