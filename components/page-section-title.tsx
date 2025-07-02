import { cn } from "@/lib/utils";

interface PageSectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageSectionTitle({ title, description, className }: PageSectionTitleProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          {description}
        </p>
      )}
    </div>
  );
}
