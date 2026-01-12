import Link from 'next/link';
import { Layers } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Layers className="w-8 h-8 text-primary" />
      <span className="font-heading font-bold text-xl text-dark dark:text-white">
        Bright<span className="text-primary">Edge</span>
      </span>
    </Link>
  );
}