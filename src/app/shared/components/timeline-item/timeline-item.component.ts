import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { TimelineItem } from '../../../core/models/timeline-item.model';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li class="relative flex gap-4 pb-8 last:pb-0">
      <!-- Line + Dot -->
      <div class="flex flex-col items-center">
        <div
          [class]="item().type === 'education'
            ? 'w-3 h-3 rounded-full bg-accent ring-2 ring-accent/30 ring-offset-2 ring-offset-bg flex-shrink-0 mt-1'
            : 'w-3 h-3 rounded-full bg-text-muted/50 ring-2 ring-white/10 ring-offset-2 ring-offset-bg flex-shrink-0 mt-1'"
        ></div>
        <div class="w-px flex-1 bg-white/10 mt-2"></div>
      </div>

      <!-- Content -->
      <div class="pb-1">
        <div class="flex flex-wrap items-center gap-2 mb-1">
          <span
            [class]="item().type === 'education'
              ? 'text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30'
              : 'text-xs px-2 py-0.5 rounded-full bg-white/5 text-text-muted border border-white/10'"
          >
            {{ item().type === 'education' ? 'Education' : 'Training' }}
          </span>
          <span class="text-xs text-text-muted">{{ item().date }}</span>
        </div>
        <h3 class="text-base font-semibold text-white">{{ item().title }}</h3>
        <p class="text-sm text-text-muted mt-0.5">{{ item().org }}</p>
      </div>
    </li>
  `,
})
export class TimelineItemComponent {
  readonly item = input.required<TimelineItem>();
}
