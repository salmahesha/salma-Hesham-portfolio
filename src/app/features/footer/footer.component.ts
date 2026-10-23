import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PROFILE } from '../../core/data/profile.data';
import { SOCIAL_LINKS } from '../../core/data/social-links.data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-white/10 bg-surface/30 py-8 px-6" role="contentinfo">
      <div class="container-main flex flex-col sm:flex-row items-center justify-between gap-4">

        <!-- Name + copyright -->
        <div class="text-center sm:text-left">
          <span class="text-text-muted text-sm">
            &copy; {{ year }} <span class="text-white font-medium">{{ profile.name }}</span>.
            
          </span>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-3">
          @for (link of socialLinks; track link.url) {
            <a
              [href]="link.url"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="link.label + ' (opens in new tab)'"
              class="text-text-muted hover:text-accent transition-colors"
            >
              <app-icon [name]="link.icon" [size]="18" />
            </a>
          }

          <!-- Back to top -->
          <a
            href="#hero"
            aria-label="Back to top"
            class="ml-3 w-8 h-8 flex items-center justify-center rounded-btn border border-white/10
                   text-text-muted hover:text-accent hover:border-accent/40 transition-all"
          >
            <app-icon name="arrow-up" [size]="15" />
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly socialLinks = SOCIAL_LINKS;
  readonly year = new Date().getFullYear();
}
