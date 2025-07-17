export default function UserProfile({ params }: any) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          User Profile
        </h1>
        <p className="text-lg text-gray-700 mb-6">Viewing profile for:</p>
        <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xl font-semibold">
          {params.id}
        </span>
      </div>
    </div>
  );
}
