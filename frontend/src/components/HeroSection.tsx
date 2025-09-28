import { SignedOut, SignInButton } from '@clerk/clerk-react';

function HeroSection() {
  return (
    <div>
      <SignedOut>
        <div className="min-h-screen w-full relative">
          {/* Dark Dot Matrix */}
          <div className="absolute inset-0 z-0 hero-background" />
          {/* Header */}
          <div className="px-4 sm:px-8 md:px-14 py-4 flex items-center justify-between relative z-10">
            <img
              src="https://ik.imagekit.io/es6xialea/logowithoutname_FRoJAY4ve?updatedAt=1755297005039"
              className="w-10 sm:w-12"
              alt=""
            />
            <div className="text-white bg-[#6D4DFE] w-auto px-4 sm:px-6 py-2 rounded-md">
              <SignInButton />
            </div>
          </div>
          {/* Hero Content */}
          <div className="relative z-10 text-white flex flex-col justify-center items-center mt-24 sm:mt-32 md:mt-48 px-4">
            <div className="text-3xl sm:text-5xl md:text-6xl font-medium text-center">
              <h1>Welcome to</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4 sm:mt-6">
              <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-center sm:text-left">
                E-CELL SMVIT
              </h1>
              <img
                src="https://ik.imagekit.io/es6xialea/logowithoutname_FRoJAY4ve?updatedAt=1755297005039"
                className="w-16 sm:w-24 md:w-28 p-2"
                alt="E-CELL SMVIT Logo"
              />
            </div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-medium mt-4 text-center">
              Recruitment 2025
            </div>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}

export default HeroSection;