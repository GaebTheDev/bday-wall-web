import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqERIlCao3InrZ9rYj_lzcp6UFAJmq87Q",
  authDomain: "bdaywall-8293b.firebaseapp.com",
  projectId: "bdaywall-8293b",
  storageBucket: "bdaywall-8293b.appspot.com",
  messagingSenderId: "662467196220",
  appId: "1:662467196220:web:38af5a00013047d1381a39"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom([
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
    provideFirestore(()=> getFirestore()),
  ])]
};
