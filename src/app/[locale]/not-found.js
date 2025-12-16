import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20">
      <h1 className="text-8xl font-bold text-[#4C67D9] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">
        Page Not Found / الصفحة غير موجودة
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
        <br />
        الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>
      <Link
        href="/"
        className="bg-[#4C67D9] text-white px-8 py-3 rounded-md hover:bg-[#30398B] transition-colors font-bold inline-block"
      >
        Go Home / الصفحة الرئيسية
      </Link>
    </div>
  );
}
