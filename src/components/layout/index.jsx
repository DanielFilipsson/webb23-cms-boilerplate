import Image from "next/image";
import Link from "next/link";
import Header from "@/components/content-types/Header"

//Uses config set global components for the layout
export default function Layout({ config, children }) {
    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    console.log(config);
    const logotype = config.content.logotype;
    const navigation = config.content.navigation;
    

    return (
        <>
            <header style={styles.header}>
                <div style={styles.logoContainer}>
                    <Header config={config}/>
                    <Image src={logotype.filename} width={50} height={50} alt="Logotype" />
                    
                </div>
                <nav style={styles.nav}>
                    {navigation.map((item) => (
                        <Link key={item._uid} href={item.link.cached_url} style={styles.link}>
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div style={styles.emptySpace} /> 
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}

const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
    },
    logoContainer: {
      flex: 1,  
    },
    nav: {
      flex: 2,  
      display: 'flex',
      justifyContent: 'center',  
      gap: '15px',  
    },
    link: {
      textDecoration: 'none',
      color: '#007BFF',
      fontSize: '16px',
    },
    emptySpace: {
      flex: 1,  
    },
    
  };