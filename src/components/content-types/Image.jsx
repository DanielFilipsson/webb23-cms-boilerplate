export default function Image({ blok }) {
    return (
      <img src={blok.image.filename} alt={blok.image.alt} />
    );
  }