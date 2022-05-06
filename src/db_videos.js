const arrayVideos = [
  {
    id: 'init',
    title:
      'Entrevista React - Simulación interactiva, elige tus propias respuestas',
    askStartTime: '2:01',
    loopStartTime: '2:01',
    loopEndTime: '2:03',
    endTime: '2:04',
    options: [
      'react-es-muy-flexible-y-rapido-ante-los-cambios',
      'react-es-muy-estructurada-genial-para-requerimientos-no-cambiantes',
    ],
  },
  {
    id: 'react-es-muy-estructurada-genial-para-requerimientos-no-cambiantes',
    title: 'Es muy estructurada, genial para requerimientos no cambiantes',
    askStartTime: '0:21',
    loopStartTime: '0:22',
    loopEndTime: '0:23',
    endTime: '0:24',
    options: ['react-muy-lento', 'react-muy-flexible'],
  },

  {
    id: 'react-es-muy-flexible-y-rapido-ante-los-cambios',
    title: 'Es muy flexible y rápido ante los cambios',
    askStartTime: '0:13',
    loopStartTime: '0:13',
    loopEndTime: '0:16',
    endTime: '0:18',
    options: ['react-muy-lento', 'react-muy-flexible'],
  },
  {
    id: 'react-muy-flexible',
    title: 'Es muy flexible',
    askStartTime: '0:29',
    loopStartTime: '0:30',
    loopEndTime: '0:32',
    options: [
      'redux-para-reducir-entidades',
      'redux-para-guardar-entidades-que-se-utilizan-en-toda-la-app',
    ],
  },
  {
    id: 'react-muy-lento',
    title: 'Muy lento',
    askStartTime: '0:29',
    loopStartTime: '0:30',
    loopEndTime: '0:32',
    options: [
      'redux-para-reducir-entidades',
      'redux-para-guardar-entidades-que-se-utilizan-en-toda-la-app',
    ],
  },
  {
    id: 'redux-para-reducir-entidades',
    title: 'Para reducir entidades!',
    askStartTime: '0:56',
    loopStartTime: '0:57',
    loopEndTime: '0:59',
    options: [
      'context-compartir-informacion-dentro-de-una-misma-pagina',
      'context-para-compartir-informacion-de-padre-a-hijo',
    ],
  },
  {
    id: 'redux-para-guardar-entidades-que-se-utilizan-en-toda-la-app',
    title: 'Para guardar entidades que se utilizan en toda la app',
    askStartTime: '0:13',
    loopStartTime: '0:14',
    loopEndTime: '0:16',
    endTime: '0:18',
    options: [
      'context-compartir-informacion-dentro-de-una-misma-pagina',
      'context-para-compartir-informacion-de-padre-a-hijo',
    ],
  },
  {
    id: 'context-compartir-informacion-dentro-de-una-misma-pagina',
    title: 'Compartir información dentro una misma página',
    askStartTime: '0:18',
    loopStartTime: '0:19',
    loopEndTime: '0:21',
    endTime: '0:23',
    options: [
      'virtual-dom-para-detectar-cambios-y-renderizar-solo-lo-necesario',
      'virtual-dom-es-la-api-de-react-para-modificar-el-dom',
    ],
  },
  {
    id: 'context-para-compartir-informacion-de-padre-a-hijo',
    title: 'Para compartir información de padre a hijo',
    askStartTime: '1:08',
    loopStartTime: '1:09',
    loopEndTime: '1:11',
    options: [
      'virtual-dom-para-detectar-cambios-y-renderizar-solo-lo-necesario',
      'virtual-dom-es-la-api-de-react-para-modificar-el-dom',
    ],
  },
  {
    id: 'virtual-dom-para-detectar-cambios-y-renderizar-solo-lo-necesario',
    title: 'Para detectar cambios y renderizar solo lo necesario',
    askStartTime: '0:30',
    loopStartTime: '0:31',
    loopEndTime: '0:33',
    endTime: '0:35',
    options: [
      'stateless-para-mostrar-informacion-en-pantalla',
      'stateless-contiene-la-logica-de-negocios',
    ],
  },
  {
    id: 'virtual-dom-es-la-api-de-react-para-modificar-el-dom',
    title: 'Es la API de React para modificar el dom',
    askStartTime: '1:05',
    loopStartTime: '1:06',
    loopEndTime: '1:08',
    options: [
      'stateless-para-mostrar-informacion-en-pantalla',
      'stateless-contiene-la-logica-de-negocios',
    ],
  },
  {
    id: 'stateless-para-mostrar-informacion-en-pantalla',
    title: 'Para mostrar información en pantalla',
    askStartTime: '0:22',
    loopStartTime: '0:23',
    loopEndTime: '0:25',
    options: [
      'lazy-loading-carga-de-los-elementos-lo-antes-posible',
      'lazy-loading-carga-en-demanda-de-los-elementos',
    ],
  },
  {
    id: 'stateless-contiene-la-logica-de-negocios',
    title: 'Contiene la lógica de negocios',
    askStartTime: '0:46',
    loopStartTime: '0:47',
    loopEndTime: '0:49',
    endTime: '0:51',
    options: [
      'lazy-loading-carga-de-los-elementos-lo-antes-posible',
      'lazy-loading-carga-en-demanda-de-los-elementos',
    ],
  },
  {
    id: 'lazy-loading-carga-en-demanda-de-los-elementos',
    title: 'Carga en demanda de los elementos',
    askStartTime: '0:22',
    loopStartTime: '0:23',
    loopEndTime: '0:25',
    options: [
      'use-memo-memoriza-los-parametros-de-las-llamadas',
      'use-memo-memoriza-los-resultados-de-las-llamadas',
    ],
  },
  {
    id: 'lazy-loading-carga-de-los-elementos-lo-antes-posible',
    title: 'Carga de los elementos lo antes posible',
    askStartTime: '1:48',
    loopStartTime: '1:49',
    loopEndTime: '1:49',
    options: [
      'use-memo-memoriza-los-parametros-de-las-llamadas',
      'use-memo-memoriza-los-resultados-de-las-llamadas',
    ],
  },
  {
    id: 'use-memo-memoriza-los-parametros-de-las-llamadas',
    title: 'Memoriza los parámetros de las llamadas',
    askStartTime: '0:42',
    loopStartTime: '0:43',
    loopEndTime: '0:43',
    options: [
      'use-callback-hace-que-los-metodos-sean-mas-rapidos',
      'use-callback-memoriza-los-resultados-de-los-metodos',
    ],
  },
  {
    id: 'use-memo-memoriza-los-resultados-de-las-llamadas',
    title: 'Memoriza los resultados de las llamadas',
    askStartTime: '0:07',
    loopStartTime: '0:08',
    loopEndTime: '0:10',
    endTime: '0:12',
    options: [
      'use-callback-hace-que-los-metodos-sean-mas-rapidos',
      'use-callback-memoriza-los-resultados-de-los-metodos',
    ],
  },
  {
    id: 'use-callback-hace-que-los-metodos-sean-mas-rapidos',
    title: 'Hace que los métodos sean más rápidos',
    askStartTime: '0:39',
    loopStartTime: '0:40',
    loopEndTime: '0:42',
    endTime: '0:44',
    options: [
      'composition-trabajar-sobre-elementos-de-forma-individual',
      'composition-trabajar-sobre-elementos-aumentando-la-dependencia',
    ],
  },
  {
    id: 'use-callback-memoriza-los-resultados-de-los-metodos',
    title: 'Memoriza los resultados de los métodos',
    askStartTime: '0:20',
    loopStartTime: '0:24',
    loopEndTime: '0:25',
    endTime: '0:26',
    options: [
      'composition-trabajar-sobre-elementos-de-forma-individual',
      'composition-trabajar-sobre-elementos-aumentando-la-dependencia',
    ],
  },
  {
    id: 'composition-trabajar-sobre-elementos-de-forma-individual',
    title:
      'Es un patrón que permite trabajar sobre los elementos de forma individual en una estructura de árbol',
    askStartTime: '0:15',
    loopStartTime: '0:16',
    loopEndTime: '0:18',
    endTime: '0:20',
    options: ['axios-crear-nuestra-propia-api', 'axios-realizar-peticiones'],
  },
  {
    id: 'composition-trabajar-sobre-elementos-aumentando-la-dependencia',
    title:
      'Es un patrón que nos permite trabajar sobre los elementos aumentando la dependencia de los mismos',
    askStartTime: '2:20',
    loopStartTime: '2:21',
    loopEndTime: '2:23',
    options: ['axios-crear-nuestra-propia-api', 'axios-realizar-peticiones'],
  },
  {
    id: 'axios-crear-nuestra-propia-api',
    title: 'Una librería para crear nuestra propia API',
    askStartTime: '0:31',
    loopStartTime: '0:32',
    loopEndTime: '0:34',
    endTime: '0:36',
    options: [
      'axios-interceptor-intercepta-props',
      'axios-interceptor-intercepta-peticiones',
    ],
  },
  {
    id: 'axios-realizar-peticiones',
    title: 'Una librería para realizar peticiones',
    askStartTime: '0:15',
    loopStartTime: '0:16',
    loopEndTime: '0:18',
    endTime: '0:20',
    options: [
      'axios-interceptor-intercepta-props',
      'axios-interceptor-intercepta-peticiones',
    ],
  },
  {
    id: 'axios-interceptor-intercepta-props',
    title:
      'Intercepta las props de los componentes para modificarlas antes de que lleguen a destino',
    askStartTime: '1:34',
    loopStartTime: '1:35',
    loopEndTime: '',
    options: ['use-effect-ciclo-de-vida', 'use-effect-peticiones-al-backend'],
  },
  {
    id: 'axios-interceptor-intercepta-peticiones',
    title:
      'Intercepta peticiones y respuestas de endpoints para poderlas modificar antes de llegar a destino',
    askStartTime: '0:12', // visto
    loopStartTime: '0:13',
    loopEndTime: '0:15',
    endTime: '0:17',
    options: ['use-effect-ciclo-de-vida', 'use-effect-peticiones-al-backend'],
  },
  {
    id: 'use-effect-ciclo-de-vida',
    title: 'Representa los ciclos de vida del component',
    askStartTime: '0:32',
    loopStartTime: '0:33',
    loopEndTime: '0:35',
    endTime: '0:36',
    options: [
      'use-effect-body-logica-por-cambio-en-state',
      'use-effect-body-solo-para-peticiones-al-back',
    ],
  },
  {
    id: 'use-effect-peticiones-al-backend',
    title: 'Una forma más linda de hacer peticiones al backend',
    askStartTime: '0:32',
    loopStartTime: '0:33',
    loopEndTime: '0:35',
    endTime: '0:36',
    options: [
      'use-effect-body-logica-por-cambio-en-state',
      'use-effect-body-solo-para-peticiones-al-back',
    ],
  },
  {
    id: 'use-effect-body-logica-por-cambio-en-state',
    title: 'Ejecutar lógica por cada cambio en el state',
    askStartTime: '0:05',
    loopStartTime: '0:06',
    loopEndTime: '0:08',
    endTime: '0:09',
    options: [
      'use-effect-callback-devolver-resultado',
      'use-effect-callback-logica-destruir-componente',
    ],
  },
  {
    id: 'use-effect-body-solo-para-peticiones-al-back',
    title: 'Se usa solo para hacer peticiones al back',
    askStartTime: '0:28',
    loopStartTime: '0:29',
    loopEndTime: '0:31',
    endTime: '0:32',
    options: [
      'use-effect-callback-devolver-resultado',
      'use-effect-callback-logica-destruir-componente',
    ],
  },

  {
    id: 'use-effect-callback-devolver-resultado',
    title: 'Para devolver un resultado luego de ejecutar el useEffect',
    askStartTime: '0:53',
    loopStartTime: '0:54',
    loopEndTime: '0:56',
    endTime: '0:57',
    options: [
      'use-effect-dependencias-cuales-importar-al-componente',
      'use-effect-dependencias-fijarse-a-la-hora-de-ejecutar',
    ],
  },
  {
    id: 'use-effect-callback-logica-destruir-componente',
    title: 'Para ejecutar lógica al destruir nuestro componente',
    askStartTime: '0:13', // visto
    loopStartTime: '0:14',
    loopEndTime: '0:16',
    endTime: '0:17',
    options: [
      'use-effect-dependencias-cuales-importar-al-componente',
      'use-effect-dependencias-fijarse-a-la-hora-de-ejecutar',
    ],
  },
  {
    id: 'use-effect-dependencias-cuales-importar-al-componente',
    title: 'Para identificar qué dependencias importar al componente',
    askStartTime: '1:31',
    loopStartTime: '1:32',
    loopEndTime: '1:32',
    options: [
      'suspense-lazy-retrasar-renderizado',
      'suspense-lazy-carga-a-demanda-de-elementos',
    ],
  },
  {
    id: 'use-effect-dependencias-fijarse-a-la-hora-de-ejecutar',
    title:
      'Para decir qué dependencias fijarse a la hora de ejecutar la lógica contenida en el useEffect',
    askStartTime: '0:17',
    loopStartTime: '0:18',
    loopEndTime: '0:20',
    endTime: '0:21',
    options: [
      'suspense-lazy-retrasar-renderizado',
      'suspense-lazy-carga-a-demanda-de-elementos',
    ],
  },
  {
    id: 'suspense-lazy-retrasar-renderizado',
    title: 'Para retrasar el renderizado de los componentes',
    askStartTime: '',
    loopStartTime: '',
    loopEndTime: '',
  },
  {
    id: 'suspense-lazy-carga-a-demanda-de-elementos',
    title:
      'Para carga a demanda de elementos y mostrar un componente mientras renderiza',
    askStartTime: '',
    loopStartTime: '',
    loopEndTime: '',
  },
];

const db_videos = arrayVideos.reduce((obj, video) => {
  obj[video.id] = video;
  return obj;
}, {});

export default db_videos;
