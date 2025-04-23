import Activity from "./Activity.js";
function Activities({
  activities,
  children,
  padding = "py-24",
  bgColor = "secondary",
  color = "primary",
  displayMode,
  width = "w-[calc(86%)]",
  childWidth,
  headerWidth,
  headerFontSize = "44",
  innerHeaderFontSize,
  fontWeight,
  descSize,
  imgWidth,
  imgHeight,
  contianerWidth,
  contianerPadding,
  contianerBgColor,
  hover,
  innerHeaderFontWeight,
  fontType,
}) {
  return (
    <div
      className={`bg-[var(--${bgColor})] text-center ${padding} flex justify-center text-[var(--${color})] items-center`}
    >
      <div className={`${width}`}>
        <h2 className={`font-bold text-[${headerFontSize}px] mb-12`}>
          {children}
        </h2>
        <div className="flex justify-between ">
          {activities.map((activity, index) => (
            <Activity
              key={index}
              content={activity}
              color=""
              displayMode={displayMode}
              childWidth={childWidth}
              headerWidth={headerWidth}
              innerHeaderFontSize={innerHeaderFontSize}
              fontWeight={fontWeight}
              descSize={descSize}
              imgWidth={imgWidth}
              imgHeight={imgHeight}
              contianerWidth={contianerWidth}
              contianerPadding={contianerPadding}
              contianerBgColor={contianerBgColor}
              hover={hover}
              innerHeaderFontWeight={innerHeaderFontWeight}
              fontType={fontType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Activities;
