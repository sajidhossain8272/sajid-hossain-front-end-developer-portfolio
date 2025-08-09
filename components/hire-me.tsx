"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  Calendar,
  Linkedin,
  MessageCircle,
  TrendingUp,
  Clock,
  Sparkles,
  CheckCircle2,
  Workflow,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WhatIOfferProSection() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <section className='pt-16 sm:pt-28 relative'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-10 sm:mb-16'
        >
          <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6'>
            From idea to launch — done right, done fast.
          </h2>
          <p className='text-white/80 max-w-3xl mx-auto text-base sm:text-xl'>
            I help startups and businesses ship clean, fast, easy‑to‑use web
            apps with clear messaging and a calm process. Fixed scope, reliable
            delivery, and friendly support after launch.
          </p>
        </motion.div>

        {/* Simple value strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='max-w-5xl mx-auto mb-10 sm:mb-14'
        >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
  {[
    "Fast to load, easy to use",
    "Clear words, simple flow",
    "Weeks to launch—not months",
  ].map((t, i) => {
    const grads = [
      "from-emerald-400 via-teal-400 to-cyan-400",
      "from-blue-400 via-cyan-400 to-sky-400",
      "from-pink-400 via-purple-400 to-fuchsia-400",
    ];
    const delay = i * 0.25;

    return (
      <motion.div
        key={t}
        className="relative bg-white/5 border border-white/10 rounded-xl py-4 overflow-hidden"
        transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, delay }}
        whileHover={{ scale: 1.015 }}
      >
        {/* animated glow layer */}
        <motion.div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${grads[i]} opacity-0`}
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay }}
        />
        {/* soft outer glow on hover only */}
        <div className="absolute inset-0 rounded-xl pointer-events-none transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.25)]" />

        <div className="relative z-10 text-sm sm:text-base text-white/90 font-semibold">
          {t}
        </div>
      </motion.div>
    );
  })}
</div>
        </motion.div>

        {/* Three promises */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16'>
          {[
            {
              icon: TrendingUp,
              title: "Results over buzzwords",
              desc: "Expect faster pages, clearer journeys, and sign‑ups or sales moving in the right direction.",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              icon: Clock,
              title: "Plans with dates",
              desc: "We agree on scope and milestones up front. You’ll know what’s coming and when.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: ShieldCheck,
              title: "Support that sticks",
              desc: "After launch I stay close: small fixes, improvements, and ideas to keep growth steady.",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
                className='group h-full'
              >
                <div
                  className={`bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl h-full ${
                    isMobile ? "p-5" : "p-8 backdrop-blur-md"
                  } shadow-xl`}
                >
                  <div
                    className={`mx-auto mb-5 sm:mb-7 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r ${card.gradient} shadow`}
                  >
                    <Icon className='h-7 w-7 sm:h-9 sm:w-9 text-white' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-white text-center mb-2 sm:mb-3'>
                    {card.title}
                  </h3>
                  <p className='text-white/80 text-sm sm:text-base text-center leading-relaxed'>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* WHY / HOW / WHAT — enhanced & visible at once */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl ${
            isMobile ? "p-5" : "p-10 backdrop-blur-xl"
          } shadow-xl max-w-6xl mx-auto mb-10 sm:mb-16`}
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
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />{" "}
                  Clear plans and calm delivery—even with tight timelines.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />{" "}
                  Modern React/Next.js builds with simple content and clean UX.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />{" "}
                  Search‑friendly pages without jargon or guesswork.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0' />{" "}
                  Long‑term view: I care about what happens after launch.
                </li>
              </ul>

              {/* tiny trust strip */}
              <div className='mt-4 flex flex-wrap items-center gap-2'>
                <span className='text-[11px] uppercase tracking-wide text-white/60'>
                  Work styles:
                </span>
                {["Project", "Monthly care", "One‑off fixes"].map((chip) => (
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
                plans change, we re‑scope before work continues.
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
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />{" "}
                  A fast, tidy site or app that people understand.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />{" "}
                  Clear navigation and copy that explains your offer.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />{" "}
                  Basic analytics with a short monthly summary.
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='h-5 w-5 text-fuchsia-300 shrink-0' />{" "}
                  Post‑launch help for fixes and improvements.
                </li>
              </ul>

              {/* micro‑outcomes */}
              <div className='mt-4 grid grid-cols-2 gap-2'>
                {[
                  "Shorter time to first reply",
                  "Fewer drop‑offs on key pages",
                  "Cleaner forms & checkouts",
                  "Clearer calls‑to‑action",
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

          {/* subtle glow */}
          <div
            className='pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-white/5 to-pink-500/10 blur-xl opacity-10 sm:opacity-30'
            aria-hidden='true'
          />
        </motion.div>

        {/* Testimonial + Risk‑free start */}
        <div className='max-w-5xl mx-auto grid gap-6 sm:grid-cols-3'>
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='sm:col-span-2 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 backdrop-blur-md'
          >
            <p className='text-white/90 text-base sm:text-lg leading-relaxed'>
              “Our site became quicker and easier to use. Updates were regular
              and clear. Launch was smooth, and we kept improving after.”
            </p>
            <footer className='mt-3 text-white/60 text-sm'>
              — Rony, Founder at Grafixr
            </footer>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 backdrop-blur-md flex flex-col items-center text-center'
          >
            <Sparkles className='h-8 w-8 text-white mb-3' />
            <div className='text-white font-semibold'>Risk‑free start</div>
            <div className='text-white/70 text-sm mt-1'>
              We begin with a paid first milestone (audit + plan). If it isn’t a
              fit, you can stop there. You keep the audit, plan, and any code
              from that milestone.
            </div>
          </motion.div>
        </div>

        {/* CTA Card + Dialog */}
        <motion.div
          className={`mt-10 sm:mt-16 relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl ${
            isMobile ? "p-5" : "p-10 backdrop-blur-xl"
          } shadow-xl max-w-5xl mx-auto`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='text-center'>
            <h4 className='text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 mb-3 sm:mb-4'>
              Ready when you are.
            </h4>
            <p className='text-white/80 text-base sm:text-lg max-w-3xl mx-auto'>
              Tell me your goal and timeline. I’ll reply with a short plan and a
              fair price.
            </p>

            <div className='mt-5 sm:mt-8'>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className='w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-xl border-0 px-6'>
                    Hire me
                  </Button>
                </DialogTrigger>

                <DialogContent className='border-white/10 bg-white/5 text-white backdrop-blur-xl'>
                  <DialogHeader>
                    <DialogTitle className='text-white'>
                      Choose how to connect
                    </DialogTitle>
                    <DialogDescription className='text-white/70'>
                      Not sure what you need? I’ll help you scope it in minutes.
                    </DialogDescription>
                  </DialogHeader>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-2'>
                    <a
                      href='mailto:sajidhossain8272@gmail.com?subject=Project%20Inquiry'
                      className='group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition'
                    >
                      <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500'>
                        <Mail className='h-5 w-5 text-white' />
                      </div>
                      <div>
                        <div className='font-semibold'>Send email</div>
                        <div className='text-xs text-white/70'>
                          Share your goals and timeline
                        </div>
                      </div>
                    </a>

                    <a
                      href='https://calendly.com/sajidhossain8272/30min'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition'
                    >
                      <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500'>
                        <Calendar className='h-5 w-5 text-white' />
                      </div>
                      <div>
                        <div className='font-semibold'>Book a free call</div>
                        <div className='text-xs text-white/70'>
                          We’ll map the first steps
                        </div>
                      </div>
                    </a>

                    <a
                      href='https://linkedin.com/in/brokephilanthropist'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition'
                    >
                      <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500'>
                        <Linkedin className='h-5 w-5 text-white' />
                      </div>
                      <div>
                        <div className='font-semibold'>Message on LinkedIn</div>
                        <div className='text-xs text-white/70'>
                          DM is fine too
                        </div>
                      </div>
                    </a>

                    <a
                      href='https://wa.me/8801329530468'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition'
                    >
                      <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-600'>
                        <MessageCircle className='h-5 w-5 text-white' />
                      </div>
                      <div>
                        <div className='font-semibold'>WhatsApp</div>
                        <div className='text-xs text-white/70'>
                          Quick questions? Ping me
                        </div>
                      </div>
                    </a>
                  </div>

                  <DialogFooter>
                    <Button
                      variant='ghost'
                      className='text-white/80 hover:text-white'
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Glow */}
          <div
            className='pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-white/5 to-pink-500/10 blur-xl opacity-10 sm:opacity-30'
            aria-hidden='true'
          />
        </motion.div>

        {/* FAQ — practical (6 Qs) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-5xl mx-auto mt-8'
        >
          <Accordion
            type='single'
            collapsible
            className='bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-2 sm:p-4'
          >
            <AccordionItem value='q1'>
              <AccordionTrigger className='text-white'>
                How do you price work?
              </AccordionTrigger>
              <AccordionContent className='text-white/80'>
                Fixed price tied to a clear scope and milestones. No surprise
                costs. Ongoing help is available as a monthly plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='q2'>
              <AccordionTrigger className='text-white'>
                How fast can we start?
              </AccordionTrigger>
              <AccordionContent className='text-white/80'>
                Discovery can usually start within a few days. Smaller builds
                ship in 2–4 weeks. Bigger scopes are phased so you see wins
                early.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='q3'>
              <AccordionTrigger className='text-white'>
                Do you work with new founders?
              </AccordionTrigger>
              <AccordionContent className='text-white/80'>
                Yes. I keep the plan simple, write clear copy where needed, and
                suggest a small first release we can grow from.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='q4'>
              <AccordionTrigger className='text-white'>
                What happens after launch?
              </AccordionTrigger>
              <AccordionContent className='text-white/80'>
                We track basics (traffic, sign‑ups, questions asked), fix rough
                edges, and plan small, steady improvements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='q5'>
              <AccordionTrigger className='text-white'>
                Can you improve an existing site?
              </AccordionTrigger>
              <AccordionContent className='text-white/80'>
                Absolutely. I audit what’s there, simplify the flow and content,
                speed things up, and clean up technical issues.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='q6'>
              <AccordionTrigger className='text-white'>
                What tools do you use?
              </AccordionTrigger>
              <AccordionContent className='text-white/80'>
                React/Next.js, modern hosting, and sensible analytics. If
                automation helps (reports, content, alerts), I set that up too.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
