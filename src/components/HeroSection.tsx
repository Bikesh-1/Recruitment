import {  SignedOut, SignInButton } from '@clerk/clerk-react';

function HeroSection() {
  return (
    <div>
      <SignedOut>
        
      <div className="min-h-screen w-full relative">
 {/* Dark Dot Matrix */}
 <div
   className="absolute inset-0 z-0"
   style={{
     backgroundColor: '#0a0a0a',
     backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
     backgroundSize: '10px 10px',
     imageRendering: 'pixelated',
   }}
 />
 <div className='px-14 py-4 flex items-center justify-between relative z-10' >
          <img src="https://ik.imagekit.io/es6xialea/logowithoutname_FRoJAY4ve?updatedAt=1755297005039" className='w-12' alt="" />
          <div className='text-white bg-[#6D4DFE] w-auto px-6 py-2 rounded-md'>
          <SignInButton />
          </div>
          
        </div>
        <div className='relative z-10 text-white flex flex-col justify-center items-center mt-48'>
          <div className='text-6xl font-medium'>
            <h1>Welcome to</h1>
          </div>
          <div className='text-9xl font-black flex items-center justify-center gap-8'>
            <h1>E-CELL SMVIT</h1>
            <img src="https://ik.imagekit.io/es6xialea/logowithoutname_FRoJAY4ve?updatedAt=1755297005039" className='w-28 p-2' />
          </div>
          <div className='text-6xl font-medium'>Recruitment 2025</div>
        </div>
</div>
      </SignedOut>
    </div>
  )
}

export default HeroSection