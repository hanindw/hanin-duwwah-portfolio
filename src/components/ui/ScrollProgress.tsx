
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // تغيير شدة النجوم بناءً على التمرير
      const stars = document.querySelectorAll('.star, .shooting-star');
      stars.forEach(star => {
        const element = star as HTMLElement;
        const baseOpacity = parseFloat(getComputedStyle(element).opacity);
        const newOpacity = baseOpacity * (1 - progress / 200);
        element.style.opacity = Math.max(0.1, newOpacity).toString();
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
