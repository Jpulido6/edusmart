import { Font, StyleSheet } from "@react-pdf/renderer";
import source from '@/assets/fonts/geist-sans-latin-400-normal.ttf'
import sourceBold from '@/assets/fonts/geist-sans-latin-600-normal.ttf'
export const data = [
    {
        area: "CIENCIAS NATURALES",
        subjects: [
            {
                name: "Ciencias Naturales",
                nota: "8.0",
                desempeno: " ALTO",
                observacion: "Relaciona las características de los seres vivos con su hábitat. Describe cambios físicos en plantas y animales e identifica diferencias entre seres vivos y objetos inertes."
            }
        ]
    },
    {
        area: "CIENCIAS SOCIALES",
        subjects: [
            {
                name: "Sociales",
                nota: "9.0",
                desempeno: " ALTO",
                observacion: "Identifica situaciones de discriminación e incentiva la inclusión en su entorno. Respeta las normas de seguridad y reconoce la importancia de los espacios recreativos y zonas inclusivas."
            }
        ]
    },
    {
        area: "ARTÍSTICA",
        subjects: [
            {
                name: "Artística",
                nota: "10.0",
                desempeno: " ALTO",
                observacion: "Expresa emociones e ideas a través de producciones artísticas, explorando diversas técnicas y mostrando interés en mejorar sus creaciones."
            }
        ]
    },
    {
        area: "ÉTICA Y VALORES HUMANOS",
        subjects: [
            {
                name: "Ética y Valores",
                nota: "10.0",
                desempeno: " SUPERIOR",
                observacion: "Comprende los principios éticos que guían el comportamiento humano en diferentes situaciones, demostrando reflexión crítica."
            }
        ]
    },
    {
        area: "EDUCACIÓN FÍSICA",
        subjects: [
            {
                name: "Educación Física",
                nota: "9.0",
                desempeno: " ALTO",
                observacion: "Realiza movimientos básicos con coordinación y participa activamente en juegos y actividades físicas, respetando las normas de comportamiento."
            }
        ]
    },
    {
        area: "EDUCACIÓN RELIGIOSA",
        subjects: [
            {
                name: "Educación Religiosa",
                nota: "9.0",
                desempeno: " ALTO",
                observacion: "Reconoce y valora la amistad con Dios en la vida de los creyentes, demostrando actitudes positivas en su convivencia escolar."
            }
        ]
    },
    {
        area: "HUMANIDADES",
        subjects: [
            {
                name: "Lengua Castellana",
                nota: "9.0",
                desempeno: " ALTO",
                observacion: "Reconoce los elementos de una narración y clasifica los sustantivos según su tipo. Usa sinónimos, antónimos y mayúsculas correctamente en sus escritos."
            }
        ]
    },
    {
        area: "MATEMÁTICAS",
        subjects: [
            {
                name: "Matemáticas",
                nota: "10.0",
                desempeno: " SUPERIOR",
                observacion: "Aplica los números hasta 999 en distintos contextos, resolviendo sumas y restas con estrategias eficaces. Representa trayectorias y organiza datos con precisión."
            }
        ]
    },
    {
        area: "TECNOLOGÍA E INFORMÁTICA",
        subjects: [
            {
                name: "Tecnología e Informática",
                nota: "7.0",
                desempeno: " BÁSICO",
                observacion: "Identifica el computador y sus partes básicas. Distingue algunas diferencias con otros dispositivos tecnológicos con apoyo."
            }
        ]
    },
    {
        area: "INGLÉS",
        subjects: [
            {
                name: "Inglés",
                nota: "8.0",
                desempeno: " ALTO",
                observacion: "Responde saludos y despedidas de manera adecuada. Identifica y escribe palabras y frases cortas sobre emociones, números y su entorno, siguiendo instrucciones en inglés con facilidad."
            }
        ]
    }
];
Font.register({
    family: 'GeistBold',
    src: sourceBold
})
Font.register({
    family: 'Geist',
    src: source
})
export const styles = StyleSheet.create({

    page: {
        padding: 10,
        fontSize: 9,
        fontFamily: 'Geist'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        flex: 1,
        height: '100%',
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
    },
    containerInfo: {
        display: 'flex',
        flexDirection: 'column',
        height: '5%',
        borderRadius: 5,
    },
    containerInfoNotas: {
        display: 'flex',
        flexDirection: 'column',
        height: '20px',
        borderBottom: '1px solid black',
    },
    containerNotas: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        height: '60%',
        borderRadius: 5,
    },

    containerFooter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: '10%',
        borderRadius: 5,
        lineHeight: 1,
    },
    header: {
        display: 'flex',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
    },
    containerLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        flex: 2,
    },
    title: {
        fontSize: 12,
        fontFamily: 'GeistBold',
        textAlign: 'center',
    },
    textCenter: {
        marginBottom: 4,
        textAlign: 'center',
        marginTop: 4
    },
    logo: {
        width: 30,
        height: 30,
    },
    containerTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 7,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 10,
        borderBottom: '1px solid black',
        paddingBottom: 2,
    },
    sectionInfoEstudiante: {
        display: 'flex',
        border: '1px solid black',
        borderRadius: 5,
        flex: 1,
        height: '50px',
    },
    sectionInfoNotas: {
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        borderRadius: 5,
    },
    col1: { width: '20px', textAlign: 'center',fontFamily:'GeistBold' },
    col2: { flex: 2, textAlign: 'center',fontFamily:'GeistBold' },
    col3: { flex: 5, textAlign: 'center',fontFamily:'GeistBold' },
    col4: { flex: 1, textAlign: 'center',fontFamily:'GeistBold' },
    row1: { width: '20px', textAlign: 'center' },
    row2: { flex: 1, textAlign: 'center', textTransform: 'upperfirst', paddingHorizontal: 5 },
    row3: { flex: 5, textAlign: 'justify', textTransform: 'upperfirst', paddingHorizontal: 5 },
    row4: { flex: 1, textAlign: 'justify', textTransform: 'upperfirst', paddingHorizontal: 5 },
    borderTop: {
        borderTop: '1px solid black',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    titleInfo: {
        fontWeight: 'bold',
        fontFamily: 'GeistBold',
        fontSize: 10,
    },
    infoBox: {
        backgroundColor: '#f0f0f0',
    },
    table: {
        //   display: "table",
        width: "auto",
        marginTop: 5,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableColHeader: {
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#f0f0f0',
        padding: 3,
        fontWeight: 'bold'
    },
    tableCol: {
        width: "20%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        padding: 3
    },
    description: {
        marginBottom: 5,
        marginTop: -5
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 8,
        color: 'grey',
    }
    // header: { fontSize: 12, textAlign: 'center', marginBottom: 10 },
    // section: { margin: 10, fontSize: 10 },
    // title: { fontSize: 14, fontWeight: 'bold' },
    // row: { flexDirection: 'row', justifyContent: 'space-between' },
    // label: { fontWeight: 'bold' },
    // value: {}
});
