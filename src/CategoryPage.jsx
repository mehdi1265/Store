import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams();

  return (
    <div>
    <div className="p-10 text-right" dir="rtl">
      <Link to="/" className="text-blue-500 hover:underline">
        ← بازگشت به خانه
      </Link>

      <h1 className="text-3xl font-bold mt-5">صفحه دسته‌بندی</h1>
      <p className="text-gray-600 mt-2">شناسه: {id}</p>
    </div>
    <div className="flex justify-normal items-center">
      
    </div>
    </div>
  );
}