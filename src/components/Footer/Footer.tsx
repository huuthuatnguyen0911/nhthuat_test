export default function Footer() {
  return (
    <div className='text-center mt-4 space-y-4 bg-backgroundColor-footer'>
      <div className='py-[50.5px] max-w-[303px] m-auto space-y-1 leading-6'>
        <p className='text-[16px] text-textColor font-bold'>
          Apply{' '}
          <span className='bg-linear-gradient text-textColor-linear inline-block text-transparent bg-clip-text'>
            Copin Affilate Program
          </span>{' '}
          to get more benefits!
        </p>
        <button className='text-[13px] text-textColor-contact hover:text-blue-300 transition-colors'>Contact us</button>
      </div>
    </div>
  )
}
