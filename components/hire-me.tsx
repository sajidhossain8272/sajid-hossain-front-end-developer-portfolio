"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  Sparkles,
  CheckCircle2,
  Workflow,
  FileText,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WhatIOfferProSection() {
  const isMobile = useIsMobile();

  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* WHY / HOW / WHAT — enhanced & visible at once */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl ${
            isMobile ? "p-5" : "p-10 backdrop-blur-xl"
          } shadow-xl max-w-6xl mx-auto`}
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7'>
            {/* WHY */}
            <div className='bg-white/5 border border-white/10 rounded-xl p-5'>
              <div className='flex items-center gap-2 mb-3'>
                <ShieldCheck className='h-5 w-5 text-emerald-400' />
                <h4 className='text-white text-xl font-bold'>Why hire me</h4>
              </div>
              <ul className='space-y-2 text-white/80 text-sm sm:text-base'>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />
                  Clear plans and calm delivery—even with tight timelines.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />
                  Modern React/Next.js builds with simple content and clean UX.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />
                  Search-friendly pages without jargon or guesswork.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />
                  Long-term view: I care about what happens after launch.
                </li>
              </ul>

              <div className='mt-4 flex flex-wrap items-center gap-2'>
                <span className='text-[11px] uppercase tracking-wide text-white/60'>
                  Work styles:
                </span>
                {["Project", "Monthly care", "One-off fixes"].map((chip) => (
                  <span
                    key={chip}
                    className='text-xs text-white/80 bg-white/10 border border-white/10 px-2 py-1 rounded-md'
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* HOW */}
            <div className='bg-white/5 border border-white/10 rounded-xl p-5'>
              <div className='flex items-center gap-2 mb-3'>
                <Workflow className='h-5 w-5 text-sky-300' />
                <h4 className='text-white text-xl font-bold'>How we’ll work</h4>
              </div>
              <ol className='space-y-2 text-white/80 text-sm sm:text-base'>
                <li className='flex gap-2'>
                  <Clock className='h-5 w-5 text-sky-300 shrink-0' />
                  Short call → goals, budget, timeline.
                </li>
                <li className='flex gap-2'>
                  <FileText className='h-5 w-5 text-sky-300 shrink-0' />
                  Written scope with milestones and a fixed price.
                </li>
                <li className='flex gap-2'>
                  <Sparkles className='h-5 w-5 text-sky-300 shrink-0' />
                  Weekly updates with a link to see progress.
                </li>
                <li className='flex gap-2'>
                  <ShieldCheck className='h-5 w-5 text-sky-300 shrink-0' />
                  Staging review, tidy revisions, launch checklist.
                </li>
              </ol>

              <div className='mt-4 text-white/70 text-sm'>
                <span className='font-semibold text-white'>Guarantee:</span> if
                plans change, we re-scope before work continues.
              </div>
            </div>

            {/* WHAT */}
            <div className='bg-white/5 border border-white/10 rounded-xl p-5'>
              <div className='flex items-center gap-2 mb-3'>
                <TrendingUp className='h-5 w-5 text-fuchsia-300' />
                <h4 className='text-white text-xl font-bold'>
                  What you’ll get
                </h4>
              </div>
              <ul className='space-y-2 text-white/80 text-sm sm:text-base'>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />
                  A fast, tidy site or app that people understand.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />
                 Easy navigation and faster load times for a smoother experience.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />
                  Basic analytics with a short monthly summary.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />
                  Post-launch help for fixes and improvements.
                </li>
              </ul>

              <div className='mt-4 grid grid-cols-2 gap-2'>
                {[
                  "Shorter time to first reply",
                  "Fewer drop-offs on key pages",
                  "Cleaner forms & checkouts",
                  "Clearer calls-to-action",
                ].map((x) => (
                  <div
                    key={x}
                    className='text-xs text-white/80 bg-white/10 border border-white/10 px-3 py-2 rounded-lg'
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className='pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-white/5 to-pink-500/10 blur-xl opacity-10 sm:opacity-30'
            aria-hidden='true'
          />
        </motion.div>
      </div>
    </section>
  );
}
