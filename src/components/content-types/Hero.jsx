export default function Hero({ blok }) {
    return (
      <section style={styles.container}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>{blok.title}</h1>
          <p>{blok.text}</p>

          {blok.buttonLink && blok.button && (
          <a href={blok.button.url} style={styles.button}>
            {blok.buttonLink}
          </a>
        )}  

        </div>
        <div style={styles.imageContainer}>
          <img src={blok.image.filename} alt={blok.image.alt} width={300} height={300} />
        </div>
      </section>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '20px',
    },
    textContainer: {
      flex: 1, 
      marginRight: '20px',
      maxWidth: '400px'
    },
    title: {
      fontSize: '2rem',
      marginBottom: '10px',
    },
    imageContainer: {
      flex: 0.5,
    },
  };
