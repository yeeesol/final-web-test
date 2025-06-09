import React, { useState } from 'react';

const LoginModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 relative">
        {/* 닫기 버튼 */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        {/* 제목 */}
        <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>

        {/* 이메일 입력 */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="이메일 주소"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="mb-6 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2.5 right-3 text-sm text-gray-500 cursor-pointer"
          >
            {showPassword ? '숨기기' : '보기'}
          </span>
        </div>

        {/* 로그인 버튼 */}
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded mb-6 hover:bg-blue-700">
          로그인
        </button>

        {/* SNS 로그인 */}
        <div className="text-center text-sm text-gray-500 mb-4">또는 SNS로 로그인</div>
        <div className="grid grid-cols-1 gap-3">
          {/* Google */}
          <button className="flex items-center justify-center border rounded py-2 hover:bg-gray-50">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
              className="w-5 h-5 mr-2 object-contain"
            />
            Google 계정으로 로그인
          </button>

          {/* Naver */}
          <button className="flex items-center justify-center bg-green-500 text-white font-semibold rounded py-2 hover:bg-green-600">
            <img
              src="https://static.nid.naver.com/oauth/small_g_in.PNG"
              alt="naver"
              className="w-5 h-5 mr-2 object-contain bg-white rounded-sm"
            />
            Naver 계정으로 로그인
          </button>

          {/* Apple */}
          <button className="flex items-center justify-center border rounded py-2 hover:bg-gray-50">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
              alt="apple"
              className="w-5 h-5 mr-2 object-contain"
            />
            Apple 계정으로 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
