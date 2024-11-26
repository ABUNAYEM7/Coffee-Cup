import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddCoffee = () => {

  const submitHandler =(e)=>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const price = form.price.value;
    const image = form.image.value;
    const newCoffee ={name,chef,supplier,test,category,price,image}

    fetch('http://localhost:5000/AddCoffee',{
      method:'Post',
      headers :{'content-type' :'application/json'},
      body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: 'success',
          text: 'Coffee Added ',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        form.reset()
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'Coffee Not Added',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
        
      }
    })
  }

  return (
    <div className='max-w-screen-xl mx-auto my-12 p-6 flex flex-col gap-8'>
        <div className='w-11/12 md:w-4/5 mx-auto'>
            <Link to={'/'} className='btn'>Back To Home</Link>
        </div>
        {/* Add-Coffee-container */}
      <div className='w-11/12 md:w-4/5 mx-auto bg-[#F4F3F0] p-4'>
      {/* info-container */}
      <div className='space-y-3 text-center'>
        <h3 className='text-4xl font-bold'>AddCoffee</h3>
        <p className='text-lg font-semibold w-full md:w-2/3 mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

      </div>
      {/* form-container */}
      <form
       onSubmit={submitHandler}
       className='grid grid-cols-1 md:grid-cols-2 gap-5 p-4'>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
           name='name'
           type="text" placeholder="Name" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input
           name='chef'
           type="text" placeholder="Chef" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input
           name='supplier'
           type="text" placeholder="Supplier" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Test</span>
          </label>
          <input
           name='test'
           type="text" placeholder="Test" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
           name='category'
           type="text" placeholder="Category" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
           name='price'
           type="text" placeholder="Price" className="input input-bordered" required />
        </div>
      <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
           name='image'
           type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>
      <div className="form-control md:col-span-2">
         <button className='btn bg-[#D2B48C] text-secondary'>Add Coffee</button>
        </div>
      </form>
      <div>
      </div>
      </div>
    </div>
  )
}

export default AddCoffee
