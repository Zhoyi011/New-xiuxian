// 游戏数据
const realms = [
  { name: "真·凡人", cost: 0, rate: 1, exp: 1, lifespan: 0},
  { name: "炼气初期", cost: 20, rate: 1.5, exp: 10, lifespan: 10 },
  { name: "炼气中期", cost: 50, rate: 2, exp: 25, lifespan: 20 },
  { name: "炼气后期", cost: 100, rate: 4, exp: 50, lifespan: 40 },
  { name: "筑基初期", cost: 250, rate: 8, exp: 100, lifespan: 60 },
  { name: "筑基中期", cost: 500, rate: 15, exp: 200, lifespan: 80 },
  { name: "筑基后期", cost: 1000, rate: 25, exp: 400, lifespan: 100 },
  { name: "结丹初期", cost: 2500, rate: 40, exp: 800, lifespan: 150 },
  { name: "结丹中期", cost: 5000, rate: 60, exp: 1600, lifespan: 200 },
  { name: "结丹后期", cost: 10000, rate: 90, exp: 3200, lifespan: 250 },
  { name: "元婴初期", cost: 20000, rate: 130, exp: 6400, lifespan: 400 },
  { name: "元婴中期", cost: 40000, rate: 180, exp: 12800, lifespan: 500 },
  { name: "元婴后期", cost: 80000, rate: 250, exp: 25600, lifespan: 600 },
  { name: "化神初期", cost: 160000, rate: 500, exp: 51200, lifespan: 700 },
  { name: "化神中期", cost: 320000, rate: 750, exp: 73200, lifespan: 800 },
  { name: "化神后期", cost: 640000, rate: 1250, exp: 89200, lifespan: 900 },
  { name: "炼虚期", cost: 1280000, rate: 1750, exp: 102400, lifespan: 1000 },
  { name: "大乘期", cost: 2560000, rate: 2500, exp: 204800, lifespan: 1250 },
  { name: "渡劫期", cost: 5120000, rate: 3500, exp: 409600, lifespan: 2500 },
  { name: "真·仙", cost: 2560000, rate: 5000, exp: 819200, lifespan: 5000 }
];

const spiritRoots = [
  { name: "凡骨", multiplier: 1 },
  { name: "下品灵根", multiplier: 1.5 },
  { name: "中品灵根", multiplier: 2 },
  { name: "上品灵根", multiplier: 2.5 },
  { name: "地灵根", multiplier: 3 },
  { name: "天灵根", multiplier: 5 },
  { name: "仙灵根", multiplier: 8 },
  { name: "混沌灵根", multiplier: 16 }
];

// 功法数据
const techniques = [
  { id: "basic_breathing", name: "基础吐纳法", desc: "增加每秒灵气获取 0.2/s", cost: 10, costType: "qi", effect: { rate: 0.2 }, maxLevel: 100 },
  { id: "meridian", name: "小周天循环", desc: "增加点击灵气获取 +1", cost: 20, costType: "qi", effect: { click: 1 }, maxLevel: 100 },
  { id: "auto_cultivate", name: "灵气感应", desc: "解锁自动修炼功能", cost: 70, costType: "qi", effect: { auto: true }, maxLevel: 2 },
  { id: "spirit_attraction", name: "引灵术", desc: "增加所有灵气获取 10%", cost: 100, costType: "qi", effect: { multiplier: 0.1 }, maxLevel: 20 },
  { id: "advanced_breathing", name: "高级吐纳法", desc: "大幅增加每秒灵气获取 1/s", cost: 200, costType: "qi", effect: { rate: 1 }, maxLevel: 100, require: "basic_breathing" },
  { id: "auto_gain", name: "灵气自生术", desc: "每秒自动获得1点灵气", cost: 300, costType: "qi", effect: { autoGain: 1 }, maxLevel: 10 },
  { id: "advanced_auto_gain", name: "高级灵气自生术", desc: "每秒自动获得5点灵气", cost: 1200, costType: "qi", effect: { autoGain: 5 }, maxLevel: 10, require: "auto_gain" },
];


  // 丹药数据
const pills = [
  { id: "condense_qi", name: "凝气丹", desc: "十分钟内灵气获取速度翻倍", cost: 5, costType: "spiritStones", effect: { rateMultiplier: 2, duration: 600 } },
  { id: "advanced_condense_qi", name: "高阶凝气丹", desc: "十分钟内灵气获取速度翻十倍", cost: 45, costType: "spiritStones", effect: { rateMultiplier: 10, duration: 600 } },
  { id: "foundation", name: "筑基丹", desc: "增加突破成功率 20%", cost: 25, costType: "spiritStones", effect: { breakThrough: 0.2 } },
  { id: "spirit_gathering", name: "聚灵丹", desc: "立即获得200点灵气", cost: 10, costType: "spiritStones", effect: { immediateQi: 200 } },
  { id: "root_awakening", name: "醒灵丹", desc: "有几率提升灵根品质", cost: 30, costType: "spiritStones", effect: { rootUp: 0.3 } },
  { id: "advanced_root_awakening", name: "高级醒灵丹", desc: "一定提升灵根品质", cost: 150, costType: "spiritStones", effect: { rootUp: 1 } },
  { id: "longevity_pill", name: "延寿丹",  desc: "增加10年寿命", cost: 100, costType: "spiritStones", effect: { addLifespan: 10 } },
  { id: "immortality_pill", name: "长生丹", desc: "增加50年寿命", cost: 500, costType: "spiritStones", effect: { addLifespan: 50 } }
];

// 神通数据
const skills = [
  { id: "fireball", name: "火球术", desc: "初级攻击法术，探索时增加收益", cost: 20, costType: "exp", effect: { exploreBonus: 0.2 } },
  { id: "wind_walk", name: "御风诀", desc: "增加探索效率，减少探索冷却时间", cost: 40, costType: "exp", effect: { exploreCdReduction: 0.2 } },
  { id: "spirit_sense", name: "神识外放", desc: "可感知更远处的资源，增加探索收获", cost: 60, costType: "exp", effect: { exploreBonus: 0.5 } },
  { id: "inner_vision", name: "内视", desc: "提高冥想效率，减少冥想冷却时间", cost: 30, costType: "exp", effect: { meditateCdReduction: 0.2, meditateBonus: 0.3 } },
  { id: "change_to_qi", name: "换气术", desc: "用修为转换成修炼速度，不香吗？", cost: 5000, costType: "exp", effect: {rate: 50},maxLevel: 100},
  { id: "spirit_attraction", name: "聚灵术", desc: "每秒自动获得1个灵石", cost: 1000, costType: "exp", effect: { spiritStonesPerSecond: 1 },maxLevel: 10 },
  { id: "wealth_accumulation", name: "敛财术", desc: "每秒自动获得5个灵石", cost: 4500, costType: "exp", effect: { spiritStonesPerSecond: 5 },maxLevel: 10 },
  { id: "longevity_technique", name: "长生诀", desc: "每秒增加少量寿命", cost: 6000, costType: "exp", effect: { lifespanPerSecond: 0.0001 } }// 每秒增加约8.64秒寿命}
];


let gameState = {
    lifespan: {
    current: 80,     // 当前寿命
    max: 80,         // 最大寿命
    total: 80        // 总寿命（用于记录修炼增加的寿命）
  },
  age: 16,           // 当前年龄
  reincarnationCount: 0, // 转世次数
  reincarnationBenefits: {}, // 转世带来的永久加成
  autoGainRate: 0, // 挂机增加的灵气速率
  qi: 0,
  exp: 0,
  spiritStones: 0,
  realmIndex: 0,
  rate: 0,
  clickPower: 1,
  spiritRootIndex: 0,
  techniques: {},
  pills: {},
  skills: {},
  cooldowns: {
    meditate: 0,
    explore: 0
  },
  events: [],
  autoCultivate: false,
  settings: {
    soundEnabled: true,
    theme: 'default'
  }
};

// DOM元素
const qiSpan = document.getElementById("qi");
const expSpan = document.getElementById("exp");
const spiritStonesSpan = document.getElementById("spirit-stones");
const realmSpan = document.getElementById("realm");
const rateSpan = document.getElementById("rate");
const spiritRootSpan = document.getElementById("spirit-root");
const nextRealmSpan = document.getElementById("next-realm");
const realmProgressBar = document.getElementById("realm-progress");
const logDiv = document.getElementById("log");
const meditateBtn = document.getElementById("meditateBtn");
const exploreBtn = document.getElementById("exploreBtn");
const meditateTimeSpan = document.getElementById("meditate-time");
const exploreTimeSpan = document.getElementById("explore-time");

// 音效元素
const breakthroughSound = document.getElementById("breakthroughSound");
const cultivateSound = document.getElementById("cultivateSound");
const rootUpSound = document.getElementById("rootUpSound");

// 设置相关元素
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeModalBtn = document.getElementById("closeModal");
const soundToggle = document.getElementById("soundToggle");
const soundStatus = document.getElementById("soundStatus");
const resetBtn = document.getElementById("resetBtn");
const themeOptions = document.querySelectorAll(".theme-option");

// 在 initGame 函数中添加
function initGame() {
    loadGame();
    updateUI();
    renderTechniques();
    renderPills();
    renderSkills();
    initSettings();

      // 添加按钮事件绑定
  document.getElementById('cultivateBtn').addEventListener('click', cultivate);
  document.getElementById('breakBtn').addEventListener('click', breakthrough);
  document.getElementById('meditateBtn').addEventListener('click', meditate);
  document.getElementById('exploreBtn').addEventListener('click', explore);
  
  // 添加按钮点击效果
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
    });
  });

    
    // 防止双击缩放（但允许快速点击按钮）
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        // 只阻止在非按钮元素上的快速双击
        if (now - lastTouchEnd <= 300 && !event.target.closest('button')) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // 设置标签切换
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
    
    // 设置自动保存
    setInterval(saveGame, 30000);
    
    // 游戏主循环
    setInterval(gameLoop, 100);
    
    // 加载更新日志
    loadReadme();
  }

// 修改 script.js 中的 loadReadme 函数
function loadReadme() {
  const readmeContainer = document.getElementById('readme-content');
  
  // 直接从 Vercel 部署地址加载 README.txt
  fetch('https://new-xiuxian.vercel.app/README.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('无法加载更新日志');
      }
      return response.text();
    })
    .then(text => {
      // 解析并显示 README 内容
      displayReadme(text, readmeContainer);
    })
    .catch(error => {
      // 如果网络加载失败，使用本地备份内容
      console.log('从 Vercel 加载失败，使用本地备份:', error);
      displayReadme(getLocalReadme(), readmeContainer);
    });
}

// 显示 README 内容
function displayReadme(text, container) {
  container.innerHTML = '';
  
  // 按行分割文本
  const lines = text.split('\n');
  
  lines.forEach(line => {
    if (line.trim()) {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      entry.textContent = line;
      container.appendChild(entry);
    }
  });
}

// 本地备份的 README 内容
function getLocalReadme() {
  return `欢迎游玩 修仙奇缘1.1
作者:吕俊毅
编程师:DeepSeek3.1 & 吕俊毅

【如何游玩】
1.访问 https://new-xiuxian.vercel.app/ 即可开始游戏
2.或下载全部文件保存在同个文件夹后双击index.html

【注意事项】
1.请勿搬运！本人已经做过标记，所以请勿搬运！
2.推荐使用电脑游玩，移动端可能体验不佳

【特殊玩法】
1.可到script.js 更改境界需求、功法所需灵气等参数
2.可按F12，在控制台修改游戏数据
3.设置里可以调整音效和主题颜色

祝你玩得愉快！

【最新版本】1.1
- 修复iOS/Safari无法快速点击错误
- 优化移动端体验
- 添加自动保存功能`;
}

// 初始化设置
function initSettings() {
  // 设置音效开关状态
  soundToggle.checked = gameState.settings.soundEnabled;
  soundStatus.textContent = gameState.settings.soundEnabled ? "开启" : "关闭";
  
  // 设置主题
  setTheme(gameState.settings.theme);
  
  // 设置事件监听
  settingsBtn.addEventListener("click", () => {
    settingsModal.style.display = "flex";
  });
  
  closeModalBtn.addEventListener("click", () => {
    settingsModal.style.display = "none";
  });
  
  soundToggle.addEventListener("change", () => {
    gameState.settings.soundEnabled = soundToggle.checked;
    soundStatus.textContent = soundToggle.checked ? "开启" : "关闭";
    saveGame();
  });
  
  themeOptions.forEach(option => {
    option.addEventListener("click", () => {
      const theme = option.dataset.theme;
      setTheme(theme);
      gameState.settings.theme = theme;
      saveGame();
      
      // 更新选中状态
      themeOptions.forEach(opt => opt.classList.remove("active"));
      option.classList.add("active");
    });
  });
  
  resetBtn.addEventListener("click", () => {
    if (confirm("确定要重启人生吗？所有进度将会丢失！")) {
      resetGame();
      settingsModal.style.display = "none";
    }
  });
  
  // 点击模态窗口外部关闭
  window.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.style.display = "none";
    }
  });
}

// 设置主题
function setTheme(theme) {
  const root = document.documentElement;
  
  switch(theme) {
    case "purple":
      root.style.setProperty("--primary", "#4a0c4e");
      root.style.setProperty("--secondary", "#7a1f7a");
      root.style.setProperty("--accent", "#ff4df0");
      break;
    case "teal":
      root.style.setProperty("--primary", "#0c4e4e");
      root.style.setProperty("--secondary", "#1f7a7a");
      root.style.setProperty("--accent", "#4dfff0");
      break;
    case "gold":
      root.style.setProperty("--primary", "#4e3c0c");
      root.style.setProperty("--secondary", "#7a651f");
      root.style.setProperty("--accent", "#ffd04d");
      break;
    default: // default
      root.style.setProperty("--primary", "#2a0c4e");
      root.style.setProperty("--secondary", "#4a1f7a");
      root.style.setProperty("--accent", "#9a4dff");
  }
}

// 修改 resetGame 函数
function resetGame() {
  // 移除这里的确认对话框，因为已经在按钮点击时确认过了
  const defaultState = {
    reincarnationCount: 0,
    reincarnationBenefits: {},
    autoGainRate: 0,
    lifespan: { current: 80, max: 80, total: 80 },
    age: 16,
    qi: 0,
    exp: 0,
    spiritStones: 0,
    realmIndex: 0,
    rate: 0,
    clickPower: 1,
    spiritRootIndex: 0,
    techniques: {},
    pills: {},
    skills: {},
    cooldowns: {
      meditate: 0,
      explore: 0
    },
    events: [],
    autoCultivate: false,
    settings: gameState.settings, // 保留设置
    dayAccumulator: 0,
    stoneAccumulator: 0
  };
  
  gameState = defaultState;
  logDiv.innerHTML = "";
  log("已重启人生，开始新的修仙之旅...");
  saveGame();
  updateUI();
  renderTechniques();
  renderPills();
  renderSkills();
}

// 播放音效
function playSound(soundElement) {
  if (gameState.settings.soundEnabled) {
    soundElement.currentTime = 0;
    soundElement.play().catch(e => console.log("音效播放失败:", e));
  }
}

// 游戏主循环
function gameLoop() {
  // 更新冷却时间
  updateCooldowns();
  
  // 自动修炼
  if (gameState.autoCultivate) {
    const gain = (gameState.rate * spiritRoots[gameState.spiritRootIndex].multiplier) / 10;
    gameState.qi += gain;
  }

  // 挂机增加灵气
  if (gameState.autoGainRate > 0) {
    const autoGain = (gameState.autoGainRate * spiritRoots[gameState.spiritRootIndex].multiplier) / 10;
    gameState.qi += autoGain;
  }
  
  // 时间流逝（每10次循环相当于1天）
  if (typeof gameState.dayAccumulator === 'undefined') {
    gameState.dayAccumulator = 0;
  }
  
  gameState.dayAccumulator += 0.1;
  if (gameState.dayAccumulator >= 1) {
    advanceTime(800); // 时间前进73天
    gameState.dayAccumulator = 0;
  }
  
  // 每秒增加灵石（修改为整数）
  addSpiritStonesPerSecond();
  
  // 更新UI
  updateUI();
}

// 时间前进函数
function advanceTime(days) {
  gameState.age += days / 365; // 增加年龄
  
  // 检查是否寿元耗尽
  if (gameState.age >= gameState.lifespan.current) {
    handleDeath(); // 处理死亡
  }
   // 添加寿命显示
  document.getElementById("lifespan").textContent = `${Math.floor(gameState.lifespan.current - gameState.age)} 年`;
  document.getElementById("age").textContent = `${Math.floor(gameState.age)} 岁`;
}

// 新增函数：每秒增加灵石（确保为整数）
function addSpiritStonesPerSecond() {
  let stonesPerSecond = 0;
  
  // 检查所有已学会的神通
  for (const skillId in gameState.skills) {
    if (gameState.skills[skillId]) {
      const skill = skills.find(s => s.id === skillId);
      if (skill && skill.effect.spiritStonesPerSecond) {
        stonesPerSecond += skill.effect.spiritStonesPerSecond;
      }
    }
  }
  
  // 每10次循环（1秒）增加一次灵石
  if (typeof gameState.stoneAccumulator === 'undefined') {
    gameState.stoneAccumulator = 0;
  }
  
  gameState.stoneAccumulator += stonesPerSecond / 10;
  
  // 确保只增加整数
  if (gameState.stoneAccumulator >= 1) {
    const stonesToAdd = Math.floor(gameState.stoneAccumulator);
    gameState.spiritStones += stonesToAdd;
    gameState.stoneAccumulator -= stonesToAdd;
  }
}

// 更新冷却时间
function updateCooldowns() {
  if (gameState.cooldowns.meditate > 0) {
    gameState.cooldowns.meditate -= 0.1;
    meditateTimeSpan.textContent = Math.ceil(gameState.cooldowns.meditate);
    meditateBtn.disabled = true;
    
    // 更新冷却视觉效果
    const overlay = meditateBtn.querySelector('.cooldown-overlay') || createCooldownOverlay(meditateBtn);
    overlay.style.width = (gameState.cooldowns.meditate / 30 * 100) + '%';
  } else {
    meditateBtn.disabled = false;
    meditateTimeSpan.textContent = "0";
    const overlay = meditateBtn.querySelector('.cooldown-overlay');
    if (overlay) overlay.remove();
  }
  
  if (gameState.cooldowns.explore > 0) {
    gameState.cooldowns.explore -= 0.1;
    exploreTimeSpan.textContent = Math.ceil(gameState.cooldowns.explore);
    exploreBtn.disabled = true;
    
    // 更新冷却视觉效果
    const overlay = exploreBtn.querySelector('.cooldown-overlay') || createCooldownOverlay(exploreBtn);
    overlay.style.width = (gameState.cooldowns.explore / 60 * 100) + '%';
  } else {
    exploreBtn.disabled = false;
    exploreTimeSpan.textContent = "0";
    const overlay = exploreBtn.querySelector('.cooldown-overlay');
    if (overlay) overlay.remove();
  }
}

// 创建冷却覆盖层
function createCooldownOverlay(button) {
  const overlay = document.createElement('div');
  overlay.className = 'cooldown-overlay';
  overlay.style.width = '100%';
  button.appendChild(overlay);
  return overlay;
}

// 更新UI
function updateUI() {
  qiSpan.textContent = Math.floor(gameState.qi); // 灵气显示整数
  expSpan.textContent = Math.floor(gameState.exp); // 修为显示整数
  spiritStonesSpan.textContent = Math.floor(gameState.spiritStones); // 灵石显示整数
  realmSpan.textContent = realms[gameState.realmIndex].name;
  rateSpan.textContent = (gameState.rate * spiritRoots[gameState.spiritRootIndex].multiplier).toFixed(1);
  spiritRootSpan.textContent = spiritRoots[gameState.spiritRootIndex].name;
  
  // 更新下一境界信息
  if (gameState.realmIndex + 1 < realms.length) {
    const nextRealm = realms[gameState.realmIndex + 1];
    nextRealmSpan.textContent = nextRealm.name;
    
    // 计算进度
    const progress = (gameState.qi / nextRealm.cost) * 100;
    realmProgressBar.style.width = Math.min(progress, 100) + '%';
  } else {
    nextRealmSpan.textContent = "已达最高境界";
    realmProgressBar.style.width = '100%';
  }
  
  // 更新寿命和年龄显示
  document.getElementById("lifespan").textContent = `${Math.floor(gameState.lifespan.current - gameState.age)} 年`;
  document.getElementById("age").textContent = `${Math.floor(gameState.age)} 岁`;
}

// 渲染功法
function renderTechniques() {
  const container = document.getElementById('upgrades');
  container.innerHTML = '';
  
  techniques.forEach(tech => {
    const owned = gameState.techniques[tech.id] || 0;
    const canBuy = owned < tech.maxLevel && 
      (!tech.require || gameState.techniques[tech.require] > 0);
    
    const item = document.createElement('div');
    item.className = 'upgrade-item';
    item.innerHTML = `
      <div class="upgrade-info">
        <div class="upgrade-name">${tech.name} ${owned > 0 ? `[${owned}/${tech.maxLevel}]` : ''}</div>
        <div class="upgrade-desc">${tech.desc}</div>
      </div>
      <div class="upgrade-cost">${tech.cost * (owned + 1)} ${tech.costType === 'qi' ? '灵气' : '灵石'}</div>
      ${owned > 0 ? '<div class="upgrade-owned">已拥有</div>' : ''}
    `;
    
    if (canBuy) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => buyTechnique(tech));
    } else {
      item.style.opacity = '0.6';
    }
    
    container.appendChild(item);
  });
}

// 渲染丹药
function renderPills() {
  const container = document.getElementById('alchemy');
  container.innerHTML = '';
  
  pills.forEach(pill => {
    const item = document.createElement('div');
    item.className = 'upgrade-item';
    item.innerHTML = `
      <div class="upgrade-info">
        <div class="upgrade-name">${pill.name}</div>
        <div class="upgrade-desc">${pill.desc}</div>
      </div>
      <div class="upgrade-cost">${pill.cost} ${pill.costType === 'qi' ? '灵气' : '灵石'}</div>
    `;
    
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => buyPill(pill));
    
    container.appendChild(item);
  });
}

// 渲染神通
function renderSkills() {
  const container = document.getElementById('skills');
  container.innerHTML = '';
  
  skills.forEach(skill => {
    const owned = gameState.skills[skill.id] || 0;
    const item = document.createElement('div');
    item.className = 'upgrade-item';
    item.innerHTML = `
      <div class="upgrade-info">
        <div class="upgrade-name">${skill.name} ${owned > 0 ? '[已学会]' : ''}</div>
        <div class="upgrade-desc">${skill.desc}</div>
      </div>
      <div class="upgrade-cost">${skill.cost} ${skill.costType === 'qi' ? '灵气' : '修为'}</div>
    `;
    
    if (owned === 0) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => buySkill(skill));
    } else {
      item.style.opacity = '0.6';
    }
    
    container.appendChild(item);
  });
}

// 购买功法
function buyTechnique(tech) {
  const owned = gameState.techniques[tech.id] || 0;
  
  if (owned >= tech.maxLevel) {
    log("已达到该功法的最高等级");
    return;
  }
  
  if (tech.require && !gameState.techniques[tech.require]) {
    log("需要先学习前置功法");
    return;
  }
  
  const cost = tech.cost * (owned + 1);
  
  if (tech.costType === 'qi' && gameState.qi >= cost) {
    gameState.qi -= cost;
    gameState.techniques[tech.id] = (gameState.techniques[tech.id] || 0) + 1;
    
    // 应用效果
    if (tech.effect.rate) {
      gameState.rate += tech.effect.rate;
    }
    
    if (tech.effect.autoGain) {
      gameState.autoGainRate += tech.effect.autoGain;
    }

    if (tech.effect.click) {
      gameState.clickPower += tech.effect.click;
    }
    
    if (tech.effect.auto) {
      gameState.autoCultivate = true;
    }
    
    if (tech.effect.multiplier) {
      // 全局倍率提升
      gameState.rate *= (1 + tech.effect.multiplier);
    }
    
    log(`习得 ${tech.name} ${owned + 1}级`);
    playSound(cultivateSound);
    renderTechniques();
  } else if (tech.costType === 'spiritStones' && gameState.spiritStones >= cost) {
    gameState.spiritStones -= cost;
    gameState.techniques[tech.id] = (gameState.techniques[tech.id] || 0) + 1;
    log(`习得 ${tech.name} ${owned + 1}级`);
    playSound(cultivateSound);
    renderTechniques();
  } else {
    log("灵气/灵石不足");
  }
}

function buyPill(pill) {
  if (pill.costType === 'qi' && gameState.qi >= pill.cost) {
    gameState.qi -= pill.cost;
  } else if (pill.costType === 'spiritStones' && gameState.spiritStones >= pill.cost) {
    gameState.spiritStones -= pill.cost;
  } else {
    log("灵气/灵石不足");
    return;
  }
  
  // 检查是否已有同类型丹药效果（防止叠加）
  if (pill.effect.rateMultiplier) {
    const existingPill = gameState.events.find(e => e.type === 'rateMultiplier' && e.pillId === pill.id);
    if (existingPill) {
      log("同类丹药效果尚未结束，无法使用");
      // 返还消耗
      if (pill.costType === 'qi') {
        gameState.qi += pill.cost;
      } else {
        gameState.spiritStones += pill.cost;
      }
      return;
    }
  }
  
  // 应用丹药效果
  if (pill.effect.rateMultiplier) {
    const originalRate = gameState.rate;
    gameState.rate *= pill.effect.rateMultiplier;
    log(`服用${pill.name}，灵气获取速度${pill.effect.rateMultiplier}倍`);
    
    // 记录丹药效果
    gameState.events.push({
      type: 'rateMultiplier',
      pillId: pill.id,
      originalRate: originalRate,
      multiplier: pill.effect.rateMultiplier,
      expires: Date.now() + (pill.effect.duration * 1000)
    });
    
    // 设置持续时间后恢复
    setTimeout(() => {
      const effectIndex = gameState.events.findIndex(e => 
        e.type === 'rateMultiplier' && e.pillId === pill.id
      );
      
      if (effectIndex !== -1) {
        gameState.events.splice(effectIndex, 1);
        // 只恢复如果没有其他同类效果
        const hasOtherEffect = gameState.events.some(e => 
          e.type === 'rateMultiplier' && e.pillId !== pill.id
        );
        
        if (!hasOtherEffect) {
          gameState.rate = originalRate;
        }
        log(`${pill.name}效果结束`);
      }
    }, pill.effect.duration * 1000);
  }
  
  if (pill.effect.breakThrough) {
    // 下次突破成功率增加
    gameState.events.push({
      type: 'breakthroughBonus',
      value: pill.effect.breakThrough,
      expires: Date.now() + 3600000 // 1小时
    });
    log(`服用${pill.name}，下次突破成功率增加20%`);
  }
  
  if (pill.effect.immediateQi) {
    gameState.qi += pill.effect.immediateQi;
    log(`服用${pill.name}，获得100点灵气`);
  }
  
  if (pill.effect.rootUp && Math.random() < pill.effect.rootUp) {
    if (gameState.spiritRootIndex < spiritRoots.length - 1) {
      gameState.spiritRootIndex++;
      log(`服用${pill.name}，灵根品质提升为${spiritRoots[gameState.spiritRootIndex].name}`);
      playSound(rootUpSound);
    } else {
      log(`服用${pill.name}，但灵根已达最高品质`);
    }
  }
  
  if (pill.effect.addLifespan) {
    gameState.lifespan.current += pill.effect.addLifespan;
    gameState.lifespan.max += pill.effect.addLifespan;
    gameState.lifespan.total += pill.effect.addLifespan;
    log(`服用${pill.name}，增加${pill.effect.addLifespan}年寿命`);
  }
}

// 购买神通
function buySkill(skill) {
  if (gameState.skills[skill.id]) {
    log("已学会该神通");
    return;
  }
  
  if (skill.costType === 'exp' && gameState.exp >= skill.cost) {
    gameState.exp -= skill.cost;
    gameState.skills[skill.id] = true;
    log(`学会神通：${skill.name}`);
    playSound(cultivateSound);
    renderSkills();
  } else {
    log("修为不足");
    // 如果是增加灵石/秒的神通，立即初始化累加器
    if (skill.effect.spiritStonesPerSecond) {
      if (typeof gameState.stoneAccumulator === 'undefined') {
        gameState.stoneAccumulator = 0;
      }
    }
  }
}

// 添加转世函数
function reincarnate() {
  // 计算转世加成 (基于当前境界和成就)
  const realmBonus = Math.pow(2, gameState.realmIndex) * 0.1;
  const expBonus = Math.log10(gameState.exp + 1) * 0.05;
  const totalBonus = 1 + realmBonus + expBonus + (gameState.reincarnationCount * 0.2);
  
  // 保存转世加成
  gameState.reincarnationCount++;
  gameState.reincarnationBenefits = {
    rateMultiplier: totalBonus,
    clickMultiplier: totalBonus,
    expMultiplier: totalBonus
  };
  
  // 重置游戏状态但保留转世加成
  const newState = {
    qi: 0,
    exp: 0,
    spiritStones: 0,
    realmIndex: 0,
    rate: 0,
    clickPower: 1,
    spiritRootIndex: 0,
    techniques: {},
    pills: {},
    skills: {},
    cooldowns: { meditate: 0, explore: 0 },
    events: [],
    autoCultivate: false,
    settings: gameState.settings,
    reincarnationCount: gameState.reincarnationCount,
    reincarnationBenefits: gameState.reincarnationBenefits,
    lifespan: { current: 80, max: 80, total: 80 },
    age: 16,
    autoGainRate: 0,
    dayAccumulator: 0,
    stoneAccumulator: 0
  };
  
  gameState = newState;
  
  log(`第${gameState.reincarnationCount}次转世成功！获得${(totalBonus-1)*100}%永久加成`);
  showEventNotification("转世成功！", "success");
  
  // 重新渲染界面
  updateUI();
  renderTechniques();
  renderPills();
  renderSkills();
}

function cultivate() {
  let gain = gameState.clickPower * spiritRoots[gameState.spiritRootIndex].multiplier;
  
  // 应用转世加成
  if (gameState.reincarnationBenefits.clickMultiplier) {
    gain *= gameState.reincarnationBenefits.clickMultiplier;
  }
  
  gameState.qi += gain;
  log(`修炼获得 ${gain.toFixed(1)} 点灵气`);
  playSound(cultivateSound);

  // 添加点击效果
  createClickEffect(gain.toFixed(1), 'cultivateBtn');
}

// 专门的点击效果函数
function createClickEffect(text, buttonId) {
  const button = document.getElementById(buttonId);
  const effect = document.createElement('div');
  
  effect.className = 'click-effect';
  effect.textContent = `+${text}`;
  
  // 设置初始位置（按钮中心）
  const rect = button.getBoundingClientRect();
  effect.style.left = (rect.left + rect.width / 2) + 'px';
  effect.style.top = (rect.top + rect.height / 2) + 'px';
  
  // 添加到body
  document.body.appendChild(effect);
  
  // 自动移除
  setTimeout(() => {
    if (effect.parentNode) {
      effect.parentNode.removeChild(effect);
    }
  }, 1000);
}

// 突破境界
function breakthrough() {
  if (gameState.realmIndex + 1 >= realms.length) {
    log("已达最高境界");
    return;
  }
  
  const nextRealm = realms[gameState.realmIndex + 1];
  
  if (gameState.qi < nextRealm.cost) {
    log("灵气不足，无法突破");
    return;
  }
  
  // 计算突破成功率
  let successRate = 0.2;
  const realmDiff = nextRealm.exp - realms[gameState.realmIndex].exp;
  const expRatio = gameState.exp / realmDiff;
  successRate += Math.min(expRatio * 0.3, 0.3);
  
  // 检查丹药加成
  const pillBonus = gameState.events.find(e => e.type === 'breakthroughBonus');
  if (pillBonus) {
    successRate += pillBonus.value;
    // 移除已使用的丹药效果
    gameState.events = gameState.events.filter(e => e !== pillBonus);
  }
  
  // 灵根加成
  successRate += spiritRoots[gameState.spiritRootIndex].multiplier * 0.05;
  
  successRate = Math.min(successRate, 0.95);
  
  if (Math.random() < successRate) {
    // 突破成功
    gameState.qi -= nextRealm.cost;
    gameState.realmIndex++;
    
    // 增加寿命
    const lifespanGain = nextRealm.lifespan;
    gameState.lifespan.current += lifespanGain;
    gameState.lifespan.max += lifespanGain;
    gameState.lifespan.total += lifespanGain;
    
    // 修复：更新灵气获取速率
    gameState.rate = realms[gameState.realmIndex].rate;
    
    log(`突破成功！达到${nextRealm.name}，增加${lifespanGain}年寿命`);
    playSound(breakthroughSound);
    showEventNotification("突破成功！", "success");
    
    // 增加修为（确保为整数）
    gameState.exp += Math.floor(nextRealm.exp);
  } else {
    // 突破失败
    gameState.qi -= nextRealm.cost * 0.5;
    log("突破失败，损失部分灵气");
    showEventNotification("突破失败", "error");
  }
}

// 冥想
function meditate() {
  if (gameState.cooldowns.meditate > 0) return;
  
  let gain = 10 + (gameState.realmIndex * 5);
  
  // 应用神通加成
  if (gameState.skills.inner_vision) {
    gain *= 1.3; // 内视神通增加30%冥想收益
  }
  
  // 应用转世加成
  if (gameState.reincarnationBenefits.expMultiplier) {
    gain *= gameState.reincarnationBenefits.expMultiplier;
  }
  
  // 确保获得整数修为
  gameState.exp += Math.floor(gain);
  gameState.cooldowns.meditate = 15; // 15秒冷却
  
  // 应用神通冷却缩减
  if (gameState.skills.inner_vision) {
    gameState.cooldowns.meditate *= 0.8; // 减少20%冷却
  }
  
  log(`冥想获得 ${Math.floor(gain)} 点修为`);
  playSound(cultivateSound);
}

// 探索
function explore() {
  if (gameState.cooldowns.explore > 0) return;
  
  let gain = 5 + (gameState.realmIndex * 3);
  
  // 应用神通加成
  if (gameState.skills.fireball) {
    gain *= 1.2; // 火球术增加20%探索收益
  }
  if (gameState.skills.spirit_sense) {
    gain *= 1.5; // 神识外放增加50%探索收益
  }
  
  // 确保获得整数灵石
  gameState.spiritStones += Math.floor(gain);
  gameState.cooldowns.explore = 15; // 15秒冷却
  
  // 应用神通冷却缩减
  if (gameState.skills.wind_walk) {
    gameState.cooldowns.explore *= 0.8; // 减少20%冷却
  }
  
  log(`探索获得 ${Math.floor(gain)} 个灵石`);
  playSound(cultivateSound);
}

// 显示事件通知
function showEventNotification(message, type = "info") {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    z-index: 1000;
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.3s ease;
  `;
  
  if (type === "success") {
    notification.style.background = "linear-gradient(45deg, var(--secondary), #00b894)";
  } else if (type === "error") {
    notification.style.background = "linear-gradient(45deg, var(--secondary), #d63031)";
  } else {
    notification.style.background = "linear-gradient(45deg, var(--secondary), var(--primary))";
  }
  
  document.body.appendChild(notification);
  
  // 触发动画
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 10);
  
  // 自动消失
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100px)";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// 修改 handleDeath 函数
function handleDeath() {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  
  const content = document.createElement('div');
  content.style.cssText = `
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 80%;
    color: white;
  `;
  
  content.innerHTML = `
    <h2>💀 寿元已尽 💀</h2>
    <p>你在 ${realms[gameState.realmIndex].name} 境界结束了此生，享年 ${Math.floor(gameState.age)} 岁</p>
    <p>累计修为：${Math.floor(gameState.exp)}</p>
    <p>最高境界：${realms[gameState.realmIndex].name}</p>
    <div style="margin: 1rem 0;">
      <button id="reincarnateBtn" style="background: linear-gradient(45deg, #00b894, #00a382); margin: 0.5rem; padding: 10px 20px; border: none; border-radius: 5px; color: white; cursor: pointer;">转世重修</button>
      <button id="newLifeBtn" style="background: linear-gradient(45deg, #0984e3, #0984e3); margin: 0.5rem; padding: 10px 20px; border: none; border-radius: 5px; color: white; cursor: pointer;">全新人生</button>
    </div>
  `;
  
  modal.appendChild(content);
  document.body.appendChild(modal);
  
  // 使用事件委托来绑定点击事件
  modal.addEventListener('click', function(e) {
    if (e.target.id === 'reincarnateBtn') {
      modal.remove();
      reincarnate();
    } else if (e.target.id === 'newLifeBtn') {
      modal.remove();
      resetGame();
    }
  });
}

// 确保这些函数在全局作用域中可用
window.reincarnate = reincarnate;
window.resetGame = resetGame;


// 日志功能
function log(message) {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
  logDiv.appendChild(entry);
  
  // 保持日志在最新
  logDiv.scrollTop = logDiv.scrollHeight;
  
  // 限制日志数量
  if (logDiv.children.length > 100) {
    logDiv.removeChild(logDiv.children[0]);
  }
}

// 保存游戏
function saveGame() {
  localStorage.setItem('xiuxianGame', JSON.stringify(gameState));
  log("游戏已自动保存");
}

// 加载游戏
function loadGame() {
  const saved = localStorage.getItem('xiuxianGame');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      
      // 合并保存的游戏状态，确保新版本有默认值
      gameState = {
        ...gameState,
        ...parsed,
        settings: {
          ...gameState.settings,
          ...(parsed.settings || {})
        },
        lifespan: parsed.lifespan || { current: 80, max: 80, total: 80 },
        age: parsed.age || 16,
        reincarnationCount: parsed.reincarnationCount || 0,
        reincarnationBenefits: parsed.reincarnationBenefits || {},
        autoGainRate: parsed.autoGainRate || 0,
        dayAccumulator: parsed.dayAccumulator || 0,
        stoneAccumulator: parsed.stoneAccumulator || 0
      };
      
      log("游戏加载成功");
    } catch (e) {
      log("加载存档失败，使用默认状态");
      console.error("加载错误:", e);
    }
  } else {
    log("欢迎开始修仙之旅！");
  }
}

// 初始化游戏
initGame();

// 导出函数到全局作用域
window.cultivate = cultivate;
window.breakthrough = breakthrough;
window.meditate = meditate;
window.explore = explore;

// 创建冷却覆盖层
function createCooldownOverlay(button) {
  const overlay = document.createElement('div');
  overlay.className = 'cooldown-overlay';
  overlay.style.width = '100%';
  button.appendChild(overlay);
  return overlay;
}

// 显示事件通知
function showEventNotification(message, type = "info") {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    z-index: 1000;
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.3s ease;
  `;
  
  if (type === "success") {
    notification.style.background = "linear-gradient(45deg, var(--secondary), #00b894)";
  } else if (type === "error") {
    notification.style.background = "linear-gradient(45deg, var(--secondary), #d63031)";
  } else {
    notification.style.background = "linear-gradient(45deg, var(--secondary), var(--primary))";
  }
  
  document.body.appendChild(notification);
  
  // 触发动画
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 10);
  
  // 自动消失
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100px)";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}