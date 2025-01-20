"use client";

export function EmploymentStatus() {
  const statuses = [
    { label: "Permanent", count: 324, percentage: 48, color: "#8b5cf6" },
    { label: "Contract", count: 121, percentage: 32, color: "#10b981" },
    { label: "Probation", count: 72, percentage: 20, color: "#ef4444" },
  ];

  return (
    <div className="space-y-4">
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        {statuses.map((status) => (
          <div
            key={status.label}
            className="h-full float-left"
            style={{
              width: `${status.percentage}%`,
              backgroundColor: status.color,
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {statuses.map((status) => (
          <div key={status.label}>
            <div className="text-2xl font-bold">{status.count}</div>
            <div className="text-sm text-gray-500">{status.label}</div>
            <div className="text-xs text-gray-400">{status.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
