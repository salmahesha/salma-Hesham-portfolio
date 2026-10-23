import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VOLUNTEERING } from '../../core/data/volunteering.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-volunteering',
  standalone: true,
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="volunteering" class="py-20 px-6" aria-labelledby="volunteering-heading">
      <div class="container-main">
        <div appRevealOnScroll>
          <app-section-heading title="Volunteering" />
        </div>

        <div class="grid sm:grid-cols-2 gap-6 max-w-3xl">
          @for (item of volunteering; track item.org) {
            <div
              appRevealOnScroll
              class="rounded-card border border-white/10 bg-surface p-6
                     hover:border-accent/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div class="flex items-start gap-3">
                <span class="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                <div>
                  <h3 class="text-white font-semibold text-base">{{ item.org }}</h3>
                  <p class="text-accent text-xs font-medium mb-2">{{ item.role }}</p>
                  <p class="text-text-muted text-sm leading-relaxed">{{ item.description }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class VolunteeringComponent {
  readonly volunteering = VOLUNTEERING;
}
