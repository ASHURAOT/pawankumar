import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
  secondary: "bg-secondary text-secondary-foreground hover:bg-accent border-border",
  ghost: "bg-transparent text-foreground hover:bg-accent border-border",
};

type Common = { children: ReactNode; variant?: keyof typeof styles; className?: string };

export function Button(props: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, variant = "primary", className, ...rest } = props;
  return <button className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50", styles[variant], className)} {...rest}>{children}</button>;
}

export function ButtonLink(props: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { children, variant = "primary", className, ...rest } = props;
  return <a className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", styles[variant], className)} {...rest}>{children}</a>;
}