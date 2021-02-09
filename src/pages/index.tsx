export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='flex flex-col justify-center items-center p-10 '>
        <div className='font-cinzel text-3xl text-gold z-10'>EDITH</div>
        <div className='font-cinzel text-xl text-blue-dark'>
          "Even Dead, I'm The Hero"
        </div>
      </div>
      <div className='lg:mx-40'>
        <div className='mx-5 pb-5'>
          <div className='font-cinzel text-md'>Hall of fame</div>
          <hr className='bg-blue-dark border-blue-dark' />
        </div>
      </div>
    </div>
  );
}
