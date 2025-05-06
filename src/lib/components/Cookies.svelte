<!-- src/lib/components/CookieConsent.svelte -->
<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { fade } from 'svelte/transition';
    
    // Props with default values
    export let cookieName = 'cookie-consent';
    export let cookieExpireDays = 365;
    export let position = 'bottom';  // 'bottom', 'top', 'bottom-left', 'bottom-right'
    export let backgroundColor = '#f0f0f0';
    export let textColor = '#333';
    export let buttonColor = '#4CAF50';
    export let buttonTextColor = '#fff';
    export let declineButtonColor = '#f44336';
    
    // State
    let visible = false;
    
    // Set cookie function
    function setCookie(name, value, days) {
      if (!browser) return;
      
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }
    
    // Get cookie function
    function getCookie(name) {
      if (!browser) return null;
      
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    }
    
    // Accept cookies
    function acceptCookies() {
      setCookie(cookieName, 'accepted', cookieExpireDays);
      visible = false;
      
      // Dispatch event for other components that might rely on cookie consent
      if (browser) {
        window.dispatchEvent(new CustomEvent('cookieConsentAccepted'));
      }
    }
    
    // Decline cookies
    function declineCookies() {
      setCookie(cookieName, 'declined', cookieExpireDays);
      visible = false;
      
      // Dispatch event for other components that might rely on cookie consent
      if (browser) {
        window.dispatchEvent(new CustomEvent('cookieConsentDeclined'));
      }
    }
    
    // Check consent status on mount
    onMount(() => {
      const consentValue = getCookie(cookieName);
      if (!consentValue) {
        // Show banner after a small delay
        setTimeout(() => {
          visible = true;
        }, 800);
      }
    });
    
    // Position styles
    $: positionClass = {
      'bottom': 'bottom-0 left-0 right-0',
      'top': 'top-0 left-0 right-0',
      'bottom-left': 'bottom-0 left-0',
      'bottom-right': 'bottom-0 right-0'
    }[position] || 'bottom-0 left-0 right-0';
  </script>
  
  {#if visible}
  <div class=" w-full h-full fixed flex justify-center items-center z-100">
    <div 
      class="z-50 p-6 shadow-lg transition-opacity duration-300 mx-6 md:mx-12 rounded-2xl"
      style="background-color: {backgroundColor}; color: {textColor}; rounded-2xl"
      transition:fade={{ duration: 300 }}
    >
      <div class="container mx-auto flex flex-col items-start justify-between gap-4 max-w-3xl">
        <div class="text-sm md:text-base">
            <p class=" text-xl-bold mb-2">Ta strona korzysta z plików cookie.</p>      
            <p>
                Używamy plików cookie do personalizowania treści i reklam, udostępniania funkcji mediów społecznościowych i analizowania naszego ruchu. Udostępniamy również informacje o tym, jak korzystasz z naszej witryny, naszym partnerom w zakresie mediów społecznościowych, reklam i analiz, którzy mogą łączyć je z innymi informacjami, które im przekazałeś lub które zebrali w wyniku korzystania przez Ciebie z ich usług.
            </p>
        </div>
        <div class="flex flex-wrap items-start gap-2">
            <button
            class="px-4 py-2 rounded font-medium text-sm duration-200 hover:opacity-85 active:scale-95 transition-all hover:cursor-pointer"
            style="background-color: {buttonColor}; color: {buttonTextColor};"
            on:click={acceptCookies}
          >
            Zaakceptuj
          </button>
          <button
            class="px-4 py-2 rounded font-medium text-sm duration-200 hover:opacity-85 active:scale-95 transition-all hover:cursor-pointer"
            style="background-color: {declineButtonColor}; color: {buttonTextColor};"
            on:click={declineCookies}
          >
            Odrzuć
          </button>
        </div>
      </div>
    </div>
    </div>
  {/if}
  
  <style>
    /* Add any additional styles here */
  </style>