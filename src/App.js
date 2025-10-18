import "./index.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDoc from "./components/Document";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <PDFDownloadLink document={<PdfDoc />} fileName="Result.pdf">
          {({ loading }) => (loading ? "Preparing your PDF…" : "Download PDF")}
        </PDFDownloadLink>
      </div>      
    </div>
  );
}
export default App;
