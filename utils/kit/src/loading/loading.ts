import {initEmbedded} from '../embed/embedded';

export const postLoading = async () => {
  const app = document.querySelector('ion-app');

  if (app) {
    app.classList.remove('loading');
  }

  await initSreenshot();
  await initEmbedMode();
};

async function initSreenshot() {
  if (!window || !window.location) {
    return;
  }

  const url = new URL(window.location.href);
  const screenshot = url && url.searchParams ? url.searchParams.has('screenshot') : false;

  if (screenshot) {
    const navigation: HTMLElement | null = document.querySelector('#navigation');

    if (navigation) {
      navigation.style.display = 'none';
    }

    const deck: HTMLElement | null = document.querySelector('deckgo-deck');
    if (deck) {
      deck.style.setProperty('--pager-display', 'none');

      const actions: HTMLElement | null = deck.querySelector('[slot="actions"]');
      if (actions) {
        actions.style.display = 'none';
      }
    }
  }
}

async function initEmbedMode() {
  initEmbedded();

  if (EMBEDDED) {
    const slidePicker: HTMLElement | null = document.querySelector('#slidePicker');

    if (slidePicker) {
      slidePicker.style.display = 'none';
    }

    const deck: HTMLElement | null = document.querySelector('deckgo-deck');
    if (deck) {
      deck.style.setProperty('--pager-display', 'none');
    }
  }
}
