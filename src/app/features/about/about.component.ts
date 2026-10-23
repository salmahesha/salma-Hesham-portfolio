import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PROFILE } from '../../core/data/profile.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="py-20 px-6" aria-labelledby="about-heading">
      <div class="container-main">
        <div appRevealOnScroll>
          <app-section-heading title="About Me" />
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Summary -->
          <div appRevealOnScroll>
            <p class="text-text-muted text-base leading-relaxed">
              {{ profile.summary }}
            </p>
          </div>

          <!-- Quick facts -->
          <div appRevealOnScroll>
            <div class="rounded-card border border-white/10 bg-surface p-6 space-y-4">
              <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Facts</h3>

              <div class="flex gap-3">
                <span class="text-accent font-bold text-sm w-24 flex-shrink-0">University</span>
                <span class="text-text-muted text-sm">{{ profile.university }}</span>
              </div>
              <div class="flex gap-3">
                <span class="text-accent font-bold text-sm w-24 flex-shrink-0">Department</span>
                <span class="text-text-muted text-sm">{{ profile.department }}</span>
              </div>
              <div class="flex gap-3">
                <span class="text-accent font-bold text-sm w-24 flex-shrink-0">Graduation</span>
                <span class="text-text-muted text-sm">{{ profile.graduation }}</span>
              </div>

              <!-- Languages -->
              <div class="border-t border-white/10 pt-4 mt-4">
                <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-3">Languages</h4>
                <div class="flex flex-wrap gap-3">
                  @for (lang of profile.languages; track lang.lang) {
                    <div class="flex items-center gap-2">
                      <span class="text-sm text-white font-medium">{{ lang.lang }}</span>
                      <span class="text-xs text-text-muted">({{ lang.level }})</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly profile = PROFILE;
}
