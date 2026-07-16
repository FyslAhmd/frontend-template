export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 p-4 relative overflow-hidden">
      {/* Background decorations for a premium feel */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-700/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">{children}</div>
    </div>
  );
}
