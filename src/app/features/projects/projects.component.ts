import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { PROJECTS } from '../../core/data/projects.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

const INITIAL_VISIBLE = 9;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    ProjectCardComponent,
    TagComponent,
    IconComponent,
    RevealOnScrollDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="py-20 px-6" aria-labelledby="projects-heading">
      <div class="container-main">
        <div appRevealOnScroll>
          <app-section-heading title="Projects" subtitle="Things I've built" />
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of visibleProjects(); track project.id) {
            <div appRevealOnScroll>
              <app-project-card [project]="project" />
            </div>
          }
        </div>

        @if (hasMore()) {
          <div class="mt-10 text-center">
            <button
              (click)="showAll.set(true)"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-btn border border-white/10
                     text-text-muted hover:text-white hover:border-white/30 transition-all font-medium text-sm"
            >
              Show more ({{ remainingCount() }} more)
            </button>
          </div>
        }

        <!-- Automation / Other Projects -->
        <div appRevealOnScroll class="mt-12 rounded-card border border-white/10 bg-surface/60 p-6 glass">
          <div class="flex items-start gap-4">
            <div
              class="w-10 h-10 rounded-btn bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5"
            >
              <app-icon name="workflow" [size]="20" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <h3 class="text-base font-semibold text-white">Automation / N8N</h3>
                <span
                  class="text-xs px-2.5 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 font-medium"
                >
                  n8n
                </span>
              </div>
              <p class="text-text-muted text-sm leading-relaxed">
                n8n workflow automation featuring webhook triggers, email and data validation, AI processing with Gemini/Groq fallback, Google Sheets integration, rate limiting, and duplicate feedback prevention.
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                @for (item of automationFeatures; track item) {
                  <app-tag [label]="item" />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  private readonly allProjects = PROJECTS.filter((p) => p.visible !== false);
  readonly showAll = signal(false);

  readonly visibleProjects = computed(() =>
    this.showAll() ? this.allProjects : this.allProjects.slice(0, INITIAL_VISIBLE)
  );

  readonly hasMore = computed(
    () => !this.showAll() && this.allProjects.length > INITIAL_VISIBLE
  );

  readonly remainingCount = computed(
    () => this.allProjects.length - INITIAL_VISIBLE
  );

  readonly automationFeatures = [
    'n8n workflow automation',
    'Webhook',
    'Data validation',
    'AI processing',
    'Gemini/Groq fallback',
    'Google Sheets integration',
    'Rate limiting',
    'Duplicate feedback prevention',
    'Email validation',
  ];
}
