import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {lusitana} from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-3xl">Harsh Verma</h1>
      <p className='mt-4'>
        I am a Software Engineer looking for a job in the United States. I have 2 years of experience building
        reliable and scalable software systems at Agilysys, a leading provider of hospitality software. 
      </p>
    </main>
  );
}
