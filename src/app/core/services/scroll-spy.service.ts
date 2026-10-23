import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeSection = signal<string>('');

  observe(sectionIds: string[]): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
  }
}
