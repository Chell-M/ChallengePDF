import {
  Document,
  Page,
  View,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

import { Drill, Water } from "../Images";

const styles = StyleSheet.create({
  page: { padding: 20 },
  table: { width: "100%", border: "1pt solid #000" },
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
  borderRight: { borderRight: "1pt solid #000", height: "100%" },
  borderBottom: { borderBottom: "1pt solid #000", height: "100%" },
  cellCenter: { justifyContent: "center" },
  cellTop: { alignItems: "center" },
  cellRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: 2 },
  xl: { fontSize: 16, fontWeight: "bold", marginRight: 15 },
  lg: { fontSize: 12, fontWeight: "bold", marginTop: 4 },
  md: { fontSize: 10, fontWeight: "bold", marginTop: 8 },
  sm: { fontSize: 8 },

});

const DataRow = ({ label, value, showBorder = true }) => (
  <View style={[showBorder && styles.borderBottom, styles.cellRow, { height: 20 }]}>
    <Text style={[styles.sm, { width: "40%" }]}>{label}</Text>
    <Text style={[styles.sm, { width: "60%" }]}>{value}</Text>
  </View>
);

const PdfDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <View style={[styles.row, styles.borderBottom, { height: 55 }]}>
          <View style={[styles.borderRight, styles.cellRow, { width: "20%" }]}>
            <Drill />
            <Text style={[styles.xl]}>
              <Text style={{ color: "#000" }}>BORE</Text>
              <Text style={{ color: "#606060"}}>DM</Text>
            </Text>
          </View>
          <View style={[styles.borderRight, styles.cellTop, { width: "60%", alignItems: "center" }]}>
            <Text style={styles.lg}>Riverside Condominiums</Text>
            <Text style={styles.md}>General Location - Project</Text>
          </View>
          <View style={[styles.cellCenter, { width: "20%", alignItems: "center", justifyContent: "space-between" }]}>
            <Text style={[styles.lg, { fontWeight: "heavy" }]}>B-17</Text>
            <Text style={[styles.sm, { marginBottom: 4 }]}>Page 1 of 1</Text>
          </View>
        </View>

        <View style={[styles.row, styles.borderBottom, { height: 70 }]}>
            <View style={[styles.col, styles.borderRight, { width: "35%" }]}>
                <DataRow label="Drilling Firm:" value="BoreDM Drilling" />
                <DataRow label="Driller:" value="PA" />
                <DataRow label="Logged By:" value="LA" />
                <View style={[styles.cellRow, { height: 20 }]}>
                    <View style={{ flexDirection: "row", alignItems: "center", width: "40%" }}>
                        <Water />
                        <Text style={[styles.sm, { marginLeft: 6 }]}>Water:</Text>
                    </View>
                    <Text style={[styles.sm, { width: "60%" }]}>N/A</Text>
                </View>
            </View>

          <View style={[styles.col, styles.borderRight, { width: "30%" }]}>
            <DataRow label="Project No.:" value="25-3332" />
            <DataRow label="Date Drilled:" value="03/05/2025" />
            <DataRow label="Boring Depth:" value="-" />
            <DataRow label="Boring Elevation:" value="N/A" showBorder={false} />
          </View>

          <View style={[styles.col, { width: "35%" }]}>
            <View style={[{ height: "100%" }]}>
              <Text style={[styles.sm, { marginLeft: 2 }]}>Remarks:</Text>
              <Text style={[styles.sm, { marginLeft: 2 }]}>-</Text>
            </View>
          </View>
        </View>

        <View style={[styles.row, { height: 15 }]}>
          <View style={[styles.borderRight, { width: "35%" }]}>
            <DataRow label="Hammer Type:" value="-" showBorder={false} />
          </View>
          <View style={[styles.cellRow, { width: "65%" }]}>
            <Text style={[styles.sm, { width: "18%" }]}>Brand Address:</Text>
            <Text style={[styles.sm, { width: "82%" }]}>4909 N. 44th St, Phoenix, AZ 85018</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfDoc;