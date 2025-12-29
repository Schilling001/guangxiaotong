import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Contact: React.FC = () => {
  const [budget, setBudget] = useState('5-10万');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的咨询！');
  };

  const budgets = ["5万以下", "5-10万", "10-20万", "20-50万", "50万以上", "不确定"];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                目前可承接新项目
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              准备好开始<br/>
              <span className="text-gray-500">您的下一个项目？</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md font-light">
                无论是品牌升级还是大型活动物料，我们随时准备为您提供专业支持。
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/50 transition-all shadow-lg">
                  <Icon icon="solar:map-point-bold-duotone" width="28" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">总部地址</p>
                  <p className="text-white font-medium text-lg">成都市高新区天府大道中段888号</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/50 transition-all shadow-lg">
                  <Icon icon="solar:phone-calling-bold-duotone" width="28" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">24小时热线</p>
                  <p className="text-white font-medium text-lg font-mono">028-8765-4321</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#07c160]/5 border border-[#07c160]/20 flex items-center gap-6 backdrop-blur-sm hover:bg-[#07c160]/10 transition-colors cursor-pointer">
                <div className="bg-white p-2 rounded-xl">
                    <Icon icon="solar:qr-code-bold" width="56" className="text-black" />
                </div>
                <div>
                    <h4 className="font-bold text-white mb-1 text-lg">微信快速咨询</h4>
                    <p className="text-sm text-[#07c160] flex items-center gap-1">
                        <Icon icon="solar:check-circle-bold" />
                        平均 3 分钟内响应
                    </p>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-10 rounded-[2rem] relative border-t border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-500 text-xs font-bold uppercase mb-2 pl-1">姓名</label>
                    <input type="text" className="w-full bg-black/20 border border-white/5 rounded-xl px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="您的称呼" />
                </div>
                <div>
                    <label className="block text-gray-500 text-xs font-bold uppercase mb-2 pl-1">电话</label>
                    <input type="tel" className="w-full bg-black/20 border border-white/5 rounded-xl px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="联系方式" />
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-bold uppercase mb-2 pl-1">公司名称</label>
                <input type="text" className="w-full bg-black/20 border border-white/5 rounded-xl px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="请输入公司全称" />
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-bold uppercase mb-3 pl-1">预算范围</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`px-3 py-3 text-xs rounded-xl border transition-all font-medium ${
                        budget === b 
                          ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20' 
                          : 'border-white/5 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-bold uppercase mb-2 pl-1">需求描述</label>
                <textarea rows={4} className="w-full bg-black/20 border border-white/5 rounded-xl px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="请简要描述您的项目需求..."></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>提交申请</span>
                <Icon icon="solar:arrow-right-up-bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-xs text-gray-600 mt-4">
                点击提交即表示您同意我们的隐私政策
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;