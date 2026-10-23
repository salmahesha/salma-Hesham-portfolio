import {
  Component,
  OnInit,
  signal,
  inject,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { NAV_LINKS } from '../../core/data/navigation.data';
import { PROFILE } from '../../core/data/profile.data';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      [class]="scrolled()
        ? 'fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 transition-all duration-300'
        : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300'"
      role="banner"
    >
      <nav
        class="container-main flex items-center justify-between h-16 px-6"
        aria-label="Main navigation"
      >
        <!-- Logo -->
        <a href="#hero" class="text-lg font-bold text-white hover:text-accent transition-colors" aria-label="Salma Hesham – back to top">
          Salma<span class="text-accent">.</span>
        </a>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0" role="list">
          @for (link of navLinks; track link.anchor) {
            <li>
              <a
                [href]="'#' + link.anchor"
                [class]="activeSection() === link.anchor
                  ? 'text-accent font-medium text-sm transition-colors'
                  : 'text-text-muted hover:text-white font-medium text-sm transition-colors'"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden text-text-muted hover:text-white transition-colors p-2 rounded focus-visible:ring-2 focus-visible:ring-accent"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          (click)="toggleMenu()"
        >
          @if (menuOpen()) {
            <app-icon name="close" [size]="22" />
          } @else {
            <app-icon name="menu" [size]="22" />
          }
        </button>
      </nav>

      <!-- Mobile menu -->
      @if (menuOpen()) {
        <div
          id="mobile-menu"
          class="md:hidden glass border-t border-white/10"
        >
          <ul class="flex flex-col px-6 py-4 gap-4 list-none m-0 p-0" role="list">
            @for (link of navLinks; track link.anchor) {
              <li>
                <a
                  [href]="'#' + link.anchor"
                  [class]="activeSection() === link.anchor
                    ? 'text-accent font-medium text-base block py-1'
                    : 'text-text-muted hover:text-white font-medium text-base block py-1 transition-colors'"
                  (click)="closeMenu()"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent implements OnInit {
  private readonly scrollSpy = inject(ScrollSpyService);

  readonly navLinks = NAV_LINKS;
  readonly profileName = PROFILE.name;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = this.scrollSpy.activeSection;

  ngOnInit(): void {
    this.scrollSpy.observe(NAV_LINKS.map((l) => l.anchor));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
