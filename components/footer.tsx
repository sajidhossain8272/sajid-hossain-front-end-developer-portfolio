"use client";

import Link from "next/link";
import { Mail, Linkedin, MessageCircle, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-white/10 bg-black/60'>
      <div className='max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4'>
        <div>
          <div className='text-white font-bold text-lg'>Sajid.dev</div>
          <p className='text-white/70 mt-2 text-sm leading-relaxed max-w-sm'>
            I ship clean, fast, easy-to-use web apps that drive results and keep
            your business ahead.
          </p>
        </div>

        <div>
          <div className='text-white/90 font-semibold mb-3'>Quick Links</div>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link href='#about' className='text-white/70 hover:text-white'>
                About
              </Link>
            </li>
            <li>
              <Link href='#projects' className='text-white/70 hover:text-white'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='#skills' className='text-white/70 hover:text-white'>
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='#experience'
                className='text-white/70 hover:text-white'
              >
                Experience
              </Link>
            </li>
            <li>
              <Link href='#offer' className='text-white/70 hover:text-white'>
                What I Offer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className='text-white/90 font-semibold mb-3'>Contact</div>
          <ul className='space-y-2 text-sm'>
            <li className='text-white/70'>Dhaka, Bangladesh</li>
            <li>
              <a
                href='mailto:sajidhossain8272@gmail.com'
                className='text-white/70 hover:text-white'
              >
                sajidhossain8272@gmail.com
              </a>
            </li>
            <li>
              <a
                href='https://wa.me/8801329530468'
                target='_blank'
                className='text-white/70 hover:text-white'
              >
                +880 1329-530468
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className='text-white/90 font-semibold mb-3'>Follow</div>
          <div className='flex items-center gap-3'>
            <a
              href='mailto:sajidhossain8272@gmail.com'
              className='p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white'
              aria-label='Email'
            >
              <Mail size={18} />
            </a>
            <a
              href='https://linkedin.com/in/brokephilanthropist'
              target='_blank'
              className='p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white'
              aria-label='LinkedIn'
            >
              <Linkedin size={18} />
            </a>
            <a
              href='https://wa.me/8801329530468'
              target='_blank'
              className='p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white'
              aria-label='WhatsApp'
            >
              <MessageCircle size={18} />
            </a>
            <a
              href='https://github.com/sajidhossain8272'
              target='_blank'
              className='p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white'
              aria-label='GitHub'
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 py-4 text-xs text-white/50 flex items-center justify-between'>
          <span>© {year} Sajid Hossain. All rights reserved.</span>
          <a href='#hero' className='hover:text-white/80'>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
