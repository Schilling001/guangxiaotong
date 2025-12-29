import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-border pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white font-bold text-xl mb-6 gap-2">
              <Icon icon="solar:atom-bold-duotone" className="text-primary" width="24"/>
              广小通
            </div>
            <p className="text-gray-500 leading-relaxed">
              专注于广告落地的执行专家。<br/>让每一个创意都完美呈现。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">服务</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-primary transition-colors cursor-default">品牌印刷</li>
              <li className="hover:text-primary transition-colors cursor-default">户外广告</li>
              <li className="hover:text-primary transition-colors cursor-default">标识标牌</li>
              <li className="hover:text-primary transition-colors cursor-default">展览展示</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">链接</h3>
            <ul className="space-y-3 text-gray-500">
              <li><button onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-primary transition-colors text-left focus:outline-none">案例</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="hover:text-primary transition-colors text-left focus:outline-none">服务</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'why-us')} className="hover:text-primary transition-colors text-left focus:outline-none">优势</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-colors text-left focus:outline-none">联系</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">关注</h3>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer">
                    <Icon icon="solar:camera-bold-duotone" width="20" />
                </div>
                <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer">
                    <Icon icon="solar:chat-round-dots-bold-duotone" width="20" />
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>&copy; 2023 广小通广告有限公司</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-gray-400 cursor-pointer">隐私政策</span>
            <span className="hover:text-gray-400 cursor-pointer">服务条款</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;