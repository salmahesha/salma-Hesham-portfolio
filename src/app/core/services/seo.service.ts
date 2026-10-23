import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);

  init(config: SeoConfig): void {
    this.doc.title = config.title;
    this.setMeta('description', config.description);
    this.setMeta('keywords', config.keywords);
    this.setMeta('author', config.author);
    // Open Graph
    this.setMetaProperty('og:title', config.ogTitle);
    this.setMetaProperty('og:description', config.ogDescription);
    this.setMetaProperty('og:image', config.ogImage);
    this.setMetaProperty('og:url', config.ogUrl);
    this.setMetaProperty('og:type', 'website');
    // Twitter
    this.setMetaName('twitter:card', config.twitterCard);
    this.setMetaName('twitter:title', config.ogTitle);
    this.setMetaName('twitter:description', config.ogDescription);
    this.setMetaName('twitter:image', config.ogImage);
  }

  private setMeta(name: string, content: string): void {
    let el = this.doc.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
      el = this.doc.createElement('meta');
      el.name = name;
      this.doc.head.appendChild(el);
    }
    el.content = content;
  }

  private setMetaProperty(property: string, content: string): void {
    let el = this.doc.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
    if (!el) {
      el = this.doc.createElement('meta');
      el.setAttribute('property', property);
      this.doc.head.appendChild(el);
    }
    el.content = content;
  }

  private setMetaName(name: string, content: string): void {
    let el = this.doc.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
      el = this.doc.createElement('meta');
      el.name = name;
      this.doc.head.appendChild(el);
    }
    el.content = content;
  }
}
