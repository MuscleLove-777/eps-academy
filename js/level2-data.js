/* ============================================
   Level 2: SMO・CSO・グローバル事業
   ============================================ */
const LEVEL2_DATA = {
    id: 2,
    title: "SMO・CSO・グローバル事業",
    icon: "🌏",
    description: "CRO以外の事業セグメントとアジア展開戦略を理解する",
    modules: [
        {
            id: 201,
            title: "SMO事業の役割と仕組み",
            duration: "12分",
            content: `
<h2>SMO（治験施設支援機関）とは</h2>
<p>SMO（Site Management Organization）は、<strong>医療機関側に立って治験の実施を支援する組織</strong>です。CROが製薬企業側を支援するのに対し、SMOは病院・クリニック側を支援します。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>CRO（製薬企業側）</h4>
<ul>
<li>製薬企業から受託</li>
<li>治験全体の計画・管理</li>
<li>モニタリング実施</li>
<li>データ管理・統計解析</li>
</ul>
</div>
<div class="compare-card">
<h4>SMO（医療機関側）</h4>
<ul>
<li>医療機関と契約</li>
<li>CRC（治験コーディネーター）派遣</li>
<li>被験者のケア・サポート</li>
<li>院内調整・書類管理</li>
</ul>
</div>
</div>

<h2>EPLink の概要</h2>
<p>EPLink はEPSグループのSMO事業会社で、全国の医療機関に<strong>CRC（治験コーディネーター）</strong>を派遣しています。</p>

<h3>CRCの主な業務</h3>
<ul>
<li><strong>被験者のスクリーニング:</strong> 治験に適した患者の選定支援</li>
<li><strong>インフォームドコンセント:</strong> 治験内容の説明と同意取得の補助</li>
<li><strong>スケジュール管理:</strong> 来院日程の調整、検査予約</li>
<li><strong>データ入力:</strong> 症例報告書（CRF）へのデータ入力支援</li>
<li><strong>有害事象対応:</strong> 副作用等の報告と被験者のフォロー</li>
</ul>

<div class="info-box success">
<div class="info-box-title">EPSのCRO+SMO連携の強み</div>
EPSグループ内にCROとSMOの両方を持つことで、製薬企業側と医療機関側の<strong>両方の視点</strong>から治験を最適化できます。例えば、被験者リクルーティングの課題をCROとSMOが共有し、迅速に解決策を打ち出すことが可能です。
</div>

<h2>日本のSMO市場</h2>
<p>日本のSMO市場は、大手企業への集約が進んでいます。主なSMO企業：</p>
<table>
<tr><th>企業名</th><th>特徴</th></tr>
<tr><td><strong>EPLink（EPS系）</strong></td><td>CROグループとの連携が強み</td></tr>
<tr><td>ノイエス（エムスリー系）</td><td>提携施設約800施設、医師ネットワーク活用</td></tr>
<tr><td>サイトサポート・インスティテュート</td><td>独立系大手SMO</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "SMOは誰の立場で治験を支援する組織ですか？",
                    options: ["製薬企業", "医療機関", "規制当局", "患者団体"],
                    answer: 1,
                    explanation: "SMOは医療機関側に立って治験の実施を支援する組織です。CROが製薬企業側を支援するのとは対照的です。"
                },
                {
                    id: "q201_2",
                    type: "fill",
                    question: "SMOから医療機関に派遣される、治験を調整する専門職の略称は？（アルファベット3文字）",
                    answer: "CRC",
                    explanation: "CRC（Clinical Research Coordinator：治験コーディネーター）はSMOから医療機関に派遣され、治験の実施を現場でサポートします。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "EPSグループのSMO事業会社の名称はどれですか？",
                    options: ["EPNextS", "EPLink", "EPファーマライン", "EPS益新"],
                    answer: 1,
                    explanation: "EPLinkがEPSグループのSMO事業を担う会社です。"
                }
            ]
        },
        {
            id: 202,
            title: "CSO事業と営業支援",
            duration: "10分",
            content: `
<h2>CSO（医薬品販売業務受託機関）とは</h2>
<p>CSO（Contract Sales Organization）は、<strong>製薬企業の営業・マーケティング活動を受託する組織</strong>です。特にMR（医薬情報担当者）の派遣が主要な事業です。</p>

<h3>なぜCSOが必要なのか</h3>
<ul>
<li><strong>新薬上市時:</strong> 販売力を一時的に増強したい場合</li>
<li><strong>カバレッジ拡大:</strong> 地方や特定領域の営業力を補完したい場合</li>
<li><strong>コスト最適化:</strong> 正社員MRを増やさず柔軟に対応したい場合</li>
<li><strong>後発品対応:</strong> 特許切れ後の製品管理を効率化したい場合</li>
</ul>

<h2>EPファーマラインのサービス</h2>

<h3>1. コントラクトMR派遣</h3>
<p>製薬企業に代わって医療機関を訪問し、医薬品の適正使用情報を提供する<strong>MR（Medical Representative）</strong>を派遣します。</p>

<h3>2. メディカルコールセンター</h3>
<p>医療従事者や患者からの医薬品に関する問い合わせに対応するコールセンターを運営します。</p>
<ul>
<li>24時間対応体制</li>
<li>有害事象の受付・一次評価</li>
<li>DIサービス（Drug Information：医薬品情報提供）</li>
</ul>

<h3>3. マーケティング支援</h3>
<ul>
<li>医薬品プロモーション資材の作成</li>
<li>講演会・セミナーの企画運営</li>
<li>デジタルマーケティング支援</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">MR数の減少トレンド</div>
日本のMR数は2013年のピーク時から約25%減少しています。デジタル化やオンライン面談の普及により、従来型のMR訪問は減少傾向にありますが、コントラクトMRの柔軟性は引き続き評価されています。
</div>

<h2>CRO・SMO・CSO三位一体の価値</h2>
<p>EPSグループは<strong>医薬品の開発（CRO）→治験実施支援（SMO）→販売支援（CSO）</strong>というバリューチェーンをグループ内で完結できます。</p>

<div class="visual-box">
<div class="visual-box-title">バリューチェーン</div>
<p style="font-size:1.1rem;font-weight:700;">
研究・前臨床 → <span style="color:#1e40af;">治験（CRO）</span> → <span style="color:#0891b2;">施設支援（SMO）</span> → 承認 → <span style="color:#059669;">販売支援（CSO）</span>
</p>
</div>
            `,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "CSO事業で製薬企業に派遣される専門職はどれですか？",
                    options: ["CRA", "CRC", "MR", "MSL"],
                    answer: 2,
                    explanation: "CSO事業ではMR（Medical Representative：医薬情報担当者）を製薬企業に派遣します。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "日本のMR数はピーク時（2013年）から約何%減少していますか？",
                    options: ["約10%", "約25%", "約40%", "約50%"],
                    answer: 1,
                    explanation: "日本のMR数は2013年のピーク時から約25%減少しています。"
                },
                {
                    id: "q202_3",
                    type: "choice",
                    question: "EPSの三位一体モデルで、医薬品承認後の販売活動を支援するのはどの事業ですか？",
                    options: ["CRO事業", "SMO事業", "CSO事業", "グローバル事業"],
                    answer: 2,
                    explanation: "CSO（Contract Sales Organization）事業が承認後の医薬品販売・マーケティング支援を担います。"
                }
            ]
        },
        {
            id: 203,
            title: "中国・アジア事業戦略",
            duration: "12分",
            content: `
<h2>EPSのアジア戦略</h2>
<p>EPSグループの最大の差別化要因の一つが、<strong>中国・アジア太平洋地域への展開</strong>です。特に中国市場は、EPSが他の国内CROに対して圧倒的な優位性を持つ分野です。</p>

<h2>中国事業（EPS益新）</h2>

<h3>事業規模</h3>
<ul>
<li>中国国内に<strong>15社以上</strong>のグループ企業を展開</li>
<li>医薬品CRO、医療機器CRO、データマネジメント、薬事コンサルティングなど多岐にわたるサービス</li>
<li>北京、上海、広州など主要都市に拠点</li>
</ul>

<h3>なぜ中国市場が重要なのか</h3>
<div class="info-box tip">
<div class="info-box-title">中国医薬品市場のポテンシャル</div>
<ul>
<li>中国は米国に次ぐ<strong>世界第2位の医薬品市場</strong></li>
<li>中国政府による新薬開発促進政策（MAH制度改革等）</li>
<li>中国発のバイオテック企業が急増し、CRO需要が拡大</li>
<li>日中間の新薬ブリッジング戦略の重要性増大</li>
</ul>
</div>

<h3>日中ブリッジング戦略</h3>
<p>EPSは日中両国に拠点を持つ強みを活かし、以下のサービスを提供しています：</p>
<ul>
<li><strong>日本→中国:</strong> 日本企業の中国市場参入支援（中国NMPA申請サポート）</li>
<li><strong>中国→日本:</strong> 中国バイオテック企業の日本市場参入支援（PMDA申請サポート）</li>
<li><strong>国際共同治験:</strong> 日中同時開発を効率的に実施するための規制・運用コンサルティング</li>
</ul>

<h2>グローバル事業（EPS創健）</h2>
<p>EPS創健はアジア太平洋地域全体でのプレゼンス拡大を推進しています。</p>
<ul>
<li>東南アジア諸国（韓国、台湾、シンガポール等）での臨床試験支援</li>
<li>2025年に香港法人がBioBeauteと資本業務提携を発表</li>
<li>アジア全域でのマルチリージョナル治験のコーディネーション</li>
</ul>

<h2>競合との比較：グローバル展開</h2>
<table>
<tr><th>企業</th><th>グローバル展開の特徴</th></tr>
<tr><td><strong>EPS</strong></td><td>中国・アジア特化型。日中間ブリッジが最大の武器</td></tr>
<tr><td>シミック</td><td>ブラックストーン提携で海外バイオベンチャー連携強化</td></tr>
<tr><td>IQVIA</td><td>100カ国以上で圧倒的なグローバルネットワーク</td></tr>
<tr><td>リニカル</td><td>25カ国以上に自社展開（日本発CROとしてユニーク）</td></tr>
<tr><td>エイツーヘルスケア</td><td>2024年に米ボストン進出（伊藤忠ネットワーク活用）</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">EPSの優位性</div>
EPSの中国展開は他の国内CROを大きくリードしています。中国での30年以上の実績、現地パートナーとの関係、日中バイリンガル人材の蓄積は、短期間では模倣できない競争優位です。
</div>
            `,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "EPSの中国事業を展開するグループ会社はどれですか？",
                    options: ["EPS創健", "EPS益新", "EPLink", "EPNextS"],
                    answer: 1,
                    explanation: "EPS益新が中国での医薬品開発受託事業を展開しています。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "中国の医薬品市場は世界で何位の規模ですか？",
                    options: ["第1位", "第2位", "第3位", "第5位"],
                    answer: 1,
                    explanation: "中国は米国に次ぐ世界第2位の医薬品市場です。"
                },
                {
                    id: "q203_3",
                    type: "choice",
                    question: "EPSの「日中ブリッジング」として正しくないものはどれですか？",
                    options: ["日本企業の中国市場参入支援", "中国バイオテック企業の日本市場参入支援", "中国での製造受託（CDMO）サービス", "日中同時開発の規制コンサルティング"],
                    answer: 2,
                    explanation: "EPSグループはCDMO（製造受託）事業は持っていません。CDMOは競合のシミックが持つ事業領域です。"
                },
                {
                    id: "q203_4",
                    type: "fill",
                    question: "中国の医薬品審査機関の略称は？（アルファベット4文字）",
                    answer: "NMPA",
                    explanation: "NMPA（National Medical Products Administration：国家薬品監督管理局）は中国の医薬品審査機関です。"
                }
            ]
        },
        {
            id: 204,
            title: "財務構造と収益モデル",
            duration: "10分",
            content: `
<h2>EPSグループの収益構造</h2>
<p>EPSグループの収益は、主に<strong>CRO事業</strong>を中心に、SMO事業、CSO事業、グローバル事業で構成されています。</p>

<h3>セグメント別売上構成（2023年9月期推定）</h3>
<table>
<tr><th>セグメント</th><th>売上高（推定）</th><th>構成比</th></tr>
<tr><td><strong>CRO事業</strong></td><td>約391億円</td><td>約59%</td></tr>
<tr><td>SMO事業</td><td>約80億円</td><td>約12%</td></tr>
<tr><td>CSO事業</td><td>約70億円</td><td>約10%</td></tr>
<tr><td>中国・グローバル事業</td><td>約126億円</td><td>約19%</td></tr>
<tr><td><strong>合計</strong></td><td><strong>約666.89億円</strong></td><td><strong>100%</strong></td></tr>
</table>

<h2>CRO事業の収益モデル</h2>
<p>CRO事業の収益モデルは主に以下の形態があります：</p>

<h3>1. プロジェクトベース型（固定費型）</h3>
<p>治験プロジェクト全体を一括で受託し、<strong>固定価格</strong>でサービスを提供するモデルです。</p>
<ul>
<li>プロジェクトの範囲と工数を事前に見積もり</li>
<li>マイルストーンごとに請求</li>
<li>効率化による利益率向上の余地あり</li>
</ul>

<h3>2. FTE（フルタイム換算）型</h3>
<p>CRA等の人材を<strong>工数ベース</strong>で提供するモデルです。</p>
<ul>
<li>人材単価 × 稼働時間で課金</li>
<li>安定的な収益だが利益率は低め</li>
<li>人材の稼働率管理が重要</li>
</ul>

<h3>3. ファンクショナルサービス</h3>
<p>データマネジメント、統計解析など<strong>特定機能だけ</strong>を受託するモデルです。</p>

<div class="info-box formula">
<div class="info-box-title">CROの利益率に影響する要因</div>
<ul>
<li><strong>人材稼働率:</strong> CRA等の稼働率が利益に直結</li>
<li><strong>プロジェクトミックス:</strong> 高付加価値案件の比率</li>
<li><strong>受注残高（バックログ）:</strong> 将来の売上見通し</li>
<li><strong>人材採用コスト:</strong> 業界全体で人材不足が深刻化</li>
</ul>
</div>

<h2>MBO後の財務状況</h2>
<p>2021年のMBO以降、EPSの詳細な財務データは非公開となっていますが、以下の点が推測されます：</p>
<ul>
<li>MBOに伴う借入金の返済負担</li>
<li>FUMIDASU2027に基づく成長投資の加速</li>
<li>IPO（再上場）を見据えた収益性改善への取り組み</li>
</ul>
            `,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "EPSグループの売上で最も大きな割合を占めるセグメントはどれですか？",
                    options: ["SMO事業", "CRO事業", "CSO事業", "中国・グローバル事業"],
                    answer: 1,
                    explanation: "CRO事業が約391億円で全体の約59%を占め、最大のセグメントです。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "CROの収益モデルで、治験プロジェクト全体を固定価格で受託するモデルは？",
                    options: ["FTE型", "プロジェクトベース型", "ファンクショナルサービス型", "成功報酬型"],
                    answer: 1,
                    explanation: "プロジェクトベース型（固定費型）は治験プロジェクト全体を一括で受託し、固定価格でサービスを提供するモデルです。"
                },
                {
                    id: "q204_3",
                    type: "fill",
                    question: "CRO事業の利益率に最も直結する指標は、CRA等の何率ですか？",
                    answer: "稼働率",
                    explanation: "CRA等の稼働率がCRO事業の利益に直結します。プロジェクト間のギャップを最小化することが重要です。"
                }
            ]
        }
    ]
};
