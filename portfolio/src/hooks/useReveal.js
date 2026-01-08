import { useEffect } from "react"; 
 
export default function useReveal(ref) { 
  useEffect(() => { 
    const el = ref.current; 
    if (!el) return; 

    const obs = new IntersectionObserver( 
      ([e]) => { 
        if (e.isIntersecting) el.classList.add("reveal"); 
      }, 
      { threshold: 0.15 } 
    ); 

    obs.observe(el); 
    return () => obs.disconnect(); 
  }, []); 
}