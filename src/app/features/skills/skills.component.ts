import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SKILL_GROUPS } from '../../core/data/skills.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeadingComponent, TagComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="py-20 px-6 bg-surface/50" aria-labelledby="skills-heading">
      <div class="container-main">
        <div appRevealOnScroll>
          <app-section-heading title="Skills" subtitle="Technologies and tools I work with" />
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          @for (group of skillGroups; track group.label) {
            <div
              appRevealOnScroll
              class="rounded-card border border-white/10 bg-surface p-5 hover:border-accent/20 transition-colors"
            >
              <h3 class="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-accent inline-block"></span>
                {{ group.label }}
              </h3>
              <div class="flex flex-wrap gap-2">
                @for (item of group.items; track item) {
                  <app-tag [label]="item" />
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly skillGroups = SKILL_GROUPS;
}
