/* ============================================
   Level 1: EPSグループの全体像
   ============================================ */
const LEVEL1_DATA = {
    id: 1,
    title: "EPSグループの全体像",
    icon: "🏢",
    description: "EPSホールディングスの歴史、企業理念、グループ構造を理解する",
    modules: [
        {
            id: 101,
            title: "EPSホールディングスとは",
            duration: "12分",
            content: `
<h2>EPSホールディングスの概要</h2>
<p>EPSホールディングス株式会社は、<strong>日本最大級のCRO（医薬品開発業務受託機関）グループ</strong>です。1991年の設立以来、製薬企業の臨床開発を支援し、日本のCRO業界をリードしてきました。</p>

<div class="info-box tip">
<div class="info-box-title">基本情報</div>
<ul>
<li><strong>設立:</strong> 1991年5月</li>
<li><strong>本社:</strong> 東京都新宿区</li>
<li><strong>グループ従業員数:</strong> 約7,900名</li>
<li><strong>グループ売上高:</strong> 約666.89億円（2023年9月期）</li>
<li><strong>上場状態:</strong> 2021年にMBOにより東証上場廃止</li>
</ul>
</div>

<h2>CROとは何か</h2>
<p>CRO（Contract Research Organization）とは、<strong>製薬企業から医薬品の研究開発業務を受託する専門企業</strong>です。新薬の開発には10年以上の年月と数百億円〜数千億円のコストがかかりますが、CROはその中で特に臨床試験（治験）の計画・実施・データ管理を担います。</p>

<h3>なぜCROが必要なのか</h3>
<ul>
<li><strong>専門性:</strong> 治験には高度な規制知識と実務経験が必要</li>
<li><strong>効率性:</strong> 自社で全てを行うより、専門会社に委託する方が効率的</li>
<li><strong>コスト:</strong> 固定費を変動費化でき、開発コストを最適化できる</li>
<li><strong>グローバル対応:</strong> 国際共同治験の実施には各国の規制・医療慣行への精通が必要</li>
</ul>

<h2>EPSの企業理念</h2>
<p>EPSグループは「<strong>ヘルスケアの明日を創る</strong>」をビジョンに掲げ、医薬品開発の支援を通じて人々の健康と福祉に貢献することを目指しています。</p>

<div class="info-box success">
<div class="info-box-title">EPSの3つの強み</div>
<ol>
<li><strong>CRO・SMO・CSOの三位一体:</strong> 開発から販売支援まで一貫サービスを提供</li>
<li><strong>アジア（特に中国）展開:</strong> 日中間の架け橋として独自のポジションを確立</li>
<li><strong>オンコロジー（がん領域）の強さ:</strong> がん領域の治験で豊富な実績</li>
</ol>
</div>

<h2>MBO（経営陣買収）について</h2>
<p>2021年、EPSホールディングスは<strong>MBKパートナーズ</strong>によるMBO（Management Buyout）を実施し、東京証券取引所から上場廃止となりました。</p>

<h3>MBOの背景と目的</h3>
<ul>
<li>短期的な株主利益よりも、<strong>中長期的な事業変革</strong>を優先するため</li>
<li>デジタル化やグローバル展開への<strong>大規模投資</strong>を可能にするため</li>
<li>意思決定の<strong>迅速化</strong>と経営の柔軟性確保のため</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">注意点</div>
上場廃止後は詳細な財務情報の公開が限定的になっており、投資家・取引先への透明性が課題となっています。
</div>
            `,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "EPSホールディングスが設立されたのは何年ですか？",
                    options: ["1985年", "1991年", "1998年", "2001年"],
                    answer: 1,
                    explanation: "EPSホールディングスは1991年5月に設立されました。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "CROの正式名称として正しいものはどれですか？",
                    options: ["Clinical Research Organization", "Contract Research Organization", "Corporate Research Office", "Contract Regulatory Organization"],
                    answer: 1,
                    explanation: "CROはContract Research Organization（医薬品開発業務受託機関）の略称です。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "EPSが2021年にMBOを実施した主な目的は何ですか？",
                    options: ["負債を削減するため", "中長期的な事業変革への大規模投資を可能にするため", "海外企業に売却するため", "事業を縮小するため"],
                    answer: 1,
                    explanation: "MBOの主目的は、短期的な株主利益よりも中長期的な事業変革を優先し、デジタル化やグローバル展開への大規模投資を可能にすることでした。"
                },
                {
                    id: "q101_4",
                    type: "fill",
                    question: "EPSのMBOを実施した投資ファンドの名称は？（カタカナで）",
                    answer: "MBKパートナーズ",
                    explanation: "MBKパートナーズはアジア最大級のPEファンドで、EPSのMBOを主導しました。"
                }
            ]
        },
        {
            id: 102,
            title: "グループ企業構成",
            duration: "15分",
            content: `
<h2>EPSグループの構造</h2>
<p>EPSホールディングスは<strong>持株会社</strong>として、複数の事業会社を傘下に置いています。各事業会社が専門分野で高い競争力を発揮し、グループ全体でヘルスケア業界に総合的なサービスを提供しています。</p>

<div class="visual-box">
<div class="visual-box-title">EPSグループ構造図</div>
<div style="font-size:0.85rem;text-align:left;max-width:500px;margin:0 auto;">
<p style="text-align:center;font-weight:700;font-size:1.1rem;margin-bottom:16px;">EPSホールディングス（持株会社）</p>
<table>
<tr><th>事業領域</th><th>主要グループ会社</th></tr>
<tr><td>CRO事業</td><td>イーピーエス、EPNextS</td></tr>
<tr><td>SMO事業</td><td>EPLink</td></tr>
<tr><td>CSO事業</td><td>EPファーマライン</td></tr>
<tr><td>中国事業</td><td>EPS益新（益新グループ）</td></tr>
<tr><td>グローバル事業</td><td>EPS創健</td></tr>
<tr><td>その他</td><td>EPSデジタルシェア 他</td></tr>
</table>
</div>
</div>

<h2>主要グループ会社の詳細</h2>

<h3>イーピーエス株式会社（CRO中核）</h3>
<p>グループのCRO事業の中核を担う会社です。臨床開発のモニタリング、データマネジメント、統計解析、メディカルライティング、薬事申請支援など、<strong>臨床試験に関わるフルサービス</strong>を提供しています。</p>
<ul>
<li>国内トップクラスのCRA（臨床開発モニター）数</li>
<li>オンコロジー（がん）、中枢神経、免疫・アレルギーなど幅広い疾患領域</li>
<li>2024年に医療機器開発支援事業を吸収し、対応範囲を拡大</li>
</ul>

<h3>EPLink（SMO事業）</h3>
<p><strong>治験施設支援機関</strong>として、全国の医療機関における治験の実施を支援します。</p>
<ul>
<li>CRC（治験コーディネーター）の派遣・配置</li>
<li>治験実施医療機関のネットワーク構築</li>
<li>被験者のスクリーニングとリクルーティング支援</li>
</ul>

<h3>EPファーマライン（CSO事業）</h3>
<p><strong>医薬品販売支援事業</strong>を担い、製薬企業のマーケティング・営業活動を支援します。</p>
<ul>
<li>コントラクトMR（医薬情報担当者）の派遣</li>
<li>メディカルコールセンターの運営</li>
<li>学術情報サービス（DI・メディカルインフォメーション）</li>
</ul>

<h3>EPS益新（中国事業）</h3>
<p>中国での医薬品開発受託を展開する事業体で、EPSグループの<strong>最大の差別化要因</strong>の一つです。</p>
<ul>
<li>中国国内に15社以上のグループ企業を展開</li>
<li>日中間の新薬開発ブリッジング支援</li>
<li>中国NMPA（薬品監督管理局）への薬事申請支援</li>
</ul>

<h3>EPS創健（グローバル事業）</h3>
<p>アジア太平洋地域を中心とした<strong>グローバル展開</strong>を推進する事業体です。</p>
<ul>
<li>2025年に香港法人がBioBeauteと資本業務提携</li>
<li>東南アジア諸国での臨床試験支援</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
EPSグループの最大の特徴は、CRO（開発受託）・SMO（施設支援）・CSO（販売支援）の<strong>三位一体</strong>で医薬品のライフサイクル全体をカバーできる点です。これは競合他社にはない独自の強みです。
</div>
            `,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "EPSグループのSMO事業を担う会社はどれですか？",
                    options: ["EPファーマライン", "EPLink", "EPS益新", "EPNextS"],
                    answer: 1,
                    explanation: "EPLinkがSMO（治験施設支援機関）事業を担っています。CRC派遣など医療機関での治験実施を支援します。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "EPSグループの中国事業を展開する主要会社はどれですか？",
                    options: ["EPLink", "EPファーマライン", "EPS益新", "EPS創健"],
                    answer: 2,
                    explanation: "EPS益新が中国での医薬品開発受託事業を展開しています。中国国内に15社以上のグループ企業を持ちます。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "EPSグループの三位一体モデルに含まれないのはどれですか？",
                    options: ["CRO（開発受託）", "SMO（施設支援）", "CDMO（製造受託）", "CSO（販売支援）"],
                    answer: 2,
                    explanation: "EPSの三位一体はCRO・SMO・CSOです。CDMO（製造受託）はEPSグループにはなく、競合のシミックが持つ事業領域です。"
                },
                {
                    id: "q102_4",
                    type: "fill",
                    question: "EPSグループでCSO事業（MR派遣・コールセンター運営等）を担う会社名は？",
                    answer: "EPファーマライン",
                    explanation: "EPファーマラインがコントラクトMR派遣やメディカルコールセンター運営などのCSO事業を担当しています。"
                }
            ]
        },
        {
            id: 103,
            title: "沿革と成長の軌跡",
            duration: "10分",
            content: `
<h2>EPSの歴史年表</h2>
<p>EPSグループは30年以上にわたり、日本のCRO業界の成長とともに発展してきました。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>1991年 - 創業</strong>
EPSホールディングス設立。データマネジメントを中心としたCRO事業を開始。日本のCRO業界黎明期からの参入。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>1990年代後半 - 事業拡大</strong>
臨床開発モニタリングサービスを本格化。SMO事業やCSO事業にも進出し、三位一体モデルの基盤を構築。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>2000年代 - 上場と中国展開</strong>
東京証券取引所に上場。中国市場への進出を開始し、EPS益新を設立。日中間の医薬品開発ブリッジングの先駆者に。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>2010年代 - 国内CRO最大手へ</strong>
M&Aやオーガニック成長により国内CRO最大手の地位を確立。グループ従業員数が急速に拡大。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>2021年 - MBO実施</strong>
MBKパートナーズによるMBOを実施し、東証上場を廃止。非公開化により中長期的な事業変革に注力する体制へ移行。
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<strong>2024年〜現在 - 新中期経営計画</strong>
「FUMIDASU2027」中期経営計画を策定。2027年にグループ売上高1,000億円を目標に掲げ、デジタル化とグローバル展開を加速。
</div>
</div>
</div>

<h2>FUMIDASU2027 中期経営計画</h2>
<p>EPSグループは2024年から新中期経営計画「<strong>FUMIDASU2027</strong>」を推進しています。</p>

<div class="info-box formula">
<div class="info-box-title">FUMIDASU2027の主要目標</div>
<ul>
<li><strong>売上目標:</strong> 2027年にグループ売上高1,000億円（現在の約666億円から約50%成長）</li>
<li><strong>デジタル変革:</strong> AI・データ活用による業務効率化と新サービス創出</li>
<li><strong>グローバル拡大:</strong> アジア太平洋地域でのプレゼンス強化</li>
<li><strong>人材投資:</strong> CRA・CRCの採用・育成強化</li>
</ul>
</div>

<h2>成長を支えた要因</h2>
<ul>
<li><strong>医薬品開発のアウトソーシング拡大:</strong> 製薬企業のR&Dコスト削減ニーズの高まり</li>
<li><strong>中国市場の成長:</strong> 中国の医薬品市場の急拡大に合わせた先行投資</li>
<li><strong>規制環境の変化:</strong> ICH（国際的な規制調和）の進展による国際共同治験の増加</li>
<li><strong>オンコロジー需要:</strong> がん治療薬の開発ブームによる治験数の増加</li>
</ul>
            `,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "EPSの中期経営計画「FUMIDASU2027」のグループ売上目標は？",
                    options: ["500億円", "800億円", "1,000億円", "1,500億円"],
                    answer: 2,
                    explanation: "FUMIDASU2027では2027年にグループ売上高1,000億円を目標に掲げています。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "EPSが東証から上場廃止となったのは何年ですか？",
                    options: ["2018年", "2019年", "2020年", "2021年"],
                    answer: 3,
                    explanation: "2021年にMBKパートナーズによるMBOを実施し、東京証券取引所から上場廃止となりました。"
                },
                {
                    id: "q103_3",
                    type: "fill",
                    question: "EPSの2023年9月期のグループ売上高は約何億円ですか？（数字のみ）",
                    answer: "666",
                    explanation: "EPSグループの2023年9月期の売上高は約666.89億円でした。"
                }
            ]
        },
        {
            id: 104,
            title: "CRO事業の詳細",
            duration: "15分",
            content: `
<h2>EPSのCRO事業サービス一覧</h2>
<p>EPSのCRO事業は、医薬品開発のあらゆるフェーズに対応する<strong>フルサービス型CRO</strong>です。</p>

<h3>1. 臨床開発モニタリング</h3>
<p>CRA（Clinical Research Associate：臨床開発モニター）が医療機関を訪問し、治験が<strong>GCP（Good Clinical Practice）</strong>に準拠して適正に実施されているかを確認します。</p>
<ul>
<li>治験実施施設の選定・契約支援</li>
<li>治験薬の供給管理</li>
<li>症例報告書（CRF）の確認</li>
<li>有害事象の報告・追跡</li>
<li>リスクベースドモニタリング（RBM）の導入</li>
</ul>

<h3>2. データマネジメント</h3>
<p>治験で収集されたデータの品質管理を行います。EPSの創業事業でもあり、<strong>長年の蓄積と高い品質</strong>が強みです。</p>
<ul>
<li>EDC（電子データ収集）システムの構築・運用</li>
<li>データバリデーション・クリーニング</li>
<li>コーディング（MedDRA、WHO-DD等）</li>
<li>データベースロック</li>
</ul>

<h3>3. 統計解析</h3>
<p>治験データを統計学的に分析し、医薬品の有効性・安全性を科学的に評価します。</p>
<ul>
<li>統計解析計画書（SAP）の作成</li>
<li>SASプログラミングによるデータ解析</li>
<li>解析結果の図表作成</li>
<li>中間解析・最終解析</li>
</ul>

<h3>4. メディカルライティング</h3>
<p>治験の結果を規制当局向けの文書にまとめます。</p>
<ul>
<li>治験総括報告書（CSR）の作成</li>
<li>CTD（Common Technical Document）モジュールの作成</li>
<li>論文・学会発表資料の作成支援</li>
</ul>

<h3>5. 薬事申請支援</h3>
<p>PMDA（医薬品医療機器総合機構）への承認申請をサポートします。</p>
<ul>
<li>CTD申請資料の作成</li>
<li>PMDA相談（対面助言等）の支援</li>
<li>照会事項への対応支援</li>
</ul>

<h3>6. ファーマコビジランス（安全性情報管理）</h3>
<p>医薬品の安全性情報を収集・評価・報告する業務です。</p>
<ul>
<li>有害事象の個別症例評価</li>
<li>定期報告書（PSUR/PBRER）の作成</li>
<li>シグナル検出・安全性評価</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">EPSのCRO事業の特徴</div>
EPSは特に<strong>オンコロジー（がん領域）</strong>の治験で国内トップクラスの実績を持ちます。近年は再生医療、細胞治療、遺伝子治療といった先端領域にも対応を拡大しています。また、2024年には医療機器の開発支援事業も統合し、医薬品と医療機器の両方に対応可能な体制を構築しました。
</div>

<h2>CROセグメントの売上規模</h2>
<p>EPSのCRO事業セグメントの売上高は<strong>約391億円</strong>（2023年9月期）で、グループ全体の売上の約6割を占めるコア事業です。</p>
            `,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "EPSの創業事業として特に長い歴史を持つサービスはどれですか？",
                    options: ["臨床開発モニタリング", "データマネジメント", "メディカルライティング", "ファーマコビジランス"],
                    answer: 1,
                    explanation: "EPSはデータマネジメントを中心としたCRO事業からスタートしました。創業事業としての長年の蓄積と高い品質が強みです。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "EPSのCROセグメント売上高はグループ全体の約何割を占めていますか？",
                    options: ["約3割", "約5割", "約6割", "約8割"],
                    answer: 2,
                    explanation: "CROセグメントの売上高は約391億円で、グループ全体（約666億円）の約6割を占めます。"
                },
                {
                    id: "q104_3",
                    type: "choice",
                    question: "EPSが特に強みを持つ疾患領域はどれですか？",
                    options: ["循環器領域", "オンコロジー（がん領域）", "精神科領域", "皮膚科領域"],
                    answer: 1,
                    explanation: "EPSはオンコロジー（がん領域）の治験で国内トップクラスの実績を持っています。"
                },
                {
                    id: "q104_4",
                    type: "fill",
                    question: "治験が適正に実施されているか監視する専門職の略称は？（アルファベット3文字）",
                    answer: "CRA",
                    explanation: "CRA（Clinical Research Associate：臨床開発モニター）が医療機関を訪問し、GCPに準拠した治験実施を確認します。"
                }
            ]
        }
    ]
};
