import { SignedIn, UserButton } from '@clerk/clerk-react';
import HeroSection from '../src/components/HeroSection';

export default function App() {
  return (
    <header>
      <HeroSection/>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}