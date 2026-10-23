import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-block px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5
             text-text-muted hover:border-accent/40 hover:text-accent hover:bg-accent/10
             transition-colors duration-200 cursor-default"
    >
      {{ label() }}
    </span>
  `,
})
export class TagComponent {
  readonly label = input.required<string>();
}
