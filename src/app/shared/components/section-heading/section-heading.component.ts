import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-white mb-2">
        {{ title() }}
        <span class="text-accent">.</span>
      </h2>
      @if (subtitle()) {
        <p class="text-text-muted">{{ subtitle() }}</p>
      }
      <div class="mt-3 h-1 w-12 rounded bg-accent"></div>
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
