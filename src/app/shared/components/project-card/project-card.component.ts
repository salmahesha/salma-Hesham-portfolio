import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { TagComponent } from '../tag/tag.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="flex flex-col h-full rounded-card border border-white/10 bg-surface
             hover:border-accent/30 hover:shadow-[0_4px_32px_rgba(139,92,246,0.12)]
             hover:-translate-y-1 transition-all duration-300 overflow-hidden glass p-6"
    >
      <!-- Card Header: Icon & Featured Badge -->
      <div class="flex items-center justify-between mb-4">
        @if (project().icon) {
          <div
            class="w-10 h-10 rounded-btn bg-accent/10 border border-accent/20 flex items-center justify-center text-accent"
          >
            <app-icon [name]="project().icon!" [size]="20" />
          </div>
        }
        @if (project().featured) {
          <span
            class="px-2.5 py-0.5 text-xs rounded-full bg-accent/20 text-accent border border-accent/30 font-medium ml-auto"
          >
            Featured
          </span>
        }
      </div>

      <!-- Body -->
      <div class="flex flex-col flex-1 gap-3">
        <h3 class="text-lg font-semibold text-white">{{ project().title }}</h3>
        <p class="text-text-muted text-sm flex-1 leading-relaxed">{{ project().description }}</p>

        <!-- Tech badges -->
        @if (project().tech.length > 0) {
          <div class="flex flex-wrap gap-1.5">
            @for (t of project().tech; track t) {
              <app-tag [label]="t" />
            }
          </div>
        }

        <!-- Action buttons -->
        <div class="flex gap-2 mt-auto pt-2">
          @if (project().liveUrl) {
            <a
              [href]="project().liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-btn
                     bg-accent text-white hover:bg-accent-hover transition-colors"
              [attr.aria-label]="'View live demo of ' + project().title"
            >
              <app-icon name="external" [size]="14" />
              Live Demo
            </a>
          }
          @if (project().githubUrl) {
            <a
              [href]="project().githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-btn
                     border border-white/10 text-text-muted hover:text-white hover:border-white/30 transition-colors"
              [attr.aria-label]="'View source code of ' + project().title + ' on GitHub'"
            >
              <app-icon name="github" [size]="14" />
              GitHub
            </a>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
