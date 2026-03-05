/* ============================================
   Level 3: CRO業界の全体像
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "CRO業界の全体像",
    icon: "🏭",
    description: "日本とグローバルのCRO業界構造、市場規模、主要トレンドを理解する",
    modules: [
        {
            id: 301,
            title: "日本CRO市場の構造",
            duration: "12分",
            content: `
<h2>日本CRO市場の規模</h2>
<p>日本のCRO市場は着実に成長を続けてきましたが、近年は調整局面にも入りつつあります。</p>

<table>
<tr><th>年度</th><th>総売上高（CRO協会会員企業）</th><th>前年比</th></tr>
<tr><td>2018年</td><td>約2,000億円</td><td>—</td></tr>
<tr><td>2023年</td><td><strong>2,537億円</strong></td><td>+4.9%</td></tr>
<tr><td>2024年</td><td><strong>約2,300億円</strong></td><td>-9.3%</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">市場動向</div>
2023年に過去最高の2,537億円を記録した後、2024年は約9.3%の減少。ただし中長期的には、グローバルCROサービス市場は2025〜2034年にかけてCAGR 7.6%で成長が見込まれ、日本国内市場も2030年には約1.1兆円規模に拡大すると予測されています。
</div>

<h2>業界の3層構造</h2>
<p>日本のCRO業界は、大きく<strong>3つの層</strong>に分類できます。</p>

<h3>第1層：国内系大手（ビッグ3）</h3>
<table>
<tr><th>企業名</th><th>特徴</th><th>ポジション</th></tr>
<tr><td><strong>シミック（CMIC）</strong></td><td>日本初のCRO、CRO+CDMO</td><td>国内最大手</td></tr>
<tr><td><strong>イーピーエス（EPS）</strong></td><td>CRO+SMO+CSO三位一体</td><td>国内第2位</td></tr>
<tr><td><strong>IQVIAサービシーズジャパン</strong></td><td>世界最大CROの日本法人</td><td>データ・テクノロジー最強</td></tr>
</table>

<h3>第2層：準大手グループ（5〜6社）</h3>
<ul>
<li><strong>エイツーヘルスケア</strong>（伊藤忠系） — eClinicalに強い</li>
<li><strong>新日本科学PPD</strong>（Thermo Fisher系） — グローバル治験プラットフォーム</li>
<li><strong>パレクセル</strong> — 薬事コンサルティング老舗</li>
<li><strong>エムスリーグループ（MPI・メビックス・ノイエス）</strong> — 医師ネットワーク活用</li>
<li><strong>ICONクリニカルリサーチ</strong> — グローバル第2位CROの日本法人</li>
</ul>

<h3>第3層：中堅・専門特化型</h3>
<ul>
<li><strong>リニカル</strong> — 日本発グローバルCRO、オンコロジー特化</li>
<li><strong>Syneos Health</strong> — 臨床開発+商業化統合</li>
<li><strong>Fortrea Japan</strong> — LabCorpスピンオフ</li>
<li><strong>CAC Exicare</strong> — IT/テクノロジー系CRO</li>
<li>その他中小CRO</li>
</ul>

<h2>市場の構造的特徴</h2>
<ul>
<li><strong>モニタリングが市場の55%</strong>を占め、データマネジメントが16%</li>
<li>Phase I〜III治験が全体の58%、市販後調査（PMS）が11%</li>
<li><strong>国際共同治験の比率が51%</strong>を超え、年々増加傾向</li>
<li>約50社のCROが日本で活動</li>
<li>治験実施施設の約70%がSMOを利用</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">構造的課題</div>
国際共同治験（全体の51%以上）では、多国間の実施能力を持つグローバルCRO（IQVIA、パレクセル、ICON、PPD）が自動的に選択される傾向があります。日本のCROが独自に多国間治験を実施することは困難で、これが国内CROの成長における構造的制約となっています。
</div>
            `,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "2023年の日本CRO協会会員企業の総売上高はいくらでしたか？",
                    options: ["約1,800億円", "約2,000億円", "約2,537億円", "約3,000億円"],
                    answer: 2,
                    explanation: "2023年の日本CRO協会会員企業の総売上高は2,537億円で過去最高を記録しました。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "日本のCRO市場でモニタリング業務が占める割合は？",
                    options: ["約30%", "約45%", "約55%", "約70%"],
                    answer: 2,
                    explanation: "モニタリングが市場の約55%を占め、CRO事業の中核的なサービスとなっています。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "日本のCRO業界で「第1層」に分類されないのはどれですか？",
                    options: ["シミック", "EPS", "リニカル", "IQVIA"],
                    answer: 2,
                    explanation: "リニカルは中堅・専門特化型（第3層）に分類されます。第1層はシミック、EPS、IQVIAの3社です。"
                },
                {
                    id: "q301_4",
                    type: "fill",
                    question: "日本の臨床試験で国際共同治験が占める割合は約何%を超えていますか？（数字のみ）",
                    answer: "51",
                    explanation: "国際共同治験の比率は51%を超え、年々増加傾向にあります。"
                }
            ]
        },
        {
            id: 302,
            title: "グローバルCRO市場",
            duration: "10分",
            content: `
<h2>グローバルCRO市場の規模</h2>
<p>グローバルのCROサービス市場は巨大な成長産業であり、今後も拡大が見込まれています。</p>

<div class="info-box formula">
<div class="info-box-title">市場規模予測</div>
<ul>
<li>2025年時点で約<strong>800億ドル（約12兆円）</strong>規模</li>
<li>2025〜2034年のCAGR（年平均成長率）: <strong>7.6%</strong></li>
<li>アウトソーシング比率は年々上昇し、製薬企業R&D費の50%以上がCROへ</li>
</ul>
</div>

<h2>グローバルCROトップ企業</h2>
<table>
<tr><th>順位</th><th>企業名</th><th>2024年売上高</th><th>従業員数</th></tr>
<tr><td>1</td><td><strong>IQVIA</strong></td><td>約154億ドル</td><td>約88,000人</td></tr>
<tr><td>2</td><td><strong>ICON plc</strong></td><td>約83億ドル</td><td>約41,900人</td></tr>
<tr><td>3</td><td><strong>PPD（Thermo Fisher）</strong></td><td>※親会社全体429億ドル</td><td>—</td></tr>
<tr><td>4</td><td><strong>パレクセル</strong></td><td>約38億ドル</td><td>約21,000人</td></tr>
<tr><td>5</td><td><strong>Fortrea</strong></td><td>約27億ドル</td><td>—</td></tr>
<tr><td>6</td><td><strong>Medpace</strong></td><td>約25億ドル</td><td>—</td></tr>
</table>

<h2>グローバルCROの統合トレンド</h2>
<p>グローバルCRO業界は<strong>大規模な統合・集約</strong>が進んでいます。</p>

<h3>主な大型M&A</h3>
<ul>
<li><strong>2021年:</strong> Thermo FisherがPPDを174億ドルで買収</li>
<li><strong>2021年:</strong> ICONがPRA Health Sciencesを約120億ドルで買収</li>
<li><strong>2023年:</strong> Syneos Healthが71億ドルで非公開化（PE3社による）</li>
<li><strong>2023年:</strong> FortreaがLabCorpからスピンオフ</li>
<li><strong>2025年:</strong> ブラックストーンがシミック株式60%取得で合意</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">統合の背景</div>
<ul>
<li>製薬企業はCROパートナーを絞り込む「戦略的パートナーシップ」を志向</li>
<li>規模の経済によるコスト競争力の確保</li>
<li>データ・テクノロジープラットフォームへの大型投資が必要</li>
<li>グローバルな臨床試験運営能力の確保</li>
</ul>
</div>

<h2>EPSのグローバルでのポジション</h2>
<p>EPSはグローバルCRO市場では中規模のプレイヤーですが、<strong>アジア（特に日中間）</strong>という特定のニッチで強い競争力を持っています。グローバルの巨大CROとの直接的な規模競争ではなく、地域特化と専門性で差別化する戦略です。</p>
            `,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "グローバルCRO市場で売上高トップの企業はどれですか？",
                    options: ["ICON plc", "IQVIA", "Parexel", "PPD"],
                    answer: 1,
                    explanation: "IQVIAが2024年売上高約154億ドルでグローバルCRO市場のトップ企業です。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "2021年にPPDを174億ドルで買収した企業はどれですか？",
                    options: ["IQVIA", "Thermo Fisher Scientific", "LabCorp", "Syneos Health"],
                    answer: 1,
                    explanation: "Thermo Fisher ScientificがPPDを174億ドルで買収し、CRO事業を大幅に強化しました。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "2025年にシミックの株式60%取得で合意した外資ファンドはどれですか？",
                    options: ["MBKパートナーズ", "ブラックストーン", "KKR", "カーライル"],
                    answer: 1,
                    explanation: "2025年3月、米ブラックストーンがシミック株式60%取得で合意しました。"
                }
            ]
        },
        {
            id: 303,
            title: "業界の主要トレンド",
            duration: "12分",
            content: `
<h2>CRO業界を変革する5つのトレンド</h2>

<h3>1. DCT（分散型臨床試験）の普及</h3>
<p>DCT（Decentralized Clinical Trial）は、患者が必ずしも医療機関に来院せずに治験に参加できる<strong>新しい臨床試験形態</strong>です。</p>
<ul>
<li><strong>リモートモニタリング:</strong> ウェアラブルデバイスやアプリで患者データを遠隔収集</li>
<li><strong>eConsent:</strong> 電子的なインフォームドコンセント</li>
<li><strong>DtP（Direct to Patient）:</strong> 治験薬を患者の自宅に直接配送</li>
<li><strong>普及状況:</strong> 2023年時点でCRO52社中15社（29%）がDCT実装済み</li>
</ul>

<h3>2. AI・デジタル技術の活用</h3>
<p>CRO業界は「モニター人数のスケール勝負」から「<strong>テクノロジーによるケイパビリティ勝負</strong>」へ移行しつつあります。</p>
<ul>
<li><strong>AIによる患者リクルーティング最適化</strong></li>
<li><strong>プロトコル設計の自動化・最適化</strong></li>
<li><strong>予測的サイト選定</strong>（どの施設が最も効率よく被験者を登録できるか予測）</li>
<li><strong>デジタルバイオマーカー</strong>の活用</li>
<li><strong>Thermo Fisher/PPDがOpenAIと提携</strong>し、生成AIの活用を加速</li>
</ul>

<h3>3. リアルワールドデータ（RWD）の利活用</h3>
<p>電子カルテ、レセプト、患者レジストリ等の<strong>実臨床データ</strong>を臨床試験に活用する動きが加速しています。</p>
<ul>
<li>対照群へのRWD活用（外部対照群）</li>
<li>規制当局もRWEの承認審査での活用を推進</li>
<li>IQVIAは「旧IMS」のデータ資産を武器に圧倒的優位</li>
</ul>

<h3>4. 規制環境の変化</h3>
<ul>
<li><strong>ICH-E6(R3) GCPガイドライン改訂:</strong> リスクベースドアプローチを中核に</li>
<li><strong>2025年薬機法改正:</strong> 創薬環境整備、安定供給強化</li>
<li><strong>ドラッグラグ/ドラッグロス対策:</strong> 治験エコシステム導入推進事業の開始</li>
<li><strong>日本人データ要件の見直し:</strong> 海外データの活用範囲拡大の可能性</li>
</ul>

<h3>5. 再生医療・細胞/遺伝子治療</h3>
<p>日本は再生医療分野で世界をリードする規制環境を持っています。</p>
<ul>
<li><strong>2014年PMD法:</strong> 条件付き・期限付き承認制度</li>
<li><strong>SAKIGAKE指定:</strong> 先駆け審査指定制度（画期的治療の加速開発）</li>
<li>日本で5つのCAR-T製品が上市済み</li>
<li>iPS細胞研究（山中伸弥教授）からの独自の幹細胞治療開発</li>
<li>EPSは再生医療の包括的な開発支援を提供する数少ないCROの一つ</li>
</ul>

<div class="info-box danger">
<div class="info-box-title">業界全体の課題：人材不足</div>
<ul>
<li>CRA数は2017年の7,165人から2022年の6,600人へ減少</li>
<li>MR数もピーク時から約25%減少</li>
<li>事業規模拡大と人材の母集団縮小という構造的ミスマッチ</li>
<li>CRAには薬剤師・看護師等の専門資格が求められ、参入障壁が高い</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "DCTの説明として正しいものはどれですか？",
                    options: ["データを集中管理する治験方式", "患者が来院せずに参加できる分散型臨床試験", "デジタル技術を使わない従来型治験", "大規模施設のみで行う集約型治験"],
                    answer: 1,
                    explanation: "DCT（Decentralized Clinical Trial）は患者が必ずしも医療機関に来院せずに治験に参加できる分散型臨床試験です。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "CRO業界のビジネスモデル変化として正しいのはどれですか？",
                    options: ["テクノロジー勝負からモニター人数勝負へ", "モニター人数勝負からテクノロジー勝負へ", "国内特化から地域特化へ", "大規模化から分散化へ"],
                    answer: 1,
                    explanation: "PwC Strategy&は「モニター数のスケール勝負」から「デジタルテクノロジーによるケイパビリティ勝負」へビジネスモデルが変化すると予測しています。"
                },
                {
                    id: "q303_3",
                    type: "fill",
                    question: "電子カルテやレセプト等の実臨床データの略称は？（アルファベット3文字）",
                    answer: "RWD",
                    explanation: "RWD（Real World Data）は電子カルテ、レセプト、患者レジストリ等の実臨床データです。"
                },
                {
                    id: "q303_4",
                    type: "choice",
                    question: "日本のCRA数は2017年から2022年にかけてどう変化しましたか？",
                    options: ["7,165人→8,200人に増加", "7,165人→7,165人で横ばい", "7,165人→6,600人に減少", "7,165人→5,000人に半減"],
                    answer: 2,
                    explanation: "CRA数は2017年の7,165人から2022年の6,600人へ減少しています。業界全体で人材不足が深刻化しています。"
                }
            ]
        },
        {
            id: 304,
            title: "医薬品開発プロセスとCROの関わり",
            duration: "10分",
            content: `
<h2>新薬開発の全体プロセス</h2>
<p>新薬の開発には通常<strong>10〜15年の期間と数百億〜数千億円のコスト</strong>がかかります。CROは主にPhase I〜IV（臨床試験段階）で活躍しますが、近年はより幅広いフェーズで関与しています。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>基礎研究（2〜3年）</strong>
疾患メカニズムの解明と創薬ターゲットの同定。主に大学・研究機関・製薬企業の研究所で実施。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>前臨床試験（3〜5年）</strong>
動物実験等でヒトへの投与前に安全性・有効性を確認。薬物動態（ADME）、毒性試験など。CROの一部が非臨床試験サービスを提供。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>Phase I治験（1〜2年）</strong>
少数の健康志願者を対象に、安全性と薬物動態を調べる最初のヒト試験。用量漸増試験が中心。<strong>CROが大きく関与</strong>。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>Phase II治験（2〜3年）</strong>
少数の患者を対象に有効性と至適用量を探索。前期（IIa：Proof of Concept）と後期（IIb：用量設定）に分かれることが多い。<strong>CROが大きく関与</strong>。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>Phase III治験（2〜4年）</strong>
多数の患者を対象に既存薬やプラセボと比較する大規模な検証試験。承認申請の根拠となるピボタル試験。<strong>CROが最も大きく関与し、モニタリング需要が最大</strong>。
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<strong>承認申請・審査（1〜2年）</strong>
PMDA（日本）、FDA（米国）、EMA（欧州）等に承認申請。CROはCTD作成、照会事項対応を支援。
</div>
</div>
<div class="step">
<div class="step-num">7</div>
<div class="step-content">
<strong>Phase IV・市販後調査</strong>
承認後の安全性監視（ファーマコビジランス）と使用実態調査。CROのPV事業やCSO事業が関与。
</div>
</div>
</div>

<h2>CROが関与する主な業務</h2>
<table>
<tr><th>開発フェーズ</th><th>CROの主な業務</th></tr>
<tr><td>前臨床</td><td>非臨床試験受託、薬物動態解析</td></tr>
<tr><td>Phase I〜III</td><td>モニタリング、DM、統計解析、MW、薬事</td></tr>
<tr><td>承認申請</td><td>CTD作成、PMDA対面助言支援</td></tr>
<tr><td>Phase IV</td><td>PMS受託、ファーマコビジランス</td></tr>
<tr><td>販売支援</td><td>MR派遣、コールセンター（CSO）</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">EPSの強み</div>
EPSはこの全プロセスのうち、Phase I〜IVの臨床試験支援に加え、SMOによる施設支援、CSOによる販売支援まで、<strong>開発から販売までの広範囲</strong>をグループ内でカバーできます。
</div>
            `,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "CROのモニタリング需要が最も大きいのはどのフェーズですか？",
                    options: ["Phase I", "Phase II", "Phase III", "Phase IV"],
                    answer: 2,
                    explanation: "Phase IIIは多数の患者を対象とする大規模な検証試験であり、モニタリング需要が最も大きくなります。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "新薬開発にかかる期間はおおよそどのくらいですか？",
                    options: ["2〜3年", "5〜7年", "10〜15年", "20〜25年"],
                    answer: 2,
                    explanation: "新薬の開発には通常10〜15年の期間と数百億〜数千億円のコストがかかります。"
                },
                {
                    id: "q304_3",
                    type: "fill",
                    question: "日本の医薬品審査機関の略称は？（アルファベット4文字）",
                    answer: "PMDA",
                    explanation: "PMDA（独立行政法人 医薬品医療機器総合機構）は日本の医薬品・医療機器の審査機関です。"
                }
            ]
        }
    ]
};
