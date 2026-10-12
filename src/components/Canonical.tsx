import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://kid-spark.app';

export default function Canonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "/" stays "/", "/privacy-policy/" becomes "/privacy-policy"
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const href = `${SITE_URL}${path}`;

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = href;
  }, [pathname]);

  return null;
}
