<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    // Eksportowane właściwości komponentu
    export let src: string = '';
    export let poster: string = '';
    export let controls: boolean = true;
    export let autoplay: boolean = false;
    export let muted: boolean = false;
    export let loop: boolean = false;
    export let preload: 'none' | 'metadata' | 'auto' = 'none';
    export let width: string = '';
    export let height: string = '';
    export let className: string = '';
    export let threshold: number = 0.1; // Próg widoczności dla Intersection Observer
    export let rootMargin: string = '50px'; // Margines dla Intersection Observer
  
    let videoElement: HTMLVideoElement; // Referencja do elementu wideo
    let isLoaded: boolean = false; // Czy wideo zostało załadowane (czyli czy 'src' jest już w elemencie video)
    let isIntersecting: boolean = false; // Czy element wideo jest w widoku
    let observer: IntersectionObserver; // Instancja Intersection Observer
  
    // Funkcja do obsługi zdarzenia Intersection Observer
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting = true;
          isLoaded = true; // Ustawiamy isLoaded na true, gdy element jest widoczny
          if (videoElement && observer) {
            observer.unobserve(videoElement); // Przestajemy obserwować, gdy wideo jest w widoku
          }
        }
      });
    }
  
    onMount(() => {
      if (videoElement) {
        observer = new IntersectionObserver(handleIntersection, {
          rootMargin,
          threshold
        });
        observer.observe(videoElement);
      }
    });
  
    onDestroy(() => {
      if (observer && videoElement) {
        observer.unobserve(videoElement);
      }
    });
  
    // Opcjonalne funkcje do logowania zdarzeń wideo (przydatne do debugowania)
    function handleLoadStart() {
      console.log('Video loading started');
    }
  
    function handleCanPlay() {
      console.log('Video can start playing');
    }
  
    function handleError(e: Event) {
      console.error('Video loading error:', e);
    }
  </script>
  
  <div class="lazy-video-container" style="width: {width}; height: {height};">
    <video
      bind:this={videoElement}
      playsinline
      {poster}
      {controls}
      {autoplay}
      {muted}
      {loop}
      class="{className}"
      preload={isLoaded ? preload : 'none'}
      onloadeddata={handleCanPlay} onerror={handleError}
      onloadedmetadata={handleLoadStart} >
      {#if isLoaded}
        <source src={src} type="video/mp4" />
      {/if}
      <p>Twoja przeglądarka nie obsługuje wideo HTML5.</p>
    </video>
  
    {#if !isIntersecting && !isLoaded}
      <div class="loading-placeholder">
        <div class="loading-spinner"></div>
        <p>Ładowanie wideo...</p>
      </div>
    {/if}
  </div>
  
  <style>
    .lazy-video-container {
      position: relative;
      display: inline-block;
      /* Dodaj placeholder lub ustal wymiary, aby uniknąć skakania layoutu */
    }
  
    .lazy-video {
      width: 100%;
      height: 100%; /* Zmienione na 100% aby video wypełniało kontener */
      max-width: 100%;
      display: block; /* Usuwa dodatkowy margines pod wideo */
    }
  
    /* Ukryj wideo zanim się załaduje, aby uniknąć migotania */
    .lazy-video:not([src]) {
      visibility: hidden;
    }
  
    .loading-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #f0f0f0;
      color: #666;
      z-index: 1; /* Upewnij się, że placeholder jest nad wideo */
    }
  
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 10px;
    }
  
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>