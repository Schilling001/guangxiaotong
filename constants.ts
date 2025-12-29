import { Project, Service, Advantage, Client, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "朴朴超市年度促销",
    description: "全渠道促销物料设计制作，门店海报、线上素材，品牌形象统一与销售转化提升。",
    budget: "5-8万",
    duration: "2周",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "retail"
  },
  {
    id: 2,
    title: "龙翔通讯升级",
    description: "品牌形象升级与门店标识系统更新，发光字、导视系统、形象墙，提升品牌专业度。",
    budget: "12-15万",
    duration: "3周",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "retail"
  },
  {
    id: 3,
    title: "茶百道新店开业",
    description: "新店开业整体宣传方案，户外广告、活动物料、促销礼品，实现开业期间客流爆满。",
    budget: "8-10万",
    duration: "10天",
    imageUrl: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "retail"
  },
  {
    id: 4,
    title: "火锅连锁店标识",
    description: "全国连锁火锅品牌门店标识统一升级，发光字、形象墙、菜单设计，提升识别度。",
    budget: "20万+",
    duration: "1个月",
    imageUrl: "https://images.unsplash.com/photo-1559311646-5ef2743d7d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "food"
  },
  {
    id: 5,
    title: "科技峰会展台",
    description: "大型科技峰会特装展台设计与搭建，运用声光电技术展示企业核心科技成果。",
    budget: "15-20万",
    duration: "1周",
    imageUrl: "https://images.unsplash.com/photo-1505373877741-60a960cda287?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tech"
  },
  {
    id: 6,
    title: "高端地产围挡",
    description: "城市核心区域高端楼盘围挡广告设计制作，采用防风阻燃材质，画面精度高。",
    budget: "30-50万",
    duration: "1个月",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "estate"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "印刷成本指南",
    description: "提供不同纸张选择与价格差异分析，帮助您在预算内获得最佳效果。",
    costTip: "合理选择纸张克数，节省15-25%成本。",
    icon: "solar:printer-bold-duotone"
  },
  {
    id: 2,
    title: "标识投资分析",
    description: "发光字性价比对比，材质与寿命分析，帮您做最明智的投资。",
    costTip: "优质材质寿命延长50%，长期更经济。",
    icon: "solar:lightbulb-bolt-bold-duotone"
  },
  {
    id: 3,
    title: "物料价值解析",
    description: "分析重复使用与单次使用的成本效益，帮您最大化物料价值。",
    costTip: "模块化设计重复使用，成本降低30%。",
    icon: "solar:ruler-pen-bold-duotone"
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 1,
    title: "全链路优化",
    description: "打通采购到生产安装，规模化采购和流程优化。",
    percentage: "省 30%",
    icon: "solar:graph-down-bold-duotone"
  },
  {
    id: 2,
    title: "风险控制",
    description: "十年经验预见并规避问题，减少返工和延期。",
    percentage: "减 80%",
    icon: "solar:shield-check-bold-duotone"
  },
  {
    id: 3,
    title: "灵活调配",
    description: "自有工厂+合作生态，根据需求灵活配置资源。",
    percentage: "升 40%",
    icon: "solar:refresh-circle-bold-duotone"
  },
  {
    id: 4,
    title: "透明价格",
    description: "清晰明细，清楚知道钱花在哪里，预算控制精准。",
    percentage: "0 隐藏",
    icon: "solar:bill-check-bold-duotone"
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: "朴朴超市", icon: "solar:cart-large-bold-duotone" },
  { id: 2, name: "龙翔通讯", icon: "solar:smartphone-bold-duotone" },
  { id: 3, name: "茶百道", icon: "solar:cup-hot-bold-duotone" },
  { id: 4, name: "通威集团", icon: "solar:bolt-bold-duotone" },
  { id: 5, name: "四川电视台", icon: "solar:tv-bold-duotone" },
  { id: 6, name: "安宁股份", icon: "solar:graph-up-bold-duotone" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content: "报价透明，无隐藏费用，预算控制极佳。超出预期的效果。",
    author: "张经理",
    role: "朴朴超市市场部"
  },
  {
    id: 2,
    content: "紧急项目10天完成，按时交付且高质量。响应速度令人印象深刻。",
    author: "李总监",
    role: "茶百道品牌部"
  }
];