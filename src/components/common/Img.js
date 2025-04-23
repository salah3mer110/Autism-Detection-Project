function Img({ imgs, imgHeight = "" }) {
  return <img src={imgs.imgUrl} alt={imgs.title} className={`${imgHeight}`} />;
}

export default Img;
