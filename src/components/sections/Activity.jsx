function Activity({
  content,
  displayMode = "number",
  color = "primary",
  childWidth = "",
  font = "font-bold",
  headerWidth = "",
  innerHeaderFontSize = "",
  fontWeight = "font-normal",
  descSize = "text-[20px]",
  imgWidth = "263",
  imgHeight = "204",
  contianerPadding = "",
  contianerBgColor = "",
  hover = "",
  innerHeaderFontWeight = "",
  fontType = "",
}) {
  return (
    <div
      className={`${childWidth}  ${contianerPadding}  flex flex-col ${font} text-[var(--${color})] items-center bg-[${contianerBgColor}] ${hover}`}
    >
      {displayMode === "number" ? (
        <span className="text-[154px] font-montserrat">{content.number}</span>
      ) : (
        <img
          src={content.imageUrl}
          alt={content.header}
          className={`w-[${imgWidth}px] h-[${imgHeight}px] object-contain`}
        />
      )}
      <h3
        className={` text-[${innerHeaderFontSize}px] ${fontType} mt-4 font-${innerHeaderFontWeight} ${headerWidth}`}
      >
        {content.header}
      </h3>
      <p className={` ${fontWeight} ${descSize} mt-2 `}>{content.desc}</p>
    </div>
  );
}

export default Activity;
