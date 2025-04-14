import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: '👋 ¡Bienvenid@ a Docurio! ',
          description:
            'Docurio es tu nueva herramienta para <b>organizar el conocimiento</b>  en equipo. <br> <br>  Vamos a configurarlo para tus necesidades en solo 1 minutos.',
          button: 'Comenzar',
        },
        // form
        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: '¿Cómo quieres usar Docurio?',
          description: 'Nos ayudará a personalizar tu experiencia.',
          form: [
            {
              id: 'work',
              placeholder: 'Para el trabajo',
              type: 'checkbox',
            },
            {
              id: 'personal',
              placeholder: 'Para uso personal',
              type: 'checkbox',
            },
            {
              id: 'eductaion',
              placeholder: 'Educativo',
              type: 'checkbox',
            },
            {
              id: 'other',
              placeholder: 'Other',
              type: 'checkbox',
            },
          ],
          button: 'Continuar',
        },
        // form
        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: '¿De qué forma quieres usar Docurio?',
          description: 'Esto nos ayudará a personalizar tu experiencia.',
          form: [
            {
              id: 'team',
              placeholder: 'Con otros',
              type: 'checkbox',
            },
            {
              id: 'solo',
              placeholder: 'Por mi cuenta',
              type: 'checkbox',
            },
          ],
          button: 'Continuar',
        },

        // form
        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: '¿Qué tienes en mente?',
          description: 'Selecciona tanto como quieras.',
          form: [
            {
              id: 'team',
              placeholder: 'Investigación',
              type: 'checkbox',
            },
            {
              id: 'solo',
              placeholder: 'Sitio o blog',
              type: 'checkbox',
            },
            {
              id: 'solo',
              placeholder: 'Procedimientos',
              type: 'checkbox',
            },
            {
              id: 'solo',
              placeholder: 'Notas',
              type: 'checkbox',
            },
            {
              id: 'solo',
              placeholder: 'Plan de clases',
              type: 'checkbox',
            },
            {
              id: 'solo',
              placeholder: 'Resoluciones',
              type: 'checkbox',
            },
          ],
          button: 'Continuar',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'User fills in the form – the bot receives the data',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'Nombre completo',
              type: 'text',
            },
            {
              id: 'number_from_form',
              placeholder: 'Edad',
              type: 'date',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'Checkbox',
              type: 'checkbox',
            },
          ],
          button: '',
        },

        // list
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Lists',
          description:
            'Lists can be used to showcase <b>features</b> of your product. Items support customizable icons',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Some cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Some very cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Some extremely cool feature',
            },
          ],
          button: 'Next',
        },

        // "everything is customizable" slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Everything is customizable',
          description: '',
          textAlign: 'center',
          list: [
            '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
            'Button text and actions (look down)',
            'Use our carefully crafted <b>presets</b> or easily create your own',
          ],
          button: 'Super-Duper Next',
        },

        // slide with other features
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Otras características:',
          description: '',
          list: [
            'Editor colaborativo en tiempo real',
            'Espacios de trabajos',
            'Múltiples colecciones',
            'Comentarios y sugerencias ',
            'Historial de páginas',
            'Búsqueda super rápidas',
            "Y mucho más... (ver  <a href='https://www.docurio.co' target='_blank'>Docurio</a>)",
          ],
          button: 'Next',
        },

        // paywall
        {
          extends: 'paywall',
          path: '/paywall',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'),
            size: 150,
          },
          shape: 'square',
          title: 'Desbloquea el acceso a todas las funciones',
          list: ['Unlimited traffic', 'Any number of devices', 'No ads'],
          products: [
            {
              id: '1_month_subscription',
              title: '1 month subscription',
              description: '2$/month',
              discount: '',
              price: 2,
            },
            {
              id: '1_year_subscription',
              title: '1 year subscription',
              description: '1$/month',
              discount: 'Discount 50%',
              price: 12,
            },
            {
              id: 'lifetime_access',
              title: 'Lifetime access',
              description: '20$ once',
              discount: 'Best offer',
              price: 20,
            },
          ],
          mainButtonText: 'Buy for {price}',
          popup: {
            // popup for payment methods choice
            type: 'web',
          },
          links: [
            {
              text: 'Privacy policy',
              href: 'https://google.com',
            },
            {
              text: 'Terms of use',
              href: 'https://google.com',
            },
          ],
        },

        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are not enough...',
          description: "Let's go to Paywall",
          button: {
            content: 'Go to Paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
