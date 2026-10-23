import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';

@Component({
  selector: 'app-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel() || null"
      (click)="clicked.emit()"
      [class]="buttonClass()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input<boolean>(false);
  readonly ariaLabel = input<string>('');
  readonly clicked = output<void>();

  buttonClass(): string {
    const base =
      'inline-flex items-center gap-2 px-5 py-2.5 rounded-btn font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed';
    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-glow',
      outline: 'border border-accent text-accent hover:bg-accent/10',
      ghost: 'text-text-muted hover:text-white hover:bg-white/5',
    };
    return `${base} ${variants[this.variant()]}`;
  }
}
