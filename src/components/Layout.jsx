import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }) {

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      
      <Header></Header>
     
     
      <main className="flex-1">{children}</main>

      
      <Footer />
    
    </div>
  );
}
