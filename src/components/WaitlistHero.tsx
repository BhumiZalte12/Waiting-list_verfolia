import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { CheckCircle2 } from 'lucide-react';

export function WaitlistHero() {
  // Replace 'YOUR_FORM_ID' with the actual ID from your Formspree dashboard
  const [state, handleSubmit] = useForm("xwpqwvka");

  if (state.succeeded) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="
                relative z-10 flex flex-col items-center justify-center
                w-[355px] md:w-[410px] h-[288px] px-8 py-10
                rounded-[1.7rem] bg-white/13 border border-white/23
                shadow-[0_8px_70px_8px_rgba(65,130,237,0.16)]
                backdrop-blur-[13px] text-center
            "
            style={{
                boxShadow: '0 3px 39px 6px rgba(96,180,255,0.13)',
                border: '1.7px solid rgba(233,245,255,0.18)',
                background: 'linear-gradient(120deg,rgba(40,60,145,0.22) 0%,rgba(40,70,144,0.17) 100%)',
                backdropFilter: 'blur(18px)',
            }}
        >
            <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
            <h1 className="font-bold text-2xl text-white tracking-tight drop-shadow-md">
                Thanks for joining!
            </h1>
            <p className="mt-2 text-blue-100/80">
                We'll be in touch soon.
            </p>
        </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="
        relative z-10
        flex flex-col items-center
        w-[355px] md:w-[410px] px-8 py-10
        rounded-[1.7rem]
        bg-white/13
        border border-white/23
        shadow-[0_8px_70px_8px_rgba(65,130,237,0.16)]
        backdrop-blur-[13px]
        "
      style={{
        boxShadow: '0 3px 39px 6px rgba(96,180,255,0.13)', // extra blue glow
        border: '1.7px solid rgba(233,245,255,0.18)',
        background: 'linear-gradient(120deg,rgba(40,60,145,0.22) 0%,rgba(40,70,144,0.17) 100%)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <h1 className="font-bold text-[1.3rem] md:text-2xl mb-6 text-white tracking-tight drop-shadow-md text-center">
        Join the Waitlist for Verfolia
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="
            w-full rounded-xl px-6 py-[1.1em]
            border border-white/20
            bg-white/30
            placeholder:text-blue-100 placeholder:font-medium
            text-white text-base
            shadow focus:ring-2 focus:ring-[#90e0fc] focus:outline-none
            transition-all
            backdrop-blur
          "
          style={{
            background: 'rgba(255,255,255,0.17)',
            boxShadow: '0 0 0 1.2px rgba(96,175,255,0.056)',
          }}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="
            w-full mt-1
            rounded-xl px-6 py-4 font-semibold
            bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-200
            text-slate-900 text-base
            shadow transition-all hover:scale-[1.028] active:scale-95
            tracking-wide
            disabled:opacity-70 disabled:cursor-not-allowed
          "
          style={{
            letterSpacing: '0.01em',
            boxShadow: '0 3px 38px #70e7ff3e'
          }}
        >
          {state.submitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
    </motion.div>
  );
}
