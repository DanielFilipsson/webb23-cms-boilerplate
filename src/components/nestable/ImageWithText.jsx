


// export default function ImageWithText({ blok }) {
//     console.log(blok.image_with_text);
//   return (
//     <div className="grid grid-cols-3 gap-4">
//         {blok.columns.map((item)=> (
//             <div key={item._uid}>
//                 {item.image?.filename && (
//                     <div>
//                         <img
//                             src={item.image.filename}
//                             alt={item.image.alt || "image"}
//                         />
//                     </div>
//                 )}
//                 <div>
//                     {item.title && (
//                         <h2>{item.title}</h2>
//                     )}
//                     {item.text && (
//                         <p>{item.text}</p>
//                     )}
//                 </div>
//             </div>
//         ))}
//     </div>
//   );
// }


// {blok.columns.map((nestedBlok) => (
//     <div>
//     <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
//     </div>
//   ))}