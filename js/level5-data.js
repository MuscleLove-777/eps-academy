/* ============================================
   Level 5: クライアントと市場環境
   ============================================ */
const LEVEL5_DATA = {
    id: 5,
    title: "クライアントと市場環境",
    icon: "🤝",
    description: "EPSのクライアント構造、製薬企業との関係性、アウトソーシング動向を理解する",
    modules: [
        {
            id: 501,
            title: "日本の製薬企業とCROの関係",
            duration: "12分",
            content: `
<h2>製薬企業がCROを利用する理由</h2>
<p>日本の製薬企業は、臨床開発業務のかなりの部分をCROにアウトソーシングしています。その背景には複数の要因があります。</p>

<h3>アウトソーシング拡大の背景</h3>
<ul>
<li><strong>パイプライン数の増加:</strong> 多くの化合物を同時開発する必要がありながら、人員増加は難しい</li>
<li><strong>コスト最適化:</strong> 固定費を変動費化し、開発コストの効率化を図る</li>
<li><strong>専門性:</strong> がん、再生医療など高度な専門知識が必要な領域の拡大</li>
<li><strong>国際共同治験の増加:</strong> 海外での治験実施にはグローバルな対応力が必要</li>
<li><strong>規制の高度化:</strong> GCPをはじめとする規制要件の複雑化</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">アウトソーシング比率</div>
製薬企業のR&D（研究開発）費の50%以上がCROへのアウトソーシングに充てられていると推定されています。特にモニタリングやデータマネジメントは外注比率が高い業務です。
</div>

<h2>日本の主要製薬企業（CROクライアント候補）</h2>
<table>
<tr><th>企業名</th><th>2024年度売上高</th><th>主要領域</th><th>CRO利用傾向</th></tr>
<tr><td><strong>武田薬品工業</strong></td><td>約4.3兆円</td><td>消化器、希少疾患、神経科学、がん</td><td>グローバル治験はPRA/ICONと戦略提携</td></tr>
<tr><td><strong>アステラス製薬</strong></td><td>約1.6兆円</td><td>泌尿器、がん、移植</td><td>国内外のCROを幅広く利用</td></tr>
<tr><td><strong>第一三共</strong></td><td>約1.7兆円</td><td>がん（ADC）、循環器</td><td>ADC治験で大規模なCRO利用</td></tr>
<tr><td><strong>エーザイ</strong></td><td>約7,400億円</td><td>神経科学（AD）、がん</td><td>レカネマブでグローバル治験拡大</td></tr>
<tr><td><strong>中外製薬/ロシュ</strong></td><td>約1.1兆円</td><td>がん、希少疾患</td><td>ロシュのグローバル開発体制と連携</td></tr>
<tr><td><strong>小野薬品</strong></td><td>約4,700億円</td><td>がん（オプジーボ）</td><td>がん治験で積極的にCRO利用</td></tr>
<tr><td><strong>塩野義製薬</strong></td><td>約4,200億円</td><td>感染症、疼痛</td><td>新規抗菌薬等の開発でCRO活用</td></tr>
</table>

<h2>クライアントのCRO選定基準</h2>
<p>製薬企業がCROを選ぶ際の主要な評価基準：</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>疾患領域の専門性</strong>
がん、CNS、希少疾患など、対象疾患領域での実績と専門知識。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>品質とコンプライアンス</strong>
GCPコンプライアンス、データ品質、規制当局の査察実績。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>プロジェクト管理能力</strong>
スケジュール遵守率、コスト管理、リスクマネジメント。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>人材の質と安定性</strong>
CRAの経験・スキル、離職率、トレーニング体制。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>地理的カバレッジ</strong>
国内施設ネットワーク、グローバル展開能力。
</div>
</div>
</div>

<h2>戦略的パートナーシップモデル</h2>
<p>近年、製薬企業は多数のCROに案件を分散させるのではなく、<strong>少数の「戦略的パートナー」CROに集約</strong>する傾向が強まっています。</p>

<div class="scenario-box">
<div class="scenario-box-title">事例：武田薬品とPRA Health Sciences（現ICON）</div>
<p>武田薬品は2016年にPRA Health Sciencesと戦略的パートナーシップを締結。Phase I〜IVの臨床試験管理を包括的に委託。これにより、武田のパイプライン全体のCRO運営を一元化し、効率性と品質の向上を実現しました。</p>
</div>

<div class="info-box warning">
<div class="info-box-title">EPSへの影響</div>
大手製薬企業がグローバルCROとの戦略的パートナーシップを選好すると、国内CROであるEPSは「グローバル案件から排除される」リスクがあります。EPSは中堅製薬企業やバイオテック企業、あるいは国内限定/アジア限定の治験に注力することで対応しています。
</div>
            `,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "製薬企業のR&D費のうち、CROアウトソーシングに充てられる割合はおよそ何%以上ですか？",
                    options: ["約20%以上", "約35%以上", "約50%以上", "約80%以上"],
                    answer: 2,
                    explanation: "製薬企業のR&D費の50%以上がCROへのアウトソーシングに充てられていると推定されています。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "武田薬品が戦略的CROパートナーシップを結んだ相手はどれですか？",
                    options: ["EPS", "IQVIA", "PRA Health Sciences（現ICON）", "シミック"],
                    answer: 2,
                    explanation: "武田薬品は2016年にPRA Health Sciences（現ICON）と戦略的パートナーシップを締結しました。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "近年の製薬企業のCRO選定トレンドとして正しいものはどれですか？",
                    options: ["多数のCROに案件を分散", "少数の戦略的パートナーCROに集約", "CROの利用を縮小", "国内CROのみを選好"],
                    answer: 1,
                    explanation: "近年は多数のCROに分散させるのではなく、少数の「戦略的パートナー」CROに集約する傾向が強まっています。"
                }
            ]
        },
        {
            id: 502,
            title: "外資系製薬企業とバイオテック",
            duration: "10分",
            content: `
<h2>外資系製薬企業のCRO利用</h2>
<p>日本で事業を展開する外資系製薬企業は、EPSにとって<strong>重要なクライアントセグメント</strong>です。</p>

<h3>外資系製薬企業の日本での課題</h3>
<ul>
<li>日本特有の規制環境（PMDA、薬機法）への対応</li>
<li>日本語でのコミュニケーション</li>
<li>日本の医療機関・KOL（Key Opinion Leader）との関係構築</li>
<li>日本人データの取得要件への対応</li>
</ul>

<h3>EPSの「アジアゲートウェイ」戦略</h3>
<p>EPSは外資系製薬企業に対して、日本市場参入の最適なパートナーとしてのポジショニングを強化しています。</p>

<div class="info-box success">
<div class="info-box-title">EPSの提供価値（外資系製薬向け）</div>
<ul>
<li>PMDA対応のエキスパート集団</li>
<li>日本の医療機関との深いネットワーク（SMO経由）</li>
<li>日本+中国+アジアを一括でカバーする能力</li>
<li>日英バイリンガル対応力</li>
<li>外資系製薬の日本参入実績</li>
</ul>
</div>

<h2>バイオテック企業の台頭</h2>
<p>近年、新薬開発の<strong>主役が大手製薬企業からバイオテック企業</strong>に移りつつあります。これはCRO業界にとって大きなビジネスチャンスです。</p>

<h3>バイオテック企業がCROを必要とする理由</h3>
<ul>
<li><strong>自社に開発部門を持たない:</strong> 少人数で研究に特化し、開発はCROに全面委託</li>
<li><strong>規制対応の知識不足:</strong> 初めての臨床開発で全面的なサポートが必要</li>
<li><strong>資金制約:</strong> VC/PEからの資金調達に伴い、効率的な開発が求められる</li>
</ul>

<h3>日本発バイオテックの例</h3>
<table>
<tr><th>企業</th><th>領域</th><th>特徴</th></tr>
<tr><td>そーせいグループ</td><td>GPCR創薬</td><td>Heptares買収でグローバル展開</td></tr>
<tr><td>ペプチドリーム</td><td>特殊ペプチド</td><td>PDPS技術による創薬プラットフォーム</td></tr>
<tr><td>ブライトパス・バイオ</td><td>がん免疫</td><td>がん免疫療法の開発</td></tr>
<tr><td>アンジェス</td><td>遺伝子治療</td><td>HGF遺伝子治療薬の開発</td></tr>
</table>

<h3>中国発バイオテックの日本参入</h3>
<p>EPSにとって特に注目すべきセグメントが、<strong>中国発バイオテック企業の日本市場参入支援</strong>です。</p>
<ul>
<li>中国のバイオテック企業が開発した新薬を日本で承認取得するための支援</li>
<li>EPS益新の中国ネットワークと日本のCRO/薬事能力の連携</li>
<li>日中同時開発のコーディネーション</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">成長機会</div>
バイオテック企業は大手製薬企業と異なり、「戦略的パートナーシップ」で大手グローバルCROに囲い込まれにくい傾向があります。規模や柔軟性の面で、EPSのような国内CROにもビジネス獲得の機会があります。
</div>
            `,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "外資系製薬企業が日本で治験を行う際の課題として正しくないものは？",
                    options: ["PMDA規制への対応", "日本語コミュニケーション", "CDMOの確保", "日本人データ要件への対応"],
                    answer: 2,
                    explanation: "CDMOの確保は外資系製薬企業の日本治験における主要な課題には含まれません。主な課題はPMDA規制、日本語対応、日本の医療機関との関係構築、日本人データ要件です。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "バイオテック企業がCROを必要とする最大の理由はどれですか？",
                    options: ["資金が潤沢すぎるため", "自社に開発部門を持たないことが多いため", "規制上CRO利用が義務のため", "マーケティングのため"],
                    answer: 1,
                    explanation: "バイオテック企業は少人数で研究に特化し、臨床開発はCROに全面委託するケースが多いです。"
                },
                {
                    id: "q502_3",
                    type: "choice",
                    question: "EPSにとって「中国発バイオテックの日本参入支援」が特に有利な理由はどれですか？",
                    options: ["CDMOを持っているから", "EPS益新の中国ネットワークがあるから", "IQVIAと提携しているから", "日本政府の補助金があるから"],
                    answer: 1,
                    explanation: "EPS益新の中国ネットワークと日本のCRO/薬事能力を連携できることが、中国バイオテックの日本参入支援でEPSが有利な理由です。"
                }
            ]
        },
        {
            id: 503,
            title: "規制環境と政策動向",
            duration: "12分",
            content: `
<h2>CROに影響する規制環境</h2>
<p>CRO業界は規制産業であり、法規制の変化がビジネスに大きな影響を与えます。</p>

<h3>1. ICH-E6(R3) GCPガイドラインの改訂</h3>
<p><strong>ICH（医薬品規制調和国際会議）</strong>が策定するGCPガイドラインの最新改訂版（R3）は、CRO業界に大きな影響を与えます。</p>
<ul>
<li><strong>リスクベースドアプローチ</strong>を中核とした新GCP基準</li>
<li>従来の「全症例100%SDV」から「リスクに応じたモニタリング」へ</li>
<li>2024年11月〜2025年3月のパブリックコンサルテーションを経て実装へ</li>
<li>CROはモニタリング手法の見直しが必要</li>
</ul>

<h3>2. 2025年薬機法改正</h3>
<p>2025年の薬機法改正はCROにとって新たなビジネス機会をもたらします。</p>
<ul>
<li><strong>創薬環境の整備:</strong> イノベーション促進策の強化</li>
<li><strong>安定供給体制:</strong> 医薬品サプライチェーンの強化</li>
<li><strong>ドラッグラグ対策:</strong> 海外既承認薬の国内早期導入促進</li>
</ul>

<h3>3. ドラッグラグ/ドラッグロス問題</h3>
<p><strong>ドラッグラグ</strong>とは海外で承認された医薬品が日本で承認されるまでの時間差、<strong>ドラッグロス</strong>とは日本での開発自体が行われない状況を指します。</p>

<div class="info-box danger">
<div class="info-box-title">深刻化するドラッグロス</div>
<ul>
<li>国際共同治験への日本参加が遅れるケースの増加</li>
<li>日本市場の相対的な魅力低下（薬価制度、市場規模）</li>
<li>治験エコシステム導入推進事業（令和6年度〜）で改善を目指す</li>
<li>CROにとっては国際共同治験の受託機会増加が期待される</li>
</ul>
</div>

<h3>4. 日本人データ要件の見直し</h3>
<p>2024年10月に厚労省が通知を発出し、医薬品承認申請時の<strong>日本人データの必要性に関するガイダンス</strong>が見直されました。海外データの活用範囲が拡大する可能性があり、CRO業界への影響は両面的です。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>CROにとってのプラス面</h4>
<ul>
<li>国際共同治験の日本参加が増える可能性</li>
<li>海外データの活用支援という新サービス</li>
<li>ドラッグラグ解消による新薬数の増加</li>
</ul>
</div>
<div class="compare-card">
<h4>CROにとってのマイナス面</h4>
<ul>
<li>日本単独治験の減少リスク</li>
<li>日本人症例数の縮小</li>
<li>モニタリング需要の減少可能性</li>
</ul>
</div>
</div>

<h3>5. 再生医療等製品の規制フレームワーク</h3>
<p>日本は再生医療分野で世界に先駆けた規制制度を持っています。</p>
<ul>
<li><strong>条件・期限付き承認制度:</strong> 安全性と「推定される有効性」で最大7年の条件付き承認</li>
<li><strong>SAKIGAKE指定:</strong> 画期的な医薬品の優先審査制度</li>
<li>EPSは再生医療製品の開発支援に対応できる数少ないCROの一つ</li>
</ul>
            `,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "ICH-E6(R3) GCPガイドラインの中核となる概念はどれですか？",
                    options: ["全症例100%SDV", "リスクベースドアプローチ", "データの完全電子化", "AIによる自動監査"],
                    answer: 1,
                    explanation: "ICH-E6(R3)はリスクベースドアプローチを中核とし、従来の全症例100%SDVからリスクに応じたモニタリングへの移行を求めています。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "「ドラッグロス」の正しい定義はどれですか？",
                    options: ["医薬品が期限切れになること", "海外承認薬の日本での承認の時間差", "日本での開発自体が行われない状況", "医薬品の副作用による損失"],
                    answer: 2,
                    explanation: "ドラッグロスとは日本での開発自体が行われない状況を指します。ドラッグラグ（時間差）よりも深刻な問題です。"
                },
                {
                    id: "q503_3",
                    type: "fill",
                    question: "日本の条件・期限付き承認制度で、最大何年の条件付き承認が可能ですか？（数字のみ）",
                    answer: "7",
                    explanation: "条件・期限付き承認制度では、安全性と推定される有効性で最大7年の条件付き承認が可能です。"
                },
                {
                    id: "q503_4",
                    type: "choice",
                    question: "画期的な医薬品の優先審査制度の名称はどれですか？",
                    options: ["ファストトラック指定", "ブレークスルー指定", "SAKIGAKE指定", "オーファン指定"],
                    answer: 2,
                    explanation: "SAKIGAKE（先駆け）指定は、日本独自の画期的医薬品の優先審査制度です。"
                }
            ]
        },
        {
            id: 504,
            title: "アウトソーシングの将来像",
            duration: "10分",
            content: `
<h2>CROアウトソーシングの進化</h2>
<p>CROの役割は、単なる「業務の受託者」から<strong>「戦略的な開発パートナー」</strong>へと進化しています。</p>

<h3>アウトソーシングモデルの変遷</h3>
<table>
<tr><th>世代</th><th>モデル</th><th>特徴</th></tr>
<tr><td>第1世代</td><td>タスクベース</td><td>特定業務（モニタリング等）の人材派遣型</td></tr>
<tr><td>第2世代</td><td>ファンクショナル</td><td>機能単位（DM、統計等）での受託</td></tr>
<tr><td>第3世代</td><td>フルサービス</td><td>治験全体の一括受託（現在の主流）</td></tr>
<tr><td>第4世代</td><td>戦略的パートナー</td><td>パイプライン全体の長期的な開発パートナー</td></tr>
<tr><td><strong>次世代</strong></td><td><strong>インテリジェンス駆動型</strong></td><td><strong>AI・データを活用した「開発の共創者」</strong></td></tr>
</table>

<h2>次世代CROに求められる能力</h2>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>データインテリジェンス</strong>
RWDの活用、AIによる予測分析、デジタルバイオマーカーなど、データを武器にした開発最適化能力。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>患者中心の開発</strong>
DCT（分散型治験）、患者アドボカシー、患者報告アウトカム（PRO）の活用など、患者体験を重視した開発設計。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>レギュラトリー・インテリジェンス</strong>
各国の規制環境を熟知し、最適な承認戦略を提案できる能力。日本のPMDA、中国のNMPA、米国のFDA等。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>エコシステム構築力</strong>
アカデミア、バイオテック、製薬企業、医療機関を繋ぐプラットフォームとしての役割。
</div>
</div>
</div>

<h2>EPSの将来的なポジション</h2>
<p>EPSが次世代CROとして進化するためのシナリオ：</p>

<div class="info-box formula">
<div class="info-box-title">EPSの3つの成長シナリオ</div>
<ol>
<li><strong>「アジアNo.1 CRO」:</strong> 日中を核にアジア全域で最も選ばれるCROグループへ</li>
<li><strong>「日本のトータルヘルスケアパートナー」:</strong> CRO+SMO+CSOの深化に加え、デジタルヘルスや患者支援プログラムも統合</li>
<li><strong>「先端治療の開発ハブ」:</strong> 再生医療・細胞/遺伝子治療分野で世界的な専門性を確立</li>
</ol>
</div>
            `,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "現在のCROアウトソーシングの主流モデルはどの世代ですか？",
                    options: ["第1世代（タスクベース）", "第2世代（ファンクショナル）", "第3世代（フルサービス）", "第4世代（戦略的パートナー）"],
                    answer: 2,
                    explanation: "現在の主流は第3世代のフルサービスモデルで、治験全体の一括受託が一般的です。ただし大手製薬企業は第4世代の戦略的パートナーモデルに移行しつつあります。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "次世代CROの「インテリジェンス駆動型」モデルで最も重要な要素はどれですか？",
                    options: ["人材の大量採用", "AI・データを活用した開発最適化", "製造工場の保有", "営業力の強化"],
                    answer: 1,
                    explanation: "次世代CROはAI・データを活用した「開発の共創者」として、RWDの活用、AIによる予測分析、デジタルバイオマーカーなどを武器にします。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "EPSの成長シナリオとして挙げられていないのはどれですか？",
                    options: ["アジアNo.1 CRO", "グローバル最大手CRO", "日本のトータルヘルスケアパートナー", "先端治療の開発ハブ"],
                    answer: 1,
                    explanation: "「グローバル最大手CRO」はEPSの成長シナリオに含まれていません。EPSの戦略はグローバル規模での首位争いではなく、アジア特化や先端領域での差別化です。"
                }
            ]
        }
    ]
};
