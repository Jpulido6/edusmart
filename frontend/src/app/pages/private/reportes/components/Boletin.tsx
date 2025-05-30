import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import source from '@/assets/fonts/geist-sans-latin-400-normal.ttf'
import sourceBold from '@/assets/fonts/geist-sans-latin-600-normal.ttf'

Font.register({
    family: 'GeistBold',
    src: sourceBold
})
Font.register({
    family: 'Geist',
    src: source
})

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        fontFamily: 'Geist'
    },
    header: {
        textAlign: 'center',
        marginBottom: 10,
    },
    table: {
        // display: "table",
        width: "auto",
        marginVertical: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableColHeader: {
        width: "10%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#f0f0f0',
        padding: 2,
        fontWeight: 'bold'
    },
    tableCol: {
        width: "10%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        padding: 2
    },
    title: {
        fontSize: 14,
        fontFamily: 'GeistBold',
        marginBottom: 4
    },
    subjectTitle: {
        marginTop: 8,
        fontWeight: 'bold'
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 8,
        color: 'grey',
    },
});
export interface Subject {
    name: string;
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;
    prom?: string;
    desc?: string;
}

export interface Area {
    area: string;
    subjects: Subject[];
}
export interface BoletinPDFProps {
    student: string;
    period: string;
    director: string;
    grade: string;
    subjects: Area[];
}


function BoletinPdf({ student, period, director, grade, subjects }: BoletinPDFProps) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>INSTITUCION EDUCATIVA TECNICO AGROPECUARIO</Text>
                    <Text>Aprobación Oficial No. 1234 Mayo 11 de 0000</Text>
                    <Text>NIT. 222.222.111-0</Text>
                    <Text>INFORME DE PROCESOS EDUCATIVOS 2023</Text>
                    <Text>SECCIÓN PRIMARIA</Text>
                    <Text>Estudiante: {student}</Text>
                    <Text>Periodo: {period}</Text>
                    <Text>Director de grupo: {director}</Text>
                    <Text>Grado: {grade}</Text>
                </View>

                {subjects.map((area, index) => (
                    <View key={index}>
                        <Text style={styles.subjectTitle}>{area.area}</Text>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableColHeader}>Asignatura</Text>
                                <Text style={styles.tableColHeader}>1P</Text>
                                <Text style={styles.tableColHeader}>2P</Text>
                                <Text style={styles.tableColHeader}>3P</Text>
                                <Text style={styles.tableColHeader}>4P</Text>
                                <Text style={styles.tableColHeader}>5P</Text>
                                <Text style={styles.tableColHeader}>Prom</Text>
                                <Text style={styles.tableColHeader}>Desempeño</Text>
                            </View>
                            {area.subjects.map((subj, idx) => (
                                <View style={styles.tableRow} key={idx}>
                                    <Text style={styles.tableCol}>{subj.name}</Text>
                                    <Text style={styles.tableCol}>{subj.p1}</Text>
                                    <Text style={styles.tableCol}>{subj.p2}</Text>
                                    <Text style={styles.tableCol}>{subj.p3}</Text>
                                    <Text style={styles.tableCol}>{subj.p4}</Text>
                                    <Text style={styles.tableCol}>{subj.p5}</Text>
                                    <Text style={styles.tableCol}>{subj.prom}</Text>
                                    <Text style={styles.tableCol}>{subj.desc}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
                <Text style={styles.footer}>Generado por EduSmart</Text>
            </Page>
        </Document>
    )
}

export default BoletinPdf;

