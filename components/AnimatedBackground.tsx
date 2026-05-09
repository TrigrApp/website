"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-orbit-slow" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-purple-500/6 blur-[100px] animate-orbit-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[80px] animate-orbit-slowest" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-fuchsia-500/4 blur-[90px] animate-orbit-slower" />
    </div>
  );
}
