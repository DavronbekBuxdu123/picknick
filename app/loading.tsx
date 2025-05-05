export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white spinner">
      <div className="animate-spin h-14 w-14 rounded-full border-4 border-green-600 border-t-transparent"></div>
      <p className="mt-3 text-gray-600 text-sm">Iltimos, yuklanmoqda...</p>
    </div>
  );
}
