"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <aside className="container mx-auto py-8 justify-center items-center text-center space-y-3">
        <h1 className="text-3xl font-bold">แบบทดสอบว่าคุณเป็นเมะหรือเคะ</h1>
        <p className="text-lg">ตอบคำถามต่อไปนี้เพื่อหาว่าคุณเป็นเมะหรือเคะ</p>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-200 transition duration-300" href="/quiz">
          เริ่มทดสอบ
        </Link>
      </aside>
    </main>
  );
}
