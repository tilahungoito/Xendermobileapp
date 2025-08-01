// components/AppCard.tsx
type AppCardProps = {
  name: string;
  fileName: string;
  description?: string;
  icon?: string;
  color?: string;
  category?: string;
};

export default function AppCard({ name, fileName, description, icon, color, category }: AppCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center group hover:scale-105">
      {/* App Icon */}
      <div className={`w-12 h-12 rounded-xl ${color || 'bg-blue-500'} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <span className="text-2xl">{icon || '📱'}</span>
      </div>
      
      {/* App Name */}
      <h3 className="font-bold text-gray-800 text-sm mb-1 truncate w-full">{name}</h3>
      
      {/* Category Badge */}
      {category && (
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full mb-2">
          {category}
        </span>
      )}
      
      {/* App Description */}
      {description && (
        <p className="text-gray-500 text-xs mb-3 line-clamp-2">{description}</p>
      )}
      
      {/* Download Button */}
      <a
        href={`/${fileName}`}
        download
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-xs font-medium w-full group-hover:from-blue-600 group-hover:to-purple-700"
      >
        Download
      </a>
    </div>
  );
}
  