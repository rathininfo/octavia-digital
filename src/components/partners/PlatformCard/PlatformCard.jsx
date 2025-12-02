export default function PlatformCard({ icon, name, category }) {
  return (
    <div
      className="
        bg-[#14171F]
        p-6
        rounded-xl
        border border-[#1F232C]
        hover:border-orange-500
        transition
        cursor-pointer
        flex flex-col
        items-center
        text-center
      "
    >
      <div
        className="
          w-12 h-12
          flex items-center justify-center
          rounded-lg
          bg-[#1F232C]
          text-orange-500
          text-[20px]
          mb-4
        "
      >
        {icon}
      </div>

      <h3 className="text-white font-semibold text-[17px]">{name}</h3>
      <p className="text-gray-500 text-[14px] mt-1">{category}</p>
    </div>
  );
}
