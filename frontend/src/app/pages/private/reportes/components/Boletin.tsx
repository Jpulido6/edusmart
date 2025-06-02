import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import source from '@/assets/fonts/geist-sans-latin-400-normal.ttf'
import logoImg from '@/assets/img/img.png'
import { data } from './config'
import sourceBold from '@/assets/fonts/geist-sans-latin-600-normal.ttf'

Font.register({
    family: 'GeistBold',
    src: sourceBold
})
Font.register({
    family: 'Geist',
    src: source
})

// const styles = StyleSheet.create({
//     page: {
//         padding: 20,
//         fontSize: 10,
//         fontFamily: 'Geist'
//     },
//     header: {
//         textAlign: 'center',
//         marginBottom: 10,
//     },
//     table: {
//         // display: "table",
//         width: "auto",
//         marginVertical: 10,
//         borderStyle: "solid",
//         borderWidth: 1,
//         borderRightWidth: 0,
//         borderBottomWidth: 0,
//     },
//     tableRow: {
//         flexDirection: "row",
//     },
//     tableColHeader: {
//         width: "10%",
//         borderStyle: "solid",
//         borderWidth: 1,
//         borderLeftWidth: 0,
//         borderTopWidth: 0,
//         backgroundColor: '#f0f0f0',
//         padding: 2,
//         fontWeight: 'bold'
//     },
//     tableCol: {
//         width: "10%",
//         borderStyle: "solid",
//         borderWidth: 1,
//         borderLeftWidth: 0,
//         borderTopWidth: 0,
//         padding: 2
//     },
//     title: {
//         fontSize: 14,
//         fontFamily: 'GeistBold',
//         marginBottom: 4
//     },
//     subjectTitle: {
//         marginTop: 8,
//         fontWeight: 'bold'
//     },
//     footer: {
//         position: 'absolute',
//         bottom: 20,
//         left: 0,
//         right: 0,
//         textAlign: 'center',
//         fontSize: 8,
//         color: 'grey',
//     },
// });
// export interface Subject {
//     name: string;
//     p1?: string;
//     p2?: string;
//     p3?: string;
//     p4?: string;
//     p5?: string;
//     prom?: string;
//     desc?: string;
// }

// export interface Area {
//     area: string;
//     subjects: Subject[];
// }
// export interface BoletinPDFProps {
//     student: string;
//     period: string;
//     director: string;
//     grade: string;
//     subjects: Area[];
// }


// function BoletinPdf({ student, period, director, grade, subjects }: BoletinPDFProps) {
//     return (
//         <Document>
//             <Page size="A4" style={styles.page}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>INSTITUCION EDUCATIVA TECNICO AGROPECUARIO</Text>
//                     <Text>Aprobación Oficial No. 1234 Mayo 11 de 0000</Text>
//                     <Text>NIT. 222.222.111-0</Text>
//                     <Text>INFORME DE PROCESOS EDUCATIVOS 2023</Text>
//                     <Text>SECCIÓN PRIMARIA</Text>
//                     <Text>Estudiante: {student}</Text>
//                     <Text>Periodo: {period}</Text>
//                     <Text>Director de grupo: {director}</Text>
//                     <Text>Grado: {grade}</Text>
//                 </View>

//                 {subjects.map((area, index) => (
//                     <View key={index}>
//                         <Text style={styles.subjectTitle}>{area.area}</Text>
//                         <View style={styles.table}>
//                             <View style={styles.tableRow}>
//                                 <Text style={styles.tableColHeader}>Asignatura</Text>
//                                 <Text style={styles.tableColHeader}>1P</Text>
//                                 <Text style={styles.tableColHeader}>2P</Text>
//                                 <Text style={styles.tableColHeader}>3P</Text>
//                                 <Text style={styles.tableColHeader}>4P</Text>
//                                 <Text style={styles.tableColHeader}>5P</Text>
//                                 <Text style={styles.tableColHeader}>Prom</Text>
//                                 <Text style={styles.tableColHeader}>Desempeño</Text>
//                             </View>
//                             {area.subjects.map((subj, idx) => (
//                                 <View style={styles.tableRow} key={idx}>
//                                     <Text style={styles.tableCol}>{subj.name}</Text>
//                                     <Text style={styles.tableCol}>{subj.p1}</Text>
//                                     <Text style={styles.tableCol}>{subj.p2}</Text>
//                                     <Text style={styles.tableCol}>{subj.p3}</Text>
//                                     <Text style={styles.tableCol}>{subj.p4}</Text>
//                                     <Text style={styles.tableCol}>{subj.p5}</Text>
//                                     <Text style={styles.tableCol}>{subj.prom}</Text>
//                                     <Text style={styles.tableCol}>{subj.desc}</Text>
//                                 </View>
//                             ))}
//                         </View>
//                     </View>
//                 ))}
//                 <Text style={styles.footer}>Generado por EduSmart</Text>
//             </Page>
//         </Document>
//     )
// }

// export default BoletinPdf;



const styles = StyleSheet.create({
    page: {
        padding: 10,
        fontSize: 9,
        fontFamily: 'Geist'
    },
    header: {
        display: 'flex',
        border: '1px solid black',
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
        flex: 1
    },
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
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 5,
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
});



const BoletinPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <View style={styles.containerLogo}>
                    <Image source={logoImg} style={styles.logo} />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>I.E.T. AGROPECUARIA DE SAN JOSÉ DE ORIENTE</Text>
                    <Text>Sede: SEDE ESCUELA RURAL MIXTA SAN JOSÉ</Text>
                    <Text>Nit. 800.234.876-1 Dane N° 420661000011</Text>
                </View>
            </View>
            <Text style={[styles.title, styles.textCenter]}>INFORME VALORATIVO INTEGRAL</Text>
            {/* <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableColHeader}>Estudiante</Text>
                    <Text style={styles.tableColHeader}>Grado</Text>
                    <Text style={styles.tableColHeader}>Periodo</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>MARTÍNEZ AMADO, JELIBETH ELIANDRY</Text>
                    <Text style={styles.tableCol}>SEGUNDO - 1</Text>
                    <Text style={styles.tableCol}>PRIMERO</Text>
                </View>
            </View> */}
            <View style={styles.sectionInfoEstudiante}>
                <View style={styles.infoContainer}>
                    <View style={styles.infoBox}  ><Text style={styles.titleInfo}>Estudiante</Text></View>
                    <Text>MARTÍNEZ AMADO, JELIBETH ELIANDRY</Text>
                    <View style={styles.infoBox}  ><Text style={styles.titleInfo}>Código estudiante</Text></View>
                    <Text>448451321</Text>
                    <View style={styles.infoBox}   ><Text style={styles.titleInfo}>Fecha</Text></View>
                    <Text>02/06/25 </Text>
                </View>
                <View style={[styles.infoContainer, styles.borderTop]}>
                    <View style={styles.infoBox}  ><Text style={styles.titleInfo}>Jornada</Text></View>
                    <Text>MAÑANA</Text>
                    <View style={styles.infoBox}  ><Text style={styles.titleInfo}>Grado</Text></View>
                    <Text>01</Text>
                    <View style={styles.infoBox}  ><Text style={styles.titleInfo}>Periodo</Text></View>
                    <Text>PRIMERO </Text>
                    <View style={styles.infoBox}  ><Text style={styles.titleInfo}>Año escolar</Text></View>
                    <Text>2025 </Text>
                </View>
            </View>
            {/* <Text>Estudiante: MARTÍNEZ AMADO, JELIBETH ELIANDRY</Text>
            <Text>Grado: SEGUNDO - 1 | Período: PRIMERO | Año Escolar: 2025</Text> */}

            {data.map((area, i) => (
                <View key={i}>
                    <Text style={styles.sectionTitle}>{area.area}</Text>
                    {area.subjects.map((subj, j) => (
                        <View key={j}>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableColHeader}>Asignatura</Text>
                                    <Text style={styles.tableColHeader}>Nota</Text>
                                    <Text style={styles.tableColHeader}>Desempeño</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCol}>{subj.name}</Text>
                                    <Text style={styles.tableCol}>{subj.nota}</Text>
                                    <Text style={styles.tableCol}>{subj.desempeno}</Text>
                                </View>
                            </View>
                            <Text style={styles.description}>{subj.observacion}</Text>
                        </View>
                    ))}
                </View>
            ))}

            <Text style={{ marginTop: 10 }}>
                COMPORTAMIENTO: Superior 100
            </Text>
            <Text style={{ marginTop: 5 }}>
                Promedio Grupo: 8.30 | Promedio Estudiante: 8.80 | Puesto Estudiante: 3
            </Text>

            <Text style={styles.footer}>Generado por EduSmart</Text>
        </Page>
    </Document>
);

export default BoletinPDF;