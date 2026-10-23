import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TIMELINE } from '../../core/data/education.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { TimelineItemComponent } from '../../shared/components/timeline-item/timeline-item.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionHeadingComponent, TimelineItemComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="education" class="py-20 px-6 bg-surface/50" aria-labelledby="education-heading">
      <div class="container-main">
        <div appRevealOnScroll>
          <app-section-heading title="Education & Training" subtitle="My academic and professional learning path" />
        </div>

        <div class="max-w-2xl" appRevealOnScroll>
          <ol class="list-none p-0 m-0" aria-label="Education and training timeline">
            @for (item of timeline; track item.title) {
              <app-timeline-item [item]="item" />
            }
          </ol>
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {
  readonly timeline = TIMELINE;
}
