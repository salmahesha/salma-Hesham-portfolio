import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SeoService } from './core/services/seo.service';
import { NavbarComponent } from './features/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { EducationComponent } from './features/education/education.component';
import { VolunteeringComponent } from './features/volunteering/volunteering.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    VolunteeringComponent,
    ContactComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.init({
      title: 'Salma Hesham | Web Developer',
      description:
        'Portfolio of Salma Hesham – CS student and frontend web developer specialising in Angular, TypeScript, and modern web technologies.',
      keywords: 'Salma Hesham, web developer, Angular developer, frontend developer, CS student, Cairo University, portfolio',
      author: 'Salma Hesham',
      ogTitle: 'Salma Hesham | Web Developer',
      ogDescription: 'Explore projects and skills of Salma Hesham, a frontend web developer and CS student.',
      ogImage: '/og-image.png',
      ogUrl: 'https://salmahesha.github.io',
      twitterCard: 'summary_large_image',
    });
  }
}
