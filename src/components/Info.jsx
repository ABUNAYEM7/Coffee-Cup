import img1 from '../assets/icons/1.png'
import img2 from '../assets/icons/2.png'
import img3 from '../assets/icons/3.png'
import img4 from '../assets/icons/4.png'
const Info = () => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 justify-items-center'>
      <div className='flex flex-col gap-2 items-center justify-center text-center'>
        <img src={img1} alt="" />
        <h3 className='text-4xl font-semibold'>Awesome Aroma</h3>
        <p className='text-base w-11/12'>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className='flex flex-col gap-2 items-center justify-center text-center'>
        <img src={img2} alt="" />
        <h3 className='text-4xl font-semibold'>Pure Grades</h3>
        <p className='text-base w-11/12'>We served the coffee to you maintaining the best quality</p>
      </div>
      <div className='flex flex-col gap-2 items-center justify-center text-center'>
        <img src={img3} alt="" />
        <h3 className='text-4xl font-semibold'>Pure Grades</h3>
        <p className='text-base w-11/12'>The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div className='flex flex-col gap-2 items-center justify-center text-center'>
        <img src={img4} alt="" />
        <h3 className='text-4xl font-semibold'>Proper Roasting</h3>
        <p className='text-base w-11/12'>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
  )
}

export default Info
