import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      'mb-12',
      center && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl text-white">
          {subtitle}
        </p>
      )}
    </div>
  );
}