import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import logoImg from '@/assets/img/img.png'
import { data } from './config'
import { styles } from './config'


const BoletinPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
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
                </View>
                <Text style={[styles.title, styles.textCenter]}>INFORME VALORATIVO INTEGRAL</Text>
                <View style={styles.containerInfo}>
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
                <View style={styles.containerInfoNotas}>
                    <View style={styles.sectionInfoNotas}>
                        <View style={styles.col1}><Text>IH</Text></View>
                        <View style={styles.col2}><Text>AREA</Text></View>
                        <View style={styles.col3}><Text>VALORACIÓN ACADEMICA DESCRIPTIVA</Text></View>
                        <View style={styles.col4}><Text>DESEMPÉÑO</Text></View>
                    </View>
                </View>
                <View style={styles.containerNotas}>
                    {
                        data.map((area, i) => (
                            <View key={i}>{
                                area.subjects.map((subj, j) => (
                                    <View key={j}>
                                        <View style={styles.table}>
                                            <View style={styles.tableRow}>
                                                <Text style={styles.row1}>{j}</Text>
                                                <Text style={styles.row2}>{subj.name}</Text>
                                                <Text style={styles.row3}>{subj.observacion}</Text>
                                                <View style={[styles.row4, { display: 'flex', flexDirection: 'column', textAlign: 'right' }]}>
                                                    <Text style={{ fontFamily: 'GeistBold' }}>Nota: {subj.nota}</Text>
                                                    <Text >{subj.desempeno}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                            </View>
                        ))
                    }
                </View>
                <View style={styles.containerFooter}>
                    <Text style={{ marginTop: 10 }}>
                        COMPORTAMIENTO: Superior 100
                    </Text>
                    <Text style={{ marginTop: 5 }}>
                        Promedio Grupo: 8.30 | Promedio Estudiante: 8.80 | Puesto Estudiante: 3
                    </Text>
                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                        <View>
                            <Text>_____________________</Text>
                            <Text>Firma Director de grupo</Text>
                        </View>
                        <View>
                            <Text>_____________________</Text>
                            <Text>Firma Coordinador</Text>
                        </View>
                    </View>

                </View>

            </View>
            <Text style={styles.footer}> Generado por EduSmart</Text>
        </Page >
    </Document >
);

export default BoletinPDF;