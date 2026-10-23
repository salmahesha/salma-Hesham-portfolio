import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit {
  private readonly el = inject(ElementRef);

  ngOnInit(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Show immediately, skip animation
      (this.el.nativeElement as HTMLElement).classList.add('visible');
      return;
    }

    (this.el.nativeElement as HTMLElement).classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement as Element);
  }
}
