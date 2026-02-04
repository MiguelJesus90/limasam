// LIMASAM Study Platform - Content Data
// All topics from Tema 1 to Tema 7

const TOPICS_DATA = [
    {
        id: 1,
        number: "Tema 1",
        title: "Barrido Manual Individual",
        icon: "🧹",
        definition: "Es una operación de limpieza realizada por un **solo Operario/a**, cuya misión es realizar el barrido manual de un sector o recorrido previamente fijado, utilizando herramientas específicas.",
        tools: [
            "Escoba (herramienta principal)",
            "Cubo o espuerta (para transportar residuos)",
            "Tablillas (para recoger pilas de residuos)",
            "Chapulina (para desbroce manual)",
            "Llave de papelera (para abrir papeleras)",
            "Bolsas (para residuos)",
            "Recogedor (para recoger pilas)",
            "Escobillo (opcional - todas las tareas se pueden hacer con escoba)",
            "Carrito portabolsas (para transportar herramientas y residuos)"
        ],
        objectives: [
            "No existan basura ni residuos a granel en acera ni bajo bancos",
            "Contorno de contenedores (orgánicos y selectivos) libres de residuos y ordenados",
            "Papeleras vacías y sus alrededores limpios",
            "No haya residuos u enseres obstaculizando la vía pública",
            "Se hayan eliminado residuos vegetales (hojas, semillas, frutos, tierra, excrementos)",
            "Zona de bordillo libre haya sido barrida y residuos recogidos",
            "Matas de altura superior a dos dedos desbrozadas y retiradas de la vía pública"
        ],
        phases: [
            {
                title: "Fase 1: Traslado a la zona de trabajo y selección del tramo",
                description: "En el centro de trabajo, controlar y acomodar las herramientas en el carrito portabolsas. Empujar el carrito hasta el punto de inicio de la tarea y seleccionar un primer tramo para comenzar el barrido.",
                keyPoints: [
                    "Tramo de longitud razonable",
                    "Permitir la creación de varias pilas de residuos",
                    "Mantener contacto visual con el carrito en todo momento",
                    "Minimizar desplazamientos innecesarios"
                ]
            },
            {
                title: "Fase 2: Desbroce manual / Retirada de objetos voluminosos / Limpieza de zona de contenedores",
                description: "Eliminar hierbas o matas de altura mayor a dos dedos usando la chapulina. Llevar residuos voluminosos junto a los contenedores más cercanos. Limpiar y ordenar la zona de contenedores.",
                keyPoints: [
                    "Desbroce: matas mayores a dos dedos con chapulina",
                    "NUNCA levantar la chapulina por encima del hombro",
                    "Flexionar rodillas y mantener espalda recta al agacharse",
                    "Animales muertos pequeños: retirar y depositar en contenedor orgánico",
                    "Animales muertos grandes: comunicar al COORDINADOR/ADurante el BAS"
                ]
            },
            {
                title: "Fase 3: Barrido manual de residuos",
                description: "Regresar hacia el carrito portabolsas y barrer con la escoba creando pequeños montones en zonas de apoyo físico (bordillos, muros).",
                keyPoints: [
                    "Crear pilas junto a paradas obligatorias (papeleras) para ganar tiempo",
                    "Asegurarse de barrer debajo de los bancos públicos",
                    "Evitar barrer sobre bocas de alcantarillado",
                    "Barrer a favor de la pendiente en tramos inclinados",
                    "Barrer a favor del viento cuando hay viento",
                    "El escobillo es OPCIONAL y solo para recoger residuos"
                ]
            },
            {
                title: "Fase 4: Recogida de pilas de residuos y vaciado de papeleras",
                description: "Usar tablillas y espuerta para recoger pilas. Almacenar residuos en cubo con bolsa del carrito. Separar recipiente de papelera con llave apropiada y volcar contenido.",
                keyPoints: [
                    "Usar tablillas y espuerta o escobillo y recogedor",
                    "NO OLVIDAR recoger las matas desbrozadas",
                    "TERMINANTEMENTE PROHIBIDO usar otro sistema que no sea la llave para abrir papeleras",
                    "Asegurarse de que el recipiente queda bien encajado"
                ]
            },
            {
                title: "Fase 5: Depósito de residuos recogidos",
                description: "Las bolsas llenas deben estar correctamente anudadas. Introducir bolsas en el interior de los contenedores y colocar nueva bolsa en el aro del carrito.",
                keyPoints: [
                    "Bolsas correctamente anudadas",
                    "Si la bolsa es mayor que el diámetro del aro: anudarla para que se ajuste"
                ]
            },
            {
                title: "Fase 6: Comunicación al finalizar la jornada/tarea",
                description: "Al alcanzar horario de finalización o terminar tarea, contactar con el COORDINADOR/A del Servicio e informar sobre el desarrollo de la actividad haciendo hincapié en incidencias.",
                keyPoints: [
                    "Informar al COORDINADOR/A",
                    "Reportar incidencias ocurridas"
                ]
            }
        ],
        keyExamPoints: [
            "El **escobillo es OPCIONAL**, el barrido se hace SIEMPRE con escoba",
            "Las **tablillas y espuerta** son para RECOGER pilas, no para barrer",
            "La **llave de papelera** es la ÚNICA forma correcta de abrirlas",
            "Los animales muertos pequeños se recogen, los grandes se comunican",
            "El **contacto visual con el carrito** es esencial para seleccionar tramos",
            "Las pilas deben estar junto a **paradas obligatorias** para optimizar tiempo"
        ],
        multimedia: {
            video: "https://www.youtube.com/watch?v=yHqNtSrYYQA&list=PLOBs1H7xUp3r3OFtv7WnVoMw3soe8pcgR&index=2",
            presentation: "assets/multimedia/tema1_presentacion.pdf",
            audio: "assets/multimedia/tema1_audio.m4a",
            available: true
        }
    },
    {
        id: 2,
        number: "Tema 2",
        title: "Barrido Manual con Vehículo Auxiliar",
        icon: "🚗",
        definition: "Operación de limpieza prácticamente idéntica al barrido manual individual, pero con uso de vehículo para desplazamiento a zonas alejadas del centro de trabajo y requiere licencia de conducir tipo B vigente.",
        tools: [
            "Todas las herramientas del barrido individual excepto carrito portabolsas",
            "Vehículo auxiliar",
            "Llaves del vehículo",
            "Teléfono móvil asignado al Conductor/a",
            "Tarjeta de combustible (si indicado por mando)"
        ],
        objectives: [
            "No existan basura ni residuos a granel en acera ni bajo bancos",
            "Contorno de contenedores libres de residuos y ordenados",
            "Papeleras vacías y sus alrededores limpios",
            "No haya residuos u enseres obstaculizando vía pública",
            "Se hayan eliminado residuos vegetales",
            "Zona de bordillo libre barrida y residuos recogidos",
            "Matas superiores a dos dedos desbrozadas y retiradas"
        ],
        phases: [
            {
                title: "Fase 1: Traslado a la zona de trabajo y selección del tramo",
                description: "Recoger llaves, teléfono y documentación. Realizar comprobaciones obligatorias del vehículo (niveles, dispositivos de seguridad, inspección visual). Conducir respetando normas y temperatura óptima del motor.",
                keyPoints: [
                    "Comprobar niveles: combustible, agua, aceite, refrigerante",
                    "Verificar luces, espejos, intermitentes/luces giratorias",
                    "Temperatura motor: 85ºC a 95ºC",
                    "Revoluciones eficientes: 1200-1700 rpm",
                    "Accionar freno de mano y dejar marcha puesta al estacionar",
                    "En cuesta: rueda trabada contra bordillo"
                ]
            },
            {
                title: "Fase 2: Desbroce manual / Retirada de objetos voluminosos / Limpieza de zona de contenedores",
                description: "Procedimiento idéntico a barrido individual, más la posibilidad de retirar voluminosos o trasvasar residuos de contenedores a la caja del vehículo si el COORDINADOR/A lo indica.",
                keyPoints: [
                    "SIEMPRE cubrir residuos en la caja con lona o toldo",
                    "Si se llena la caja: seguir instrucciones de depósito"
                ]
            },
            {
                title: "Fase 3: Barrido manual de residuos",
                description: "Procedimiento idéntico a barrido individual, pero siempre comenzar en el sentido del tráfico y dejar vehículo con intermitentes conectados.",
                keyPoints: [
                    "Comenzar en el sentido del tráfico",
                    "Intermitentes conectados como señalización y protección"
                ]
            },
            {
                title: "Fase 4: Recogida de pilas de residuos y vaciado de papeleras",
                description: "Llenar bolsas con residuos y depositar en cubo dentro del vehículo. Cuando el cubo está lleno, depositar en caja del vehículo auxiliar.",
                keyPoints: [
                    "Depósito en caja del vehículo facilita trabajo en zonas sin contenedores cercanos"
                ]
            },
            {
                title: "Fase 5: Depósito de residuos recogidos y vaciado de la caja del vehículo",
                description: "Bolsas anudadas firmemente y almacenadas en caja del vehículo, siempre cubiertas con lona. Descarga en cajas de transferencia o vehículo nodriza.",
                keyPoints: [
                    "NO lanzar bolsas con excesiva fuerza",
                    "NUNCA subir en cajón propio ni sobre caja transferencia",
                    "Con placa de transferencia: asegurarse estriberas desplegadas antes de subir placa",
                    "PROHIBIDO circular con cajón en basculación",
                    "Comunicación previa con Conductor/a nodriza antes de aproximarse"
                ]
            },
            {
                title: "Fase 6: Comunicación al finalizar la jornada/tarea",
                description: "Procedimiento idéntico a barrido individual.",
                keyPoints: []
            }
        ],
        keyExamPoints: [
            "**Licencia de conducir tipo B VIGENTE** es obligatoria",
            "**Comprobaciones previas** son obligatorias (niveles, luces, espejos, etc.)",
            "Temperatura motor ideal: **85-95ºC**",
            "Zona eficiente: **1200-1700 revoluciones**",
            "**Siempre lona/toldo** sobre residuos en caja",
            "**Bolsas anudadas firmemente** antes de transferencia",
            "**Intermitentes conectados** durante barrido",
            "**NUNCA subir** en cajón del vehículo o cajas de transferencia",
            "**Comunicación previa** con Conductor/a nodriza antes de aproximarse",
            "**Comprobar estriberas** antes de manipular placas de descarga",
            "**PROHIBIDO circular** con cajón en basculación"
        ],
        multimedia: {
            video: "https://www.youtube.com/watch?v=_-MWIBSISz4&list=PLOBs1H7xUp3r3OFtv7WnVoMw3soe8pcgR&index=2",
            presentation: "assets/multimedia/tema2_presentacion.pdf",
            audio: "assets/multimedia/tema2_audio.m4a",
            available: true
        }
    },
    {
        id: 3,
        number: "Tema 3",
        title: "Barrido Manual mediante Brigada",
        icon: "👥",
        definition: "Operación de barrido realizada por un equipo de trabajo compuesto de 3 Operarios/as de limpieza (mínimo) y 1 Conductor/a de vehículo recolector compactador con cabina ampliada. Requiere coordinación, orden y organización.",
        tools: [
            "Herramientas de barrido manual",
            "Vehículo recolector de carga trasera con cabina ampliada",
            "Cuarto de almacenaje para herramientas"
        ],
        objectives: [
            "Vía pública libre de envases, basura, residuos vegetales, tierra y excrementos",
            "Zona bajo bancos limpia",
            "Contorno de todos los contenedores ordenados y limpios",
            "Bordillo libre de aparcamiento sin residuos ni envases",
            "Matas de más de dos dedos de altura eliminadas convenientemente",
            "Papeleras vacías y correctamente colocadas"
        ],
        phases: [
            {
                title: "Fase 1: Traslado a la zona de trabajo",
                description: "Transporte en vehículo recolector de carga trasera con cabina ampliada. El COORDINADOR/A indica distribución inicial de funciones con sistema de rotación. Operarios cargan herramientas y suben a cabina cuando Conductor/a lo indica.",
                keyPoints: [
                    "Mínimo 3 Operarios/as + 1 Conductor/a",
                    "Grupos mayores en múltiplos de 3 (6, 9...)",
                    "Sistema de rotación: nadie realiza misma labor toda la jornada",
                    "Responsabilidades del vehículo: Conductor/a"
                ]
            },
            {
                title: "Fase 2: Barrido manual de residuos / Retirada de objetos voluminosos / Limpieza de zona de contenedores",
                description: "Distribución de trabajo entre 3 Operarios/as: AMARILLO (barrido ancho total), VERDE (bordillo y estacionamiento), ROJO (recogida de pilas y papeleras).",
                keyPoints: [
                    "Operario 1 (AMARILLO): Barre ancho total de acera, crea pilas junto a papeleras",
                    "Operario 2 (VERDE): Limpia bordillo, zona estacionamiento y contenedores",
                    "Operario 3 (ROJO): Recoge pilas, papeleras y voluminosos - ES EL 'MOTOR DEL EQUIPO'",
                    "Pilas en disposición zig-zag para recogida eficiente",
                    "Si mucho residuo: apoyo a Operario 3"
                ]
            },
            {
                title: "Fase 3: Recogida de pilas de residuos, objetos voluminosos y vaciado de papeleras",
                description: "Operario 3 recoge pilas con tablillas y cubo, recoge voluminosos y vacía papeleras. El vehículo circula unos metros adelante del Operario 3.",
                keyPoints: [
                    "Vehículo adelante del Operario 3 (no retroceder)",
                    "Mantener contacto visual con vehículo",
                    "Todo va a tolva del vehículo"
                ]
            },
            {
                title: "Fase 4: Manipulación de la tolva de carga del vehículo recolector",
                description: "Operario 3 activa peine hidráulico desde mando lateral trasero cuando tolva está llena. Debe mantener brazos extendidos y contacto visual con equipo.",
                keyPoints: [
                    "Operario 3 activa peine (no Conductor/a)",
                    "Brazos extendidos, contacto visual obligatorio",
                    "Si tolva llena: Conductor/a va a descargar con Operario 3, otros dos avanzan trabajo"
                ]
            },
            {
                title: "Fase 5: Vaciado de la tolva de carga del vehículo recolector",
                description: "Responsabilidad del Conductor/a (puede ir acompañado de 1 peón). Peine en posición de apertura máxima para descarga completa.",
                keyPoints: [
                    "SOLO descargan todos al final de jornada si no hay tiempo de volver",
                    "PROHIBIDO que Operarios NO involucrados desciendan durante maniobra"
                ]
            },
            {
                title: "Fase 6: Comunicación al finalizar la jornada/tarea",
                description: "Conductor/a tiene teléfono móvil con vehículo. Equipo en permanente contacto con COORDINADOR/A. Comunicar incidencias y solicitar nueva tarea al finalizar.",
                keyPoints: [
                    "Permanente contacto con COORDINADOR/A",
                    "Equipo trabaja en varias zonas a lo largo de jornada"
                ]
            }
        ],
        keyExamPoints: [
            "**Estructura obligatoria:** Mínimo 3 Operarios/as + 1 Conductor/a",
            "Grupos mayores en **múltiplos de 3** (6, 9...)",
            "Operario 1: Barrido ancho acera",
            "Operario 2: Bordillo + estacionamiento + contenedores",
            "Operario 3: Recogida + papeleras + voluminosos (CRÍTICO)",
            "**Rotación de funciones** durante jornada",
            "**Peine hidráulico:** lo activa Operario 3 con brazos extendidos",
            "**Descarga:** Solo Conductor/a al final si no hay tiempo",
            "**Comunicación:** Teléfono móvil con vehículo"
        ],
        multimedia: {
            video: "https://www.youtube.com/watch?v=kSeMDengHCo&list=PLOBs1H7xUp3r3OFtv7WnVoMw3soe8pcgR&index=3",
            presentation: "assets/multimedia/tema3_presentacion.pdf",
            audio: "assets/multimedia/tema3_audio.m4a",
            available: true
        }
    },
    {
        id: 4,
        number: "Tema 4",
        title: "Barrido Mixto (Manual + Mecánico)",
        icon: "🔄",
        definition: "Operación de limpieza de vía pública que combina barrido mecánico (máquina barredora) con barrido manual (Operarios con escoba o máquina sopladora). La coordinación es fundamental.",
        tools: [
            "Máquina barredora + Conductor/a",
            "Para barrido con escoba: Escoba, espuerta, bolsas, llave papeleras, tablillas",
            "Para barrido con sopladora: Máquina sopladora, gasolina, aceite, llave bujías, destornillador, cubo, bolsas, llave papeleras",
            "Vehículo auxiliar (si usa máquina sopladora)"
        ],
        objectives: [
            "No existan basura ni residuos a granel en acera ni bajo bancos",
            "Contorno de contenedores (orgánicos y selectivos) libres de residuos y ordenados",
            "Papeleras vacías y sus alrededores limpios",
            "No haya residuos u enseres obstaculizando vía pública",
            "Se hayan eliminado residuos vegetales",
            "Zona de bordillo libre haya sido barrida y residuos recogidos",
            "Matas de altura superior a dos dedos desbrozadas y retiradas",
            "Se hayan retirado enseres de tamaño abarcable"
        ],
        phases: [
            {
                title: "Fase 1: Traslado a la zona de trabajo",
                description: "Si usa escoba: ir a pie con herramientas. Si usa máquina sopladora: viajar en vehículo auxiliar cargando equipo. Comenzar operaciones antes de llegada de barredora para tener zona lista.",
                keyPoints: [
                    "Con escoba: traslado a pie",
                    "Con sopladora: vehículo auxiliar, seguir directrices de barrido con vehículo",
                    "Tener zona preparada para trabajo conjunto con máquina"
                ]
            },
            {
                title: "Fase 2: Vaciado de papeleras / Retirada de objetos voluminosos / Limpieza",
                description: "Vaciar papeleras y retirar residuos siguiendo instrucciones de barrido manual individual. Realizar hasta llegada de máquina barredora.",
                keyPoints: [
                    "Si lleva vehículo: depositar en caja",
                    "Si va a pie: depositar en contenedor más próximo",
                    "Realizar hasta llegada de máquina barredora"
                ]
            },
            {
                title: "Fase 3: Barrido manual con escoba o máquina sopladora / Limpieza de zona de contenedores",
                description: "CON ESCOBA: Operario en zona exterior empuja residuos hacia bordillo/calzada. Máquina unos metros atrás recoge por aspiración/arrastre. NO se crean pilas, solo se desplazan. CON SOPLADORA: Requiere curso formativo. Además de acera, limpia debajo de coches. Cuidado con zonas polvorientas y alcorques.",
                keyPoints: [
                    "NO se crean pilas de residuos, solo se desplazan",
                    "Máquina unos metros atrás recogiendo",
                    "Con sopladora: REQUIERE CURSO FORMATIVO",
                    "Sopladora permite acceso bajo vehículos",
                    "Calles estrechas: pueden barrer ambos lados simultáneamente",
                    "Cuando máquina se va a vaciar: Operario continúa limpieza"
                ]
            },
            {
                title: "Fase 4: Comunicación al finalizar la jornada/tarea",
                description: "De vuelta en centro de trabajo, informar al COORDINADOR/A/Encargado/a sobre incidencias. Cumplimiento de todos los objetivos es obligatorio.",
                keyPoints: [
                    "Todos los objetivos deben cumplirse",
                    "Si falta alguno: actividad incorrecta"
                ]
            }
        ],
        keyExamPoints: [
            "**Estructura básica:** 1 máquina barredora + Conductor/a + mínimo 1 Operario/a",
            "**Coordinación es esencial**",
            "**NO se crean pilas de residuos** (se desplazan para la máquina)",
            "Máquina aspira o arrastra, unos metros atrás de línea barrido",
            "**Barrido con sopladora: REQUIERE CURSO FORMATIVO**",
            "Sopladora limpia además **bajo vehículos**",
            "Cuidado con zonas polvorientas y alcorques",
            "Cuando máquina se va: Operario continúa limpieza hasta regreso o fin jornada",
            "**Obligatoriedad:** Todos objetivos deben cumplirse"
        ],
        multimedia: {
            video: "https://www.youtube.com/watch?v=2S4GHODgiKI&list=PLOBs1H7xUp3r3OFtv7WnVoMw3soe8pcgR&index=4",
            presentation: "assets/multimedia/tema4_presentacion.pdf",
            audio: "assets/multimedia/tema4_audio.m4a",
            available: true
        }
    },
    {
        id: 5,
        number: "Tema 5",
        title: "Baldeo Manual con Carrito Porta-Manguera",
        icon: "💧",
        definition: "Operación de baldeo manual con agua proveniente de red de riego. Realizada por 1 solo Operario/a en zonas equipadas con red de riego (alta o baja presión).",
        tools: [
            "Carrito portamanguera",
            "Manguera + kit de reparación de pinchazos",
            "Llave de arquetas de red de riego",
            "Tablillas",
            "Bolsas",
            "Cepillo",
            "Detergente en polvo",
            "Elementos de señalización",
            "Si carrito con grupo de presión: verificar depósito combustible lleno"
        ],
        objectives: [
            "Vía pública libre de envases y basura a granel",
            "No haya residuos vegetales, tierra y excrementos",
            "Si barrido con escobas: bordillo libre limpio",
            "Retirar enseres que obstaculicen vía pública",
            "Limpiar y ordenar contorno de contenedores",
            "Vaciar papeleras",
            "Eliminados excrementos, tierra, manchas superficiales, orín",
            "Limpiada suciedad bajo coches en aparcamientos",
            "Esquinas y bajo bancos baldeados correctamente",
            "Retirados residuos arrastrados durante baldeo",
            "Libres de residuos rejillas y desagües pluviales",
            "Sin chicles pegados en zona peatonal",
            "Sin rastros de agua sucia o charcos",
            "Sin manchas superficiales en pavimento"
        ],
        phases: [
            {
                title: "Fase 1: Traslado a la zona de trabajo y selección del tramo",
                description: "Recoger herramientas en centro. Si carrito con grupo de presión: asegurarse depósito lleno y comprobar arranque. Traslado a pie. Seleccionar tramo trabajando a favor de pendientes. OBLIGATORIO señalizar perímetro.",
                keyPoints: [
                    "Trabajar a favor de las pendientes",
                    "Zona no extremadamente grande",
                    "OBLIGATORIO señalizar perímetro de zona trabajo"
                ]
            },
            {
                title: "Fase 2: Revisión del equipo de trabajo",
                description: "Extender manguera e inspeccionar estado. Reparar roturas: cortar trozo pequeño, pasar abrazadera por extremos, insertar empalme, cerrar abrazaderas con llave (NO excesiva fuerza). Conectar a red y verificar sin pinchazos.",
                keyPoints: [
                    "Reparación: cortar mínimo, abrazaderas, empalme",
                    "Cerrar abrazaderas con llave HASTA QUE ESTÉN FIRMES",
                    "NO excesiva fuerza (riesgo de pasar rosca)",
                    "Si grupo presión: arrancar equipo observando instrucciones"
                ]
            },
            {
                title: "Fase 3: Baldeo manual / Retirada de residuos / Vaciado de papeleras / Limpieza zona contenedores",
                description: "Accionar llave de paso en boquilla. Dirigir chorro a pavimento con movimientos abanico suaves. NUNCA perpendicular: ángulo 60º. Atención a esquinas, bancos, bajo coches. Manchas: detergente en polvo sobre pavimento MOJADO y fregar. Chicles: rasqueta. Suciedad acumulada: recoger con tablillas.",
                keyPoints: [
                    "Ángulo 60º (normal), aumentar si manchas muy incrustadas",
                    "NUNCA perpendicular",
                    "Detergente EN POLVO sobre pavimento MOJADO (NO en seco)",
                    "Chicles: cortar agua, usar rasqueta",
                    "Cuidado rejillas alcantarillado (evitar atoro)",
                    "Manguera SIEMPRE fuera del radio de influencia del tráfico",
                    "Al finalizar: cerrar agua, desconectar, cerrar arqueta",
                    "Recoger señalización empezando por primera (más tiempo secándose)"
                ]
            },
            {
                title: "Fase 4: Comunicación al finalizar la jornada/tarea",
                description: "Comunicar al COORDINADOR/A desarrollo e incidencias. Si termina antes de horario: comunicar y quedar a disposición. Actividad satisfactoria solo si se alcanzan todos los objetivos.",
                keyPoints: [
                    "Comunicar desarrollo e incidencias",
                    "Todos objetivos obligatorios"
                ]
            }
        ],
        keyExamPoints: [
            "**Ángulo 60º** (normal), más si manchas incrustadas - NUNCA perpendicular",
            "**Detergente EN POLVO sobre pavimento MOJADO** (NO limpieza en seco)",
            "**Chicles:** cortar agua primero, usar rasqueta (cuidado presión)",
            "**Reparación manguera:** abrazadera por extremo, empalme, cerrar con llave (sin exceso)",
            "**Cuidado con rejillas** alcantarillado (control caudal y presión)",
            "**Manguera FUERA** del radio de influencia del tráfico",
            "**Finalización:** cerrar agua (boquilla), desconectar, cerrar arqueta",
            "**Si grupo presión:** descargar presión antes de desconectar",
            "**Señalización:** recoger empezando por primera (más tiempo secándose)",
            "**OBLIGATORIO señalizar** perímetro de zona trabajo"
        ],
        multimedia: {
            video: "https://www.youtube.com/watch?v=WG6Xvd8Nm6s&list=PLOBs1H7xUp3r3OFtv7WnVoMw3soe8pcgR&index=5",
            presentation: "assets/multimedia/tema5_presentacion.pdf",
            audio: "assets/multimedia/tema5_audio.m4a",
            available: true
        }
    },
    {
        id: 6,
        number: "Tema 6",
        title: "Baldeo Manual con Vehículo Auxiliar",
        icon: "🚛",
        definition: "Operación de baldeo manual realizada con vehículo auxiliar. Puede ser con bomba de baja presión (trabaja con red de riego) o bomba de alta presión/minihidro (depósito 500L, sin necesidad de red).",
        tools: [
            "Vehículo auxiliar de baldeo",
            "Equipo de reparación de pinchazos",
            "Tablillas",
            "Cubo o espuerta",
            "Bolsas",
            "Llave de papeleras",
            "Llave de arqueta (para baja presión)"
        ],
        objectives: [
            "Se han eliminado excrementos, tierra, manchas superficiales y restos de orín",
            "Se ha limpiado suciedad acumulada bajo coches en aparcamientos",
            "Esquinas y bajo bancos han sido baldeados correctamente",
            "Se han retirado residuos arrastrados durante baldeo",
            "Se han dejado libres de residuos rejillas y desagües pluviales",
            "No han quedado chicles pegados en zona peatonal",
            "No se observan rastros de agua sucia o charcos",
            "Papeleras están vacías",
            "No se observan manchas superficiales en pavimento"
        ],
        phases: [
            {
                title: "Fase 1: Traslado a la zona de trabajo y selección del tramo",
                description: "Seguir instrucciones de fase 1 de barrido manual con vehículo auxiliar (recepción, revisión niveles, conducción). Cargar herramientas antes de salir. En zona de trabajo: aparcar y seleccionar primer tramo.",
                keyPoints: [
                    "Vehículo auxiliar de baldeo asignado",
                    "Cargar todas herramientas antes de salir",
                    "Contemplar aspectos de baldeo con carrito (pendientes, zona no muy grande)"
                ]
            },
            {
                title: "Fase 2: Vaciado de papeleras / Retirada de objetos voluminosos / Limpieza de zona de contenedores",
                description: "Antes de comenzar baldeo, realizar vaciado de papeleras, retirada de voluminosos y limpieza de contenedores. Seguir procedimientos de barrido manual individual.",
                keyPoints: [
                    "Idéntico a barrido manual individual",
                    "Realizar antes de comenzar baldeo"
                ]
            },
            {
                title: "Fase 3: Revisión del equipo de trabajo y conexión a red de riego",
                description: "Conectar luces de seguridad y señalizar perímetro. BAJA PRESIÓN: extender mangueras (entrada y baldeo), revisar/reparar, conectar primero baldeo a motor y luego entrada a red, encender motor y dar paso agua. Verificar testigos (presión, aceite, temperatura). ALTA PRESIÓN: conectar a toma de carga y llenar tanque.",
                keyPoints: [
                    "Conectar luces de seguridad y señalizar",
                    "Baja presión: orden de conexión importante (baldeo a motor, entrada a red)",
                    "Testigos obligatorios: presión, aceite, temperatura",
                    "Si testigo encendido: comunicar INMEDIATAMENTE al mando",
                    "Alta presión: llenar tanque de 500L"
                ]
            },
            {
                title: "Fase 4: Baldeo manual",
                description: "Instrucciones idénticas a baldeo manual con carrito (FASE 3): ángulo de chorro, cuidados especiales, retirada de residuos, vaciado papeleras, limpieza contenedores, rejillas, manguera y tráfico, finalización.",
                keyPoints: [
                    "Exactamente igual que baldeo con carrito",
                    "Todos los procedimientos aplican"
                ]
            },
            {
                title: "Fase 5: Comunicación al finalizar la jornada/tarea",
                description: "Operario/a dispone de teléfono móvil para comunicar con mando inmediato. Notificar incidencias relevantes. Si termina antes: obligatorio comunicar y quedar a órdenes. Actividad correcta si se cumplen todos los objetivos.",
                keyPoints: [
                    "Teléfono móvil (diferencia con carrito)",
                    "Incidencias relevantes",
                    "Si termina antes: comunicar y quedar a órdenes"
                ]
            }
        ],
        keyExamPoints: [
            "**FORMACIÓN OBLIGATORIA:** Curso funcionamiento motor auxiliar, mantenimiento, prevención riesgos",
            "**Baja presión:** usa red de riego (como carrito grupo presión)",
            "**Alta presión (minihidro):** depósito 500L, sin necesidad de red",
            "**Fase 1:** Seguir procedimientos barrido con vehículo auxiliar, cargar todas herramientas",
            "**Fase 2:** Idéntico a barrido manual individual",
            "**Fase 3 - Conexión baja presión:** extender mangueras, revisar, conectar motor y agua",
            "**Testigos obligatorios:** presión, aceite, temperatura - Si encendido: comunicar INMEDIATAMENTE",
            "**Fase 4:** Exactamente igual que baldeo con carrito",
            "**Fase 5:** Teléfono móvil, incidencias, si termina antes comunicar",
            "**Conectar luces y señalizar** zona"
        ],
        multimedia: {
            video: "https://www.youtube.com/watch?v=MIPqYQLASKU&list=PLOBs1H7xUp3r3OFtv7WnVoMw3soe8pcgR&index=6",
            presentation: "assets/multimedia/tema6_presentacion.pdf",
            audio: "assets/multimedia/tema6_audio.m4a",
            available: true
        }
    },
    {
        id: 7,
        number: "Tema 7",
        title: "Baldeo Manual Mecanizado Mixto",
        icon: "🌊",
        definition: "Actividad de limpieza de vía pública mediante equipos de baldeo en zonas SIN red de riego. Combina baldeo mecánico (con presión) y trabajo manual.",
        tools: [
            "Cisterna con motor auxiliar de baja presión (500L aprox)",
            "Escoba, cepillo, chapulina, espuerta, bolsas, tablillas",
            "Llaves de papeleras",
            "Detergente en polvo",
            "Elementos de señalización"
        ],
        objectives: [
            "No deben quedar matas de altura mayor a dos dedos",
            "Se deben retirar todos envases y residuos a granel",
            "Vía pública libre de excrementos, tierra y residuos vegetales",
            "Contorno de contenedores limpio y ordenado",
            "Papeleras vacías",
            "No se tienen que ver manchas superficiales",
            "Se deben eliminar rastros o charcos de agua sucia",
            "Se debe limpiar debajo de bancos públicos y coches aparcados",
            "No se deben dejar zonas con residuos acumulados"
        ],
        phases: [
            {
                title: "Fase 1: Traslado a la zona de trabajo y selección del tramo",
                description: "A PIE: ir con herramientas si zona no muy alejada. EN CABINA: viajar con Conductor/a llevando herramientas + detergente, cargar en espacio adecuado. Al subir/bajar: SIEMPRE de cara a cabina, usar agarraderas, apoyarse firmemente en escalones. Seleccionar tramo según pautas de baldeo con carrito.",
                keyPoints: [
                    "1 Operario/a baldeador + 1 Operario/a auxiliar + 1 Conductor/a",
                    "Cisterna 500L con motor auxiliar baja presión",
                    "Al subir/bajar cabina: de cara, agarraderas, firmemente en escalones",
                    "Seleccionar tramo: observar pendientes, no muy grande"
                ]
            },
            {
                title: "Fase 2: Desbroce manual / Retirada de objetos voluminosos / Limpieza de zona de contenedores / Vaciado de papeleras",
                description: "OPERARIO 1: recorrer tramo haciendo desbroce manual, retirada voluminosos y limpieza contenedores. OPERARIO 2: ir detrás vaciando papeleras. Seguir instrucciones de barrido manual individual.",
                keyPoints: [
                    "Operario 1: Desbroce + voluminosos + zona contenedores",
                    "Operario 2: Papeleras",
                    "Seguir procedimientos barrido individual"
                ]
            },
            {
                title: "Fase 3: Barrido manual de residuos / Recogida de pilas de residuos",
                description: "OPERARIO 1: regresa hacia vehículo barriendo y creando pilas. OPERARIO 2: va detrás recogiendo pilas con espuerta y tablillas mientras las forman.",
                keyPoints: [
                    "Operario 1: Barre y crea pilas",
                    "Operario 2: Recoge pilas mientras se forman"
                ]
            },
            {
                title: "Fase 4: Revisión del equipo de trabajo y señalización de la zona de trabajo",
                description: "BALDEADOR: revisar manguera según baldeo con carrito. AUXILIAR: señalizar perímetro. Cuando auxiliar termina: comunica a baldeador, este coordina con Conductor/a para paso de agua y comenzar baldeo.",
                keyPoints: [
                    "Auxiliar señaliza",
                    "Baldeador revisa manguera",
                    "Coordinación para paso de agua"
                ]
            },
            {
                title: "Fase 5: Baldeo manual mixto mecanizado",
                description: "Conductor/a conecta toma de fuerza/motor auxiliar cuando baldeador lo indique. PROCESO: 1) Baldeador aplica agua a zona no muy extensa. 2) Auxiliar aplica detergente en polvo sobre manchas (pavimento MOJADO) y cepilla. 3) Baldeador va detrás aplicando agua a presión. 4) Auxiliar extiende/recoge manguera, elimina chicles, recoge residuos acumulados. PROHIBIDO mover cisterna con manguera sin recoger (excepto pequeños desplazamientos con vigilancia). Intercambiar funciones durante jornada.",
                keyPoints: [
                    "1) Agua a zona no muy grande",
                    "2) Auxiliar: detergente (pavimento MOJADO) y cepillar",
                    "3) Baldeador: presión detrás",
                    "4) Auxiliar: recoge residuos con tablillas",
                    "PROHIBIDO mover cisterna con manguera sin recoger (excepto pequeños desplazamientos con vigilancia)",
                    "Recomendaciones de baldeo con carrito y vehículo: igualmente válidas, necesarias y OBLIGATORIAS",
                    "ROTACIÓN: intercambiar baldeador/auxiliar durante jornada"
                ]
            },
            {
                title: "Fase 6: Limpieza de repaso de zonas aledañas",
                description: "Cuando Operarios/as NO regresan en vehículo al centro, quedan realizando tareas de repaso de limpieza para completar horario de jornada laboral según indique COORDINADOR/A.",
                keyPoints: [
                    "Tareas de repaso si no regresan en vehículo",
                    "Completar horario de jornada"
                ]
            },
            {
                title: "Fase 7: Comunicación al finalizar la jornada/tarea",
                description: "Informar al mando inmediato desarrollo de tarea e incidencias. Actividad completada satisfactoriamente solo si se alcanzan todos los objetivos.",
                keyPoints: [
                    "Informar desarrollo e incidencias",
                    "Todos objetivos obligatorios"
                ]
            }
        ],
        keyExamPoints: [
            "**EQUIPO OBLIGATORIO:** 1 baldeador + 1 auxiliar + 1 Conductor/a + Cisterna 500L motor auxiliar baja presión",
            "**Traslado en cabina:** de frente, firmemente en escalones, agarraderas",
            "**Fase 2:** Operario 1 (desbroce+voluminosos+contenedores), Operario 2 (papeleras)",
            "**Fase 3:** Operario 1 (barre y crea pilas), Operario 2 (recoge pilas)",
            "**Fase 5 - PROCESO:** 1) Agua a zona, 2) Auxiliar detergente MOJADO y cepilla, 3) Baldeador presión detrás, 4) Auxiliar recoge",
            "**Auxiliar:** extiende/recoge manguera + chicles + residuos",
            "**PROHIBIDO** mover cisterna con manguera sin recoger (excepto pequeños desplazamientos con vigilancia)",
            "**ROTACIÓN:** intercambiar funciones baldeador/auxiliar durante jornada",
            "**Recomendaciones** de baldeo con carrito y vehículo: igualmente válidas y OBLIGATORIAS",
            "**Finalización:** Recoger material trabajo, FINALMENTE señalización"
        ],
        multimedia: {
            video: "https://www.youtube.com/watch?v=rvwmneci6RU&list=PLOBs1H7xUp3r3OFtv7WnVoMw3soe8pcgR&index=7",
            presentation: "assets/multimedia/tema7_presentacion.pdf",
            audio: "assets/multimedia/tema7_audio.m4a",
            available: true
        }
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOPICS_DATA;
}
