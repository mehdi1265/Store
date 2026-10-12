
import { useState } from "react";

export default function Login() {
  const [register, setRegister] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 rounded-xl bg-white p-6 shadow">

        
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center border">
           <img src="/balut.jpg" className="w-[80px] h-[80px] rounded-3xl" />
          </div>
        </div>

        <div className="mb-5 flex gap-2">
          <button
            onClick={() => setRegister(false)}
            className="w-1/2 rounded bg-gray-200 p-2"
          >
            ورود
          </button>

          <button
            onClick={() => setRegister(true)}
            className="w-1/2 rounded bg-gray-200 p-2"
          >
            ثبت نام
          </button>
        </div>

        {register && (
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="mb-3 w-full rounded border p-2"
          />
        )}

        <input
          type="email"
          placeholder="ایمیل"
          className="mb-3 w-full rounded border p-2"
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="mb-5 w-full rounded border p-2"
        />

        <button
          onClick={() => alert("این بخش هنوز فعال نیست")}
          className="w-full rounded bg-red-600 p-3 text-white"
        >
          {register ? "ثبت نام در بلوط" : "ورود به بلوط"}
        </button>

      </div>
    </div>
  );
}
