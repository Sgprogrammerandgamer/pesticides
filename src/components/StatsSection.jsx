import { useEffect, useRef, useState } from 'react';

function CountUpStat({ stat, index }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = stat.decimals
        ? (eased * stat.value).toFixed(stat.decimals)
        : Math.floor(eased * stat.value);
      setCount(next);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [started, stat]);

  return (
    <article ref={ref} className={`stat-card ripple-card ripple-observe delay-${index % 3}`}>
      <h3>
        {typeof count === 'number' ? count.toLocaleString('en-IN') : count}
        {stat.suffix}
      </h3>
      <p>{stat.label}</p>
    </article>
  );
}

export default function StatsSection({ business }) {
  return (
    <section className="section stats-section" id="stats">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Our impact</span>
          <h2>Measured outcomes that build trust</h2>
          <p>
            We track service quality, repeat support, and long-term satisfaction
            across residential and commercial work.
          </p>
        </div>
        <div className="stats-grid">
          {business.stats.map((stat, index) => (
            <CountUpStat key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}