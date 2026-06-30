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
      p-6
      cursor-pointer
      hover:scale-105
      hover:shadow-xl
      transition
      "
    >

      <div className="text-5xl">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mt-5">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}

export default DashboardCard;