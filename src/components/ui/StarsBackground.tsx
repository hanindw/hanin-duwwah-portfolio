
import { useEffect, useState, useCallback } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: "small" | "medium" | "large" | "colored" | "accent";
  duration: number;
  delay: number;
  floating: boolean;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface GlowStar {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface ConstellationDot {
  id: string;
  x: number;
  y: number;
}

interface Constellation {
  id: number;
  x: number;
  y: number;
  dots: ConstellationDot[];
}

interface StarsBackgroundProps {
  sectionHeight?: number;
  intensity?: "low" | "medium" | "high";
}

export function StarsBackground({ 
  sectionHeight = 3000,
  intensity = "medium" 
}: StarsBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [glowStars, setGlowStars] = useState<GlowStar[]>([]);
  const [constellations, setConstellations] = useState<Constellation[]>([]);
  const [scrollY, setScrollY] = useState(0);

  // تتبع التمرير
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تحديد عدد النجوم بناءً على الشدة
  const getStarCount = useCallback(() => {
    switch(intensity) {
      case 'low': return window.innerWidth < 768 ? 30 : 60;
      case 'high': return window.innerWidth < 768 ? 100 : 200;
      default: return window.innerWidth < 768 ? 60 : 120;
    }
  }, [intensity]);

  // إنشاء النجوم الثابتة
  const generateStars = useCallback(() => {
    const starCount = getStarCount();
    const newStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      // توزيع النجوم بشكل عشوائي على ارتفاع القسم
      const yPosition = Math.random() * sectionHeight;
      
      newStars.push({
        id: i,
        x: Math.random() * 100, // نسبة مئوية من العرض
        y: yPosition, // قيمة فعلية بالبكسل
        size: Math.random() > 0.7 
          ? Math.random() > 0.5 ? "colored" : "accent"
          : Math.random() > 0.7 ? "large" : Math.random() > 0.4 ? "medium" : "small",
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        floating: Math.random() > 0.5,
      });
    }

    return newStars;
  }, [sectionHeight, getStarCount]);

  // إنشاء النجوم المتساقطة
  const generateShootingStars = useCallback(() => {
    const shootingCount = intensity === 'high' ? 5 : intensity === 'low' ? 2 : 3;
    const newShootingStars: ShootingStar[] = [];

    for (let i = 0; i < shootingCount; i++) {
      newShootingStars.push({
        id: i + 1000,
        x: Math.random() * 100,
        y: Math.random() * sectionHeight,
        duration: 1 + Math.random() * 2,
        delay: Math.random() * 15,
      });
    }

    return newShootingStars;
  }, [sectionHeight, intensity]);

  // توليد النجوم الكبيرة اللامعة
  const generateGlowStars = useCallback(() => {
    const newGlowStars: GlowStar[] = [];
    const glowCount = intensity === 'high' ? 8 : intensity === 'low' ? 3 : 5;

    for (let i = 0; i < glowCount; i++) {
      newGlowStars.push({
        id: i + 2000,
        x: Math.random() * 100,
        y: Math.random() * sectionHeight,
        size: 20 + Math.random() * 60,
      });
    }

    return newGlowStars;
  }, [sectionHeight, intensity]);

  // توليد مجموعات نجمية
  const generateConstellations = useCallback(() => {
    const newConstellations: Constellation[] = [];
    const constellationCount = intensity === 'high' ? 6 : intensity === 'low' ? 2 : 4;

    for (let i = 0; i < constellationCount; i++) {
      const dots: ConstellationDot[] = [];
      const dotCount = 3 + Math.floor(Math.random() * 5);

      for (let j = 0; j < dotCount; j++) {
        dots.push({
          id: `${i}-${j}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }

      newConstellations.push({
        id: i + 3000,
        x: Math.random() * 100,
        y: Math.random() * sectionHeight,
        dots,
      });
    }

    return newConstellations;
  }, [sectionHeight, intensity]);

  useEffect(() => {
    setStars(generateStars());
    setShootingStars(generateShootingStars());
    setGlowStars(generateGlowStars());
    setConstellations(generateConstellations());

    // تحديث النجوم عند تغيير حجم النافذة
    const handleResize = () => {
      setStars(generateStars());
      setShootingStars(generateShootingStars());
      setGlowStars(generateGlowStars());
      setConstellations(generateConstellations());
    };

    window.addEventListener("resize", handleResize);

    // إعادة توليد النجوم المتساقطة بشكل دوري
    const shootingStarInterval = setInterval(() => {
      setShootingStars(generateShootingStars());
    }, 20000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(shootingStarInterval);
    };
  }, [generateStars, generateShootingStars, generateGlowStars, generateConstellations]);

  // حساب إزاحة النجم بناءً على التمرير
  const getStarOffset = (starY: number) => {
    // النجوم تتحرك أبطأ من التمرير الفعلي لتخلق تأثير المنظور
    const parallaxFactor = 0.3;
    return starY - (scrollY * parallaxFactor);
  };

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ height: `${sectionHeight}px` }}
    >
      {/* النجوم الكبيرة اللامعة */}
      {glowStars.map((star) => {
        const offsetY = getStarOffset(star.y);
        // إظهار النجم فقط إذا كان ضمن نطاق العرض
        if (offsetY < -100 || offsetY > window.innerHeight + 100) return null;
        
        return (
          <div
            key={star.id}
            className="glow-star absolute"
            style={{
              left: `${star.x}%`,
              top: `${offsetY}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        );
      })}

      {/* مجموعات النجوم */}
      {constellations.map((constellation) => {
        const offsetY = getStarOffset(constellation.y);
        if (offsetY < -200 || offsetY > window.innerHeight + 200) return null;
        
        return (
          <div
            key={constellation.id}
            className="constellation absolute"
            style={{
              left: `${constellation.x}%`,
              top: `${offsetY}px`,
              width: '100px',
              height: '100px',
            }}
          >
            {constellation.dots.map((dot) => (
              <div
                key={dot.id}
                className="constellation-dot absolute"
                style={{
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
                }}
              />
            ))}
          </div>
        );
      })}

      {/* النجوم العادية */}
      {stars.map((star) => {
        const offsetY = getStarOffset(star.y);
        // إظهار النجم فقط إذا كان ضمن نطاق العرض
        if (offsetY < -50 || offsetY > window.innerHeight + 50) return null;
        
        return (
          <div
            key={star.id}
            className={`star star-${star.size} absolute ${star.floating ? 'animate-float' : ''}`}
            style={{
              left: `${star.x}%`,
              top: `${offsetY}px`,
              '--twinkle-duration': `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              animationName: star.floating ? 'twinkle, float-star' : 'twinkle',
              animationDuration: star.floating 
                ? `${star.duration}s, ${10 + Math.random() * 20}s` 
                : `${star.duration}s`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* النجوم المتساقطة */}
      {shootingStars.map((star) => {
        const offsetY = getStarOffset(star.y);
        if (offsetY < -100 || offsetY > window.innerHeight + 100) return null;
        
        return (
          <div
            key={star.id}
            className="shooting-star absolute"
            style={{
              left: `${star.x}%`,
              top: `${offsetY}px`,
              '--shoot-duration': `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}
