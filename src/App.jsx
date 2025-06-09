import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import LoginModal from './components/LoginModal';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [url, setUrl] = useState('');

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* ☰ 버튼: 사이드바 닫힘 상태에서만 보임 */}
      {!sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 text-2xl bg-white rounded shadow-md"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {/* 사이드바 */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLoginClick={() => setLoginOpen(true)}
      />

      {/* 로그인 모달 */}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}

      {/* 메인 콘텐츠 */}
      <div className="pt-24 px-4">
        <h1 className="text-2xl font-bold text-center mb-8">쉽고 빠르게, 요약 시작하기</h1>

        {/* 링크 입력 영역 */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="https://www.example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-3 w-full max-w-md rounded-l shadow"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r"
            onClick={() => alert(`요약 요청: ${url}`)} // 임시 처리
          >
            요약하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
