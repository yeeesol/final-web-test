import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SignupModal({ onClose, onLoginClick }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white p-8 rounded-xl shadow-lg w-96 relative"
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>

        <input
          type="email"
          placeholder="이메일 주소"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <div className="relative mb-6">
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

        <button
          className="w-full bg-green-600 text-white font-semibold py-2 rounded mb-6 hover:bg-green-700"
          onClick={() => alert('가입하기 클릭')}
        >
          가입하기
        </button>

        <div className="text-center text-sm text-gray-500 mb-4">또는 SNS로 회원가입</div>
        <div className="grid grid-cols-1 gap-3">
          {/* Google */}
          <button
            onClick={() => alert('구글 회원가입')}
            className="flex items-center justify-center border rounded py-2 hover:bg-gray-50"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5 mr-2 object-contain"
            />
            Google 계정으로 가입
          </button>

          {/* Apple */}
          <button
            onClick={() => alert('애플 회원가입')}
            className="flex items-center justify-center border rounded py-2 hover:bg-gray-50"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
              alt="Apple"
              className="w-5 h-5 mr-2 object-contain"
            />
            Apple 계정으로 가입
          </button>
        </div>

        <div className="mt-6 text-center">
          <span>이미 계정이 있으신가요? </span>
          <button
            onClick={onLoginClick}
            className="text-indigo-500 hover:underline"
          >
            로그인
          </button>
        </div>
      </motion.div>
    </div>
  );
}
