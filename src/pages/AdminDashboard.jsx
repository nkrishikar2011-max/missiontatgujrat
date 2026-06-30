function DashboardCard({
  title,
  subtitle,
  icon,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-4
      md:p-6
      cursor-pointer
      hover:scale-105
      hover:shadow-xl
      transition-all
      duration-300
      min-h-[170px]
      flex
      flex-col
      justify-center
      "
    >

      <div className="text-4xl md:text-5xl">
        {icon}
      </div>

      <h2 className="text-lg md:text-2xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-gray-500 text-sm md:text-base mt-2">
        {subtitle}
      </p>

    </div>
  );
}

export default DashboardCard;