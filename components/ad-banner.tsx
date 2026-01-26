export default function AdBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full bg-muted rounded-lg p-4 text-center ${className}`}>
      <div className="text-muted-foreground text-sm">Advertisement</div>
      <div className="h-[90px] flex items-center justify-center border border-dashed border-muted-foreground/30 rounded">
        <span className="text-muted-foreground">Ad Space</span>
      </div>
    </div>
  )
}

