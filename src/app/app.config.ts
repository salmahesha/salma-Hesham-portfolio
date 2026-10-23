import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return config.src.startsWith('http') ? config.src : `/${config.src}`;
      },
    },
  ],
};
