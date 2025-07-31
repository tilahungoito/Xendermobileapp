export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Download the App</h1>
      <a
        href="/Xender.apk"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors text-lg font-medium"
      >
        Download APK
      </a>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        Click the button above to download the Android app. After downloading, open the APK file on your device to install.
      </p>
    </div>
  );
}
