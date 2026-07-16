export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
      <p className="text-muted-foreground">
        Welcome to your dashboard. This page and its layout are fully protected.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Placeholder cards to show the layout working */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-6 bg-card rounded-xl border shadow-sm flex flex-col justify-between h-32"
          >
            <h3 className="font-semibold text-sm text-muted-foreground">Metric {i}</h3>
            <p className="text-2xl font-bold">1,234</p>
          </div>
        ))}
      </div>
    </div>
  );
}
