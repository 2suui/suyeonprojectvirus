import clsx from "clsx";
import type { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function ContentSection({ id, title, subtitle, children, className = "" }: ContentSectionProps) {
  return (
    <section id={id} className={clsx("tw-bac7a5bc00", className)}>
      <div className="tw-de042df702">
        <h2 className="tw-1fb7cec0ac">
          {title}
        </h2>
        {subtitle && (
          <p className="tw-72d51cea24">
            {subtitle}
          </p>
        )}
        <div className="tw-7c8f6a9b4e">
          {children}
        </div>
      </div>
    </section>
  );
}
