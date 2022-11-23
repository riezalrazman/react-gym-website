
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Contact = () => {
  return (
    <>
    <Navbar/>
    <div id='contact' className='w-full bg-white py-16 px-4 p-8'>
    

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
             
              <div>
                
                <p className='text-3xl'>Please feel free to contact us with any questions.</p>
             
              </div>
              <div>
                <p className='pt-8 text-lg'>Phone</p>
                <p>(555) 555-5555</p>
              </div>
              <div>
                <p className='pt-8 text-lg'>Email</p>
                <p>email@example.com</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
                autocomplete="off"
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      placeholder='Name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      placeholder='Phone Number'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
               
                <div className='flex flex-col py-2'>
                  
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    placeholder='Message'
                  ></textarea>
                </div>
                <button className=' bg-[#00df9a] border shadow-lg p-3 w-full mt-2 font-medium hover:bg-[#009163] hover:text-white'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
 
    <Footer/>
    </>
  );
};

export default Contact;
