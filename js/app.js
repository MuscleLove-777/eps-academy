/* ============================================
   EPSアカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('eps-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('eps-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('eps-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('eps-progress', JSON.stringify(this.progress)); localStorage.setItem('eps-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>EPSアカデミーへようこそ</h2>
            <p>イーピーエス株式会社の全容、CRO業界の構造、競合との関係性、クライアントについて体系的に学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>EPSグループとCRO業界の全体像を把握しました。<br>実務に活かしていきましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('eps-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('eps-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('eps-progress'); localStorage.removeItem('eps-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: 'CRO業界基本用語', terms: [
                { name: 'CRO', desc: 'Contract Research Organization（医薬品開発業務受託機関）。製薬企業から臨床試験等を受託する企業' },
                { name: 'SMO', desc: 'Site Management Organization（治験施設支援機関）。医療機関での治験実施を支援する組織' },
                { name: 'CSO', desc: 'Contract Sales Organization（医薬品販売業務受託機関）。MR派遣や営業支援を行う組織' },
                { name: 'CDMO', desc: 'Contract Development and Manufacturing Organization（医薬品受託開発製造機関）' },
                { name: 'CRA', desc: 'Clinical Research Associate（臨床開発モニター）。治験が適正に実施されているか監視する専門職' },
                { name: 'GCP', desc: 'Good Clinical Practice（医薬品の臨床試験の実施に関する基準）' },
            ]},
            { category: '臨床開発プロセス', terms: [
                { name: '前臨床試験', desc: '動物実験等でヒトへの投与前に安全性・有効性を確認する試験' },
                { name: 'Phase I', desc: '少数の健康な志願者を対象に安全性と薬物動態を調べる試験' },
                { name: 'Phase II', desc: '少数の患者を対象に有効性・用量を確認する探索的試験' },
                { name: 'Phase III', desc: '多数の患者を対象に既存薬と比較する検証的試験' },
                { name: 'Phase IV', desc: '市販後に安全性や有効性を長期的に追跡する製造販売後調査' },
                { name: 'NDA/BLA', desc: 'New Drug Application / Biologics License Application（新薬承認申請）' },
            ]},
            { category: '業界トレンド用語', terms: [
                { name: 'DCT', desc: 'Decentralized Clinical Trial（分散型臨床試験）。患者の来院負担を軽減する新しい試験形態' },
                { name: 'RWD', desc: 'Real World Data（リアルワールドデータ）。電子カルテやレセプト等の実臨床データ' },
                { name: 'RWE', desc: 'Real World Evidence（リアルワールドエビデンス）。RWDから得られる臨床エビデンス' },
                { name: 'EDC', desc: 'Electronic Data Capture（電子データ収集システム）。治験データの電子的入力・管理' },
                { name: 'ePRO', desc: 'electronic Patient Reported Outcome（電子患者報告アウトカム）' },
                { name: 'ドラッグラグ', desc: '海外で承認された医薬品が日本で承認されるまでの時間差' },
            ]},
            { category: 'EPSグループ企業', terms: [
                { name: 'EPSホールディングス', desc: 'EPSグループの持株会社。1991年設立、2021年MBOで上場廃止' },
                { name: 'イーピーエス', desc: 'CRO事業の中核企業。臨床開発受託サービスを提供' },
                { name: 'EPLink', desc: 'SMO事業会社。全国の医療機関で治験実施を支援' },
                { name: 'EPファーマライン', desc: 'CSO事業会社。MR派遣やコールセンター運営' },
                { name: 'EPS益新', desc: '中国での医薬品開発受託事業を展開するグループ会社' },
                { name: 'EPS創健', desc: 'アジア・グローバル展開を推進するグループ会社' },
            ]},
            { category: '規制・制度', terms: [
                { name: '薬機法', desc: '医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律' },
                { name: 'ICH', desc: 'International Council for Harmonisation（医薬品規制調和国際会議）' },
                { name: 'PMDA', desc: '独立行政法人 医薬品医療機器総合機構。日本の医薬品審査機関' },
                { name: 'IRB', desc: 'Institutional Review Board（治験審査委員会）' },
                { name: 'ICH-E6(R3)', desc: 'GCPガイドラインの最新改訂版。リスクベースドアプローチを中核とする' },
            ]}
        ];
        const colors = { 'CRO業界基本用語': '#1e40af', '臨床開発プロセス': '#0891b2', '業界トレンド用語': '#7c3aed', 'EPSグループ企業': '#059669', '規制・制度': '#dc2626' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">CRO業界とEPSグループに関する重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:160px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
