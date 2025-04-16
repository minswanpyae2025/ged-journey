
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn('py-10 text-center', className)}>
      <h1 className="mb-3 font-bold text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
      {description && (
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
