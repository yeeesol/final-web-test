
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import Sidebar from './components/Sidebar';
import LoginModal from './components/LoginModal';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [url, setUrl] = useState('');

  return (
    // 최상위 컨테이너에 단일 스크롤 사용
    <div className="relative min-h-screen bg-white flex">
      {/* 사이드바 */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLoginClick={() => setLoginOpen(true)}
      />

      {/* ☰ 버튼 */}
      {!sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 text-2xl bg-white rounded shadow-md"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {/* 메인 콘텐츠: overflow-y-auto 제거 */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* 섹션 1: Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pt-24 px-4 text-center min-h-screen"
        >
          <h1 className="text-2xl font-bold mb-8">쉽고 빠르게, 요약 시작하기</h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <input
              type="text"
              placeholder="https://www.example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border p-3 w-full max-w-md rounded-l shadow"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r"
              onClick={() => alert(`요약 요청: ${url}`)}
            >
              요약하기
            </button>
          </motion.div>

          {/* ↓ 화살표 (react-scroll) */}
          <Link to="summary-section" smooth={true} duration={500}>
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </Link>
        </motion.section>

        {/* 섹션 2: 요약 소개 */}
        <Element name="summary-section">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="py-24 px-6 flex flex-col items-center gap-6"
          >
            <h2 className="text-purple-500 font-semibold text-sm">요약</h2>
            <p className="text-lg text-center font-medium">
              한 눈에 파악하기 어려운 영상은<br /> 텍스트 요약으로 빠르게 파악해보세요
            </p>
            <div className="w-[320px] h-[180px] bg-gray-300 rounded-xl shadow-xl" />
          </motion.section>
        </Element>

        {/* 섹션 3: 마인드맵 소개 */}
        <Element name="mindmap-section">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="py-24 px-6 flex flex-col items-center gap-6"
          >
            <h2 className="text-indigo-500 font-semibold text-sm">마인드맵</h2>
            <p className="text-lg text-center font-medium">
              중요 포인트만 연결해 보여주는<br /> 마인드맵 기능
            </p>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-16 h-6 bg-gray-300 rounded" />
              ))}
            </div>
          </motion.section>
        </Element>
      </div>

      {/* 로그인 모달 */}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </div>
  );
}

export default App;
