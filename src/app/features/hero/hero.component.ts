import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PROFILE } from '../../core/data/profile.data';
import { SOCIAL_LINKS } from '../../core/data/social-links.data';
import { IconComponent } from '../../shared/components/icon/icon.component';

const TYPING_PHRASES = [
  'Full-Stack AI Developer',
  'Frontend Developer',
  'AI Developer'
];

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<section
  id="hero"
  class="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
  aria-label="Hero section"
>
  <div class="container-main">
    <div class="grid md:grid-cols-[1fr_auto] items-center gap-12 lg:gap-20">

      <!-- Left Content -->
      <div class="max-w-3xl text-center md:text-left">
        <p class="text-accent font-medium text-sm tracking-widest uppercase mb-4">
          Hello, I'm
        </p>

        <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
          {{ profile.name }}
        </h1>

        <div
          class="text-2xl md:text-3xl font-semibold text-text-muted mb-6 h-10 flex items-center gap-0 md:justify-start justify-center"
          aria-live="polite"
          aria-label="Current role"
        >
          <span>{{ typedText() }}</span>
          <span class="typing-cursor" aria-hidden="true"></span>
        </div>

        <p class="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          {{ profile.summary }}
        </p>

        <div class="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-accent text-white font-medium hover:bg-accent-hover shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
          >
            View Projects
          </a>

          <a
            href="/cv/Salma-Hesham-CV.pdf"
            download
            class="inline-flex items-center gap-2 px-6 py-3 rounded-btn border border-accent text-accent font-medium hover:bg-accent/10 transition-all"
            aria-label="Download Salma Hesham's CV"
          >
            <app-icon name="download" [size]="16" />
            Download CV
          </a>

          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-btn border border-white/10 text-text-muted font-medium hover:text-white hover:border-white/30 transition-all"
          >
            Contact
          </a>
        </div>

        <div class="flex gap-4 justify-center md:justify-start">
          @for (link of socialLinks; track link.url) {
            <a
              [href]="link.url"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="link.label + ' profile (opens in new tab)'"
              class="w-10 h-10 flex items-center justify-center rounded-btn border border-white/10
                     text-text-muted hover:text-accent hover:border-accent/40 transition-all"
            >
              <app-icon [name]="link.icon" [size]="18" />
            </a>
          }
        </div>
      </div>

      <!-- Profile Image -->
      <div class="flex justify-center md:justify-end">
        <div
          class="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full
                 border-2 border-accent/40 p-2
                 shadow-[0_0_50px_rgba(139,92,246,0.18)]"
        >
          <img
            src="/cv/my-img.jpeg"
            alt="Salma Hesham"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

    </div>
  </div>
</section>  `,
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly socialLinks = SOCIAL_LINKS;
  readonly typedText = signal('');

  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;
  private prefersReduced = false;

  ngOnInit(): void {
    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.prefersReduced) {
      this.typedText.set(TYPING_PHRASES[0]);
      return;
    }
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timerId) clearTimeout(this.timerId);
  }

  private tick(): void {
    const phrase = TYPING_PHRASES[this.phraseIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.typedText.set(phrase.slice(0, this.charIndex));

    let delay = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === phrase.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % TYPING_PHRASES.length;
      delay = 400;
    }

    this.timerId = setTimeout(() => this.tick(), delay);
  }
}
