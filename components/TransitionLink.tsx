"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { MouseEvent, ReactNode, forwardRef } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

// Top-level nav order left → right matches the navbar indicator order
const NAV_ORDER = ['/', '/projects', '/about', '/contact'];

function getNavDirection(from: string, to: string): 'forward' | 'backward' {
  const fromTop = '/' + (from.split('/')[1] ?? '');
  const toTop   = '/' + (to.split('/')[1]   ?? '');

  // Same section: going deeper is forward, coming back is backward
  if (fromTop === toTop) {
    return to.split('/').length > from.split('/').length ? 'forward' : 'backward';
  }

  const fromIdx = NAV_ORDER.indexOf(fromTop);
  const toIdx   = NAV_ORDER.indexOf(toTop);

  if (fromIdx === -1 || toIdx === -1) return 'forward';
  return toIdx >= fromIdx ? 'forward' : 'backward';
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(({ 
  href, 
  children, 
  className,
  onClick,
  ...props 
}, ref) => {
  const router   = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) onClick();

    const direction = getNavDirection(pathname, href);
    document.documentElement.dataset.navDirection = direction;

    if (typeof window !== 'undefined' && document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        router.push(href);
      });
      // Clean up direction attribute once the animation finishes
      transition.finished.finally(() => {
        delete document.documentElement.dataset.navDirection;
      });
    } else {
      router.push(href);
    }
  };

  return (
    <Link 
      ref={ref}
      href={href} 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
});

TransitionLink.displayName = 'TransitionLink';

export default TransitionLink;
