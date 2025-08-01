export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">Download Apps Here</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Xender App Card */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold mb-4">Xender</span>
          <a
            href="/Xender.apk"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors text-lg font-medium w-full text-center"
          >
            Download XENDER APK
          </a>
        </div>
        {/* GeezIME App Card */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold mb-4">GeezIME</span>
          <a
            href="/geezIme.apk"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors text-lg font-medium w-full text-center"
          >
            Download GeezIME APK
          </a>
        </div>
        {/* Add more app cards here as needed */}
      </div>
      <p className="mt-8 text-gray-600 text-center max-w-md">
        Click the button above to download the Android app. After downloading, open the APK file on your device to install.
      </p>
    </div>
  );
}
