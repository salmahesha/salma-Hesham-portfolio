import {
  Component,
  signal,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PROFILE } from '../../core/data/profile.data';
import { SOCIAL_LINKS } from '../../core/data/social-links.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeadingComponent, IconComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="py-20 px-6 bg-surface/50" aria-labelledby="contact-heading">
      <div class="container-main">
        <div appRevealOnScroll>
          <app-section-heading title="Contact" subtitle="Let's get in touch" />
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-4xl">

          <!-- Contact info -->
          <div appRevealOnScroll class="space-y-5">
            <p class="text-text-muted text-base leading-relaxed">
              I'm open to internships, collaborations, and junior developer roles.
              Feel free to reach out directly.
            </p>

            <div class="space-y-4">
              <a
                [href]="'mailto:' + profile.email"
                class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors group"
              >
                <span class="w-9 h-9 flex items-center justify-center rounded-btn border border-white/10 group-hover:border-accent/40 transition-colors">
                  <app-icon name="mail" [size]="16" />
                </span>
                <span class="text-sm">{{ profile.email }}</span>
              </a>

              <a
                [href]="'tel:' + profile.phone"
                class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors group"
              >
                <span class="w-9 h-9 flex items-center justify-center rounded-btn border border-white/10 group-hover:border-accent/40 transition-colors">
                  <app-icon name="phone" [size]="16" />
                </span>
                <span class="text-sm">{{ profile.phone }}</span>
              </a>

              @for (link of socialLinks; track link.url) {
                <a
                  [href]="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  [attr.aria-label]="link.label + ' (opens in new tab)'"
                  class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors group"
                >
                  <span class="w-9 h-9 flex items-center justify-center rounded-btn border border-white/10 group-hover:border-accent/40 transition-colors">
                    <app-icon [name]="link.icon" [size]="16" />
                  </span>
                  <span class="text-sm">{{ link.label }}</span>
                </a>
              }
            </div>
          </div>

          <!-- Form -->
          <div appRevealOnScroll>
            <!-- Frontend demo notice -->
            <div class="mb-5 p-3 rounded-btn border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs leading-relaxed">
              ⚠ This form is a frontend demo — no backend is connected. Please email me directly at
              <a [href]="'mailto:' + profile.email" class="underline hover:text-amber-300">{{ profile.email }}</a>.
            </div>

            <form
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
              class="space-y-4"
              aria-label="Contact form"
              novalidate
            >
              <!-- Name -->
              <div>
                <label for="contact-name" class="block text-sm font-medium text-text-muted mb-1">
                  Name <span class="text-accent" aria-label="required">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  formControlName="name"
                  autocomplete="name"
                  class="w-full px-4 py-2.5 rounded-btn bg-bg border border-white/10 text-white text-sm
                         placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 transition-colors"
                  placeholder="Your name"
                  [attr.aria-describedby]="nameError() ? 'name-error' : null"
                  [attr.aria-invalid]="nameError() ? true : null"
                />
                @if (nameError()) {
                  <p id="name-error" class="mt-1 text-xs text-red-400" role="alert">{{ nameError() }}</p>
                }
              </div>

              <!-- Email -->
              <div>
                <label for="contact-email" class="block text-sm font-medium text-text-muted mb-1">
                  Email <span class="text-accent" aria-label="required">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  formControlName="email"
                  autocomplete="email"
                  class="w-full px-4 py-2.5 rounded-btn bg-bg border border-white/10 text-white text-sm
                         placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 transition-colors"
                  placeholder="your@email.com"
                  [attr.aria-describedby]="emailError() ? 'email-error' : null"
                  [attr.aria-invalid]="emailError() ? true : null"
                />
                @if (emailError()) {
                  <p id="email-error" class="mt-1 text-xs text-red-400" role="alert">{{ emailError() }}</p>
                }
              </div>

              <!-- Message -->
              <div>
                <label for="contact-message" class="block text-sm font-medium text-text-muted mb-1">
                  Message <span class="text-accent" aria-label="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows="4"
                  formControlName="message"
                  class="w-full px-4 py-2.5 rounded-btn bg-bg border border-white/10 text-white text-sm
                         placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  placeholder="Your message..."
                  [attr.aria-describedby]="messageError() ? 'message-error' : null"
                  [attr.aria-invalid]="messageError() ? true : null"
                ></textarea>
                @if (messageError()) {
                  <p id="message-error" class="mt-1 text-xs text-red-400" role="alert">{{ messageError() }}</p>
                }
              </div>

              <div class="flex gap-3 flex-wrap">
                <button
                  type="submit"
                  [disabled]="form.invalid"
                  class="px-6 py-2.5 rounded-btn bg-accent text-white font-medium text-sm
                         hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send via Email Client
                </button>

                <a
                  [href]="mailtoLink()"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-btn border border-white/10
                         text-text-muted hover:text-white text-sm transition-colors"
                  aria-label="Open email client directly"
                >
                  <app-icon name="external" [size]="14" />
                  Open Mail Client
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  readonly profile = PROFILE;
  readonly socialLinks = SOCIAL_LINKS;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly mailtoLink = signal(this.buildMailto());

  nameError(): string | null {
    const ctrl = this.form.controls.name;
    if (!ctrl.touched) return null;
    if (ctrl.hasError('required')) return 'Name is required.';
    return null;
  }

  emailError(): string | null {
    const ctrl = this.form.controls.email;
    if (!ctrl.touched) return null;
    if (ctrl.hasError('required')) return 'Email is required.';
    if (ctrl.hasError('email')) return 'Please enter a valid email address.';
    return null;
  }

  messageError(): string | null {
    const ctrl = this.form.controls.message;
    if (!ctrl.touched) return null;
    if (ctrl.hasError('required')) return 'Message is required.';
    if (ctrl.hasError('minlength')) return 'Message must be at least 10 characters.';
    return null;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    window.open(mailto, '_blank');
  }

  private buildMailto(): string {
    return `mailto:${this.profile.email}?subject=${encodeURIComponent('Portfolio Contact')}`;
  }
}
