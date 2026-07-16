export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex w-full">
      {/* Left Branding Side (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-zinc-950 p-10 text-white relative">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight">Nexus</h1>
        </div>
        <div className="relative z-10 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This template has saved me countless hours of work and helped me deliver
              stunning projects faster than ever before.&rdquo;
            </p>
            <footer className="text-sm text-neutral-300">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="flex flex-1 items-center justify-center p-8 bg-background relative overflow-hidden">
        {/* Background decorations for a premium feel on the form side */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="w-full max-w-md relative z-10">{children}</div>
      </div>
    </div>
  );
}
