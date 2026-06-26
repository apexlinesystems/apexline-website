const items = [
  'WhatsApp AI Receptionist',
  'Lead Capture & Qualification',
  'CRM Integration',
  'Workflow Automation',
  'Database Reactivation',
  'Custom AI Agents',
  'Live Dashboards',
  'Booking Systems',
  'Email Automation',
  'API Integrations',
  'Content Pipelines',
  'Performance Tracking',
]

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-5 text-[11px] uppercase tracking-[0.18em] text-muted-text">
            {item}
          </span>
          <span className="text-accent" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  )
}

export function Ticker() {
  return (
    <div
      className="overflow-hidden border-y border-white/[0.06] py-[14px]"
      style={{ background: '#0D0D12' }}
      aria-hidden="true"
    >
      <div className="apex-marquee flex w-max">
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  )
}
