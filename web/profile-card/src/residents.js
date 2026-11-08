/* 安响社区 · 住户关怀档案（原型演示数据）
 * 与主页 app.js 中的 alerts 一一对应，按事件 id 由 iframe query (?id=AX-00x) 选择。
 * 所有图片均指向本子应用 public/assets 下的本地资源，构建后位于 dist/assets，无外链。
 *
 * 注意：官方 ProfileCard 会把 iconUrl 写入 CSS 自定义属性 --pc-pattern，
 * 浏览器会以「构建后 CSS 文件所在目录」为基准解析该相对 URL，
 * 因此这里统一用 document.baseURI 生成绝对 URL，避免纹理 404。
 *
 * profile 字段用于 iframe 内「老人简介页」右栏，全部为原型演示数据，非真实住户资料。
 */
const asset = (file) => new URL(`./assets/${file}`, document.baseURI).href;

export const RESIDENTS = {
  'AX-001': {
    id: 'AX-001',
    name: '周慧兰',
    title: '78 岁 · B区3号楼 2单元 3102室',
    handle: '澄湾社区',
    status: '独居 · 重点关怀',
    statusColor: '#d98a5b',
    contactName: '周敏（女儿）',
    contactPhone: '138 **** 6721',
    careNote: '燃气安全提醒 · 建议优先电话核实',
    avatarUrl: asset('elder-1.png'),
    miniAvatarUrl: asset('elder-1-mini.png'),
    iconUrl: asset('care-pattern.png'),
    backdropColor: '#e8d6c0',
    profile: {
      age: '78 岁',
      living: '独居',
      community: '澄湾社区',
      address: 'B区3号楼 2单元 3102室',
      careLevel: '重点关怀',
      since: '2018 年入住 · 建档 6 年',
      healthTags: ['高血压', '轻度听力下降'],
      medication: '每日晨间降压药 · 家属分装药盒',
      mobility: '可自主行走 · 夜间外出需陪同',
      diet: '低盐低脂 · 定时三餐',
      carePlan: '每周 2 次上门巡访 · 燃气设备月检',
      primary: { name: '周敏', relation: '女儿', phone: '138 **** 6721' },
      backup: { name: '社区网格员', phone: '0571-**** 2201' }
    }
  },
  'AX-002': {
    id: 'AX-002',
    name: '李国栋',
    title: '82 岁 · A区1号楼 1单元 2201室',
    handle: '澄湾社区',
    status: '独居 · 慢病随访',
    statusColor: '#d98a5b',
    contactName: '李建（儿子）',
    contactPhone: '139 **** 3108',
    careNote: '烟感持续上报 · 需确认现场情况',
    avatarUrl: asset('elder-2.png'),
    miniAvatarUrl: asset('elder-2-mini.png'),
    iconUrl: asset('care-pattern.png'),
    backdropColor: '#dfe0cf',
    profile: {
      age: '82 岁',
      living: '独居',
      community: '澄湾社区',
      address: 'A区1号楼 1单元 2201室',
      careLevel: '慢病随访',
      since: '2016 年入住 · 建档 8 年',
      healthTags: ['2 型糖尿病', '慢性支气管炎'],
      medication: '餐前血糖监测 · 口服降糖药',
      mobility: '助行器辅助 · 上下楼需陪同',
      diet: '控糖饮食 · 少食多餐',
      carePlan: '每周 3 次电话随访 · 季度家庭医生上门',
      primary: { name: '李建', relation: '儿子', phone: '139 **** 3108' },
      backup: { name: '社区家庭医生', phone: '0571-**** 3180' }
    }
  },
  'AX-003': {
    id: 'AX-003',
    name: '陈秀英',
    title: '85 岁 · B区5号楼 2单元 1702室',
    handle: '澄湾社区',
    status: '独居 · 每日关怀',
    statusColor: '#c9764f',
    contactName: '陈岚（孙女）',
    contactPhone: '137 **** 9063',
    careNote: '12 小时无活动信号 · 请电话联系并上门',
    avatarUrl: asset('elder-3.png'),
    miniAvatarUrl: asset('elder-3-mini.png'),
    iconUrl: asset('care-pattern.png'),
    backdropColor: '#ecd9ce',
    profile: {
      age: '85 岁',
      living: '独居',
      community: '澄湾社区',
      address: 'B区5号楼 2单元 1702室',
      careLevel: '每日关怀',
      since: '2015 年入住 · 建档 9 年',
      healthTags: ['高血压', '轻度膝关节炎'],
      medication: '每日晨间降压药 · 社区护士每周复核',
      mobility: '可自主行走 · 雨雪天不建议外出',
      diet: '低盐低脂 · 少食多餐',
      carePlan: '每日 1 次电话问候 · 每周 2 次上门巡访',
      primary: { name: '陈岚', relation: '孙女', phone: '137 **** 9063' },
      backup: { name: '社区网格员', phone: '0571-**** 2201' }
    }
  },
  'AX-004': {
    id: 'AX-004',
    name: '王振华',
    title: '74 岁 · A区2号楼 1单元 2801室',
    handle: '澄湾社区',
    status: '夫妻同住 · 常规关注',
    statusColor: '#5f9c7d',
    contactName: '王磊（儿子）',
    contactPhone: '136 **** 4452',
    careNote: '连续用水异常 · 协助排查漏水',
    avatarUrl: asset('elder-4.png'),
    miniAvatarUrl: asset('elder-4-mini.png'),
    iconUrl: asset('care-pattern.png'),
    backdropColor: '#d8e1d4',
    profile: {
      age: '74 岁',
      living: '夫妻同住',
      community: '澄湾社区',
      address: 'A区2号楼 1单元 2801室',
      careLevel: '常规关注',
      since: '2020 年入住 · 建档 4 年',
      healthTags: ['血脂偏高'],
      medication: '暂无长期用药 · 季度体检随访',
      mobility: '行动自如 · 每日社区散步',
      diet: '清淡均衡 · 控制油脂摄入',
      carePlan: '每月 1 次上门走访 · 水电设施季检',
      primary: { name: '王磊', relation: '儿子', phone: '136 **** 4452' },
      backup: { name: '配偶（同住）', phone: '136 **** 4471' }
    }
  },
  'AX-005': {
    id: 'AX-005',
    name: '赵淑芬',
    title: '79 岁 · C区2号楼 1单元 1202室',
    handle: '澄湾社区',
    status: '独居 · 门磁提醒',
    statusColor: '#d98a5b',
    contactName: '赵宁（女儿）',
    contactPhone: '135 **** 7780',
    careNote: '入户门长时间开启 · 请确认住户安全',
    avatarUrl: asset('elder-5.png'),
    miniAvatarUrl: asset('elder-5-mini.png'),
    iconUrl: asset('care-pattern.png'),
    backdropColor: '#e6d9c4',
    profile: {
      age: '79 岁',
      living: '独居',
      community: '澄湾社区',
      address: 'C区2号楼 1单元 1202室',
      careLevel: '重点关怀',
      since: '2017 年入住 · 建档 7 年',
      healthTags: ['冠心病', '轻度记忆力减退'],
      medication: '每日抗血小板药 · 家属每周配药',
      mobility: '可自主行走 · 建议结伴外出',
      diet: '低盐低脂 · 避免饱餐',
      carePlan: '每日早晚各 1 次门磁巡检 · 每周上门',
      primary: { name: '赵宁', relation: '女儿', phone: '135 **** 7780' },
      backup: { name: '社区网格员', phone: '0571-**** 2201' }
    }
  }
};

export const DEFAULT_RESIDENT = RESIDENTS['AX-003'];
