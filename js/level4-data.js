/* ============================================
   Level 4: 競合分析
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "主要競合の分析",
    icon: "⚔️",
    description: "EPSの主要競合企業を徹底分析し、ポジショニングの違いを理解する",
    modules: [
        {
            id: 401,
            title: "シミック（CMIC）グループ",
            duration: "12分",
            content: `
<h2>シミックグループの概要</h2>
<p>シミック（CMIC）は<strong>日本で最初に設立されたCRO</strong>であり、EPSの最大の国内ライバルです。</p>

<div class="info-box tip">
<div class="info-box-title">基本情報</div>
<ul>
<li><strong>設立:</strong> 1992年（日本初のCRO）</li>
<li><strong>連結売上高:</strong> 約690億円（約1,047億円の報告もあり。セグメント定義により差異）</li>
<li><strong>従業員数:</strong> 約7,811名</li>
<li><strong>上場状態:</strong> 2024年3月にプライム市場上場廃止</li>
<li><strong>受賞:</strong> サイトライン・ジャパン・アワード2024「BEST CRO賞」</li>
</ul>
</div>

<h2>シミックの事業構造（4本柱）</h2>
<table>
<tr><th>事業</th><th>内容</th><th>EPSとの比較</th></tr>
<tr><td><strong>CRO</strong></td><td>モニタリング、DM、コンサルティング</td><td>両社とも保有</td></tr>
<tr><td><strong>CDMO</strong></td><td>医薬品受託製造（国内4工場）</td><td>★ EPSにはない領域</td></tr>
<tr><td><strong>CSO</strong></td><td>MR派遣、マーケティング支援</td><td>両社とも保有</td></tr>
<tr><td><strong>ヘルスケア</strong></td><td>健康関連サービス</td><td>両社とも一部保有</td></tr>
</table>

<h2>シミック vs EPS：徹底比較</h2>

<div class="compare-grid">
<div class="compare-card">
<h4>シミックの強み</h4>
<ul>
<li><strong>CDMO（製造受託）</strong>を持つ唯一の国内大手CRO</li>
<li>日本初のCROとしてのブランド力と実績</li>
<li>日本の新薬開発の80%以上に関与と主張</li>
<li>国内36オフィス、4製造工場、7ラボ</li>
<li>ブラックストーンの資本で国際展開を加速</li>
</ul>
</div>
<div class="compare-card">
<h4>EPSの強み</h4>
<ul>
<li><strong>SMO事業（EPLink）</strong>による施設支援</li>
<li><strong>中国・アジア展開</strong>が圧倒的に先行</li>
<li>CRO+SMO+CSOの三位一体モデル</li>
<li>再生医療の包括支援能力</li>
<li>日中ブリッジングの独自ポジション</li>
</ul>
</div>
</div>

<h2>ブラックストーン提携の影響</h2>
<p>2025年3月、<strong>米ブラックストーンがシミック株式60%を取得</strong>することで合意しました。これはEPSにとって重要な競争環境の変化です。</p>

<h3>シミックにとっての意義</h3>
<ul>
<li><strong>資本力の大幅強化:</strong> ブラックストーンの巨大な資金力を活用</li>
<li><strong>グローバルネットワーク:</strong> ブラックストーンの投資先企業との連携</li>
<li><strong>海外バイオベンチャーとの接点:</strong> ブラックストーンが投資する海外バイオ企業からのCRO受注期待</li>
<li><strong>将来的な再上場（IPO）</strong>を視野に入れた成長戦略</li>
</ul>

<div class="info-box danger">
<div class="info-box-title">EPSへの脅威</div>
シミックがブラックストーンの支援でグローバル展開を加速すると、EPSの「アジア展開」という差別化要因が相対的に弱まる可能性があります。EPSも中期計画FUMIDASU2027でグローバル成長を加速させる必要があります。
</div>
            `,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "シミックが日本のCRO業界で持つ「初」の実績はどれですか？",
                    options: ["初の上場CRO", "初のCRO企業", "初のグローバルCRO", "初のSMO企業"],
                    answer: 1,
                    explanation: "シミックは1992年に設立された日本初のCRO企業です。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "シミックが持ちEPSが持たない事業領域はどれですか？",
                    options: ["SMO事業", "CSO事業", "CDMO事業", "中国事業"],
                    answer: 2,
                    explanation: "CDMO（医薬品受託開発製造）はシミックが持ちEPSが持たない事業領域です。シミックは国内に4つの製造工場を持っています。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "2025年にシミック株式60%を取得する米投資会社はどれですか？",
                    options: ["KKR", "カーライル", "ブラックストーン", "ベインキャピタル"],
                    answer: 2,
                    explanation: "2025年3月に米ブラックストーンがシミック株式60%取得で合意しました。"
                }
            ]
        },
        {
            id: 402,
            title: "IQVIA：データの巨人",
            duration: "12分",
            content: `
<h2>IQVIAの概要</h2>
<p>IQVIA（旧IMS Health + Quintiles）は<strong>世界最大のCRO</strong>であり、日本でもトップクラスのプレゼンスを持つ巨大企業です。</p>

<div class="info-box tip">
<div class="info-box-title">基本情報</div>
<ul>
<li><strong>設立:</strong> 1998年（前身は1964年〜）</li>
<li><strong>グローバル売上高:</strong> 約154億ドル（約2.3兆円）</li>
<li><strong>グローバル従業員:</strong> 約88,000人、約100カ国で活動</li>
<li><strong>日本従業員:</strong> 約5,367名</li>
<li><strong>日本拠点:</strong> 東京、大阪、神戸、福岡</li>
<li><strong>R&DS受注残高:</strong> 311億ドル（2024年12月時点）</li>
</ul>
</div>

<h2>IQVIAの事業セグメント</h2>
<table>
<tr><th>セグメント</th><th>内容</th><th>2024年売上</th></tr>
<tr><td><strong>R&D Solutions</strong></td><td>CRO事業（臨床開発受託）</td><td>約85億ドル</td></tr>
<tr><td><strong>Technology & Analytics</strong></td><td>医薬品市場データ、分析ツール</td><td>—</td></tr>
<tr><td><strong>Contract Sales & Medical</strong></td><td>CSO・メディカル支援</td><td>—</td></tr>
</table>

<h2>IQVIAの圧倒的な強み</h2>

<h3>1. データ資産</h3>
<p>IQVIAの最大の武器は<strong>旧IMS Health時代から蓄積した医薬品市場データ</strong>です。</p>
<ul>
<li>世界の医薬品処方データの大部分をカバー</li>
<li>リアルワールドデータ（RWD）の世界最大級のデータベース</li>
<li>世界トップ100製薬製品のうち<strong>98製品</strong>をサポート</li>
</ul>

<h3>2. テクノロジープラットフォーム</h3>
<p><strong>IQVIA COREプラットフォーム</strong>により、試験設計、患者リクルーティング、データ駆動型の治験最適化を提供。</p>

<h3>3. グローバルスケール</h3>
<p>約100カ国に拠点を持ち、国際共同治験の実施能力で他の追随を許さないスケール。</p>

<h2>IQVIA vs EPS</h2>

<div class="compare-grid">
<div class="compare-card">
<h4>IQVIAが圧倒的に優位な点</h4>
<ul>
<li>データ・アナリティクス能力</li>
<li>グローバル治験の運営能力</li>
<li>テクノロジーへの投資規模</li>
<li>RWE（リアルワールドエビデンス）</li>
<li>売上規模（約35倍の差）</li>
</ul>
</div>
<div class="compare-card">
<h4>EPSが差別化できる点</h4>
<ul>
<li>国内密着型のサービス品質</li>
<li>SMO・CSOとの一体運営</li>
<li>中国・アジア特化の展開</li>
<li>日本語でのきめ細かな対応</li>
<li>コスト競争力（人件費面）</li>
</ul>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">EPSにとっての最大の脅威</div>
IQVIAのデータ・テクノロジー優位性は年々拡大しています。CRO業界が「データ駆動型」に移行する中、EPSがテクノロジー投資で遅れると競争力を失うリスクがあります。特にRWDの活用とAI・デジタル基盤の構築がEPSの中長期的な課題です。
</div>
            `,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "IQVIAの最大の競争優位となっている資産はどれですか？",
                    options: ["製造設備", "医薬品市場データ", "特許ポートフォリオ", "MR人材プール"],
                    answer: 1,
                    explanation: "IQVIAの最大の武器は旧IMS Health時代から蓄積した医薬品市場データ（RWD）です。世界トップ100製薬製品のうち98製品をサポートしています。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "IQVIAの2024年R&DS（CRO）受注残高はどのくらいですか？",
                    options: ["約50億ドル", "約150億ドル", "約311億ドル", "約500億ドル"],
                    answer: 2,
                    explanation: "IQVIAのR&DS受注残高は311億ドル（2024年12月時点）で、将来の安定的な収益を示しています。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "IQVIAがEPSの約何倍の売上規模を持っていますか？",
                    options: ["約5倍", "約15倍", "約35倍", "約50倍"],
                    answer: 2,
                    explanation: "IQVIAの売上高は約154億ドル（約2.3兆円）で、EPS（約666億円）の約35倍の規模があります。"
                }
            ]
        },
        {
            id: 403,
            title: "準大手競合の比較",
            duration: "15分",
            content: `
<h2>主要な準大手CRO企業</h2>
<p>シミック・IQVIAに次ぐ準大手CROも、それぞれ独自の強みを持ちEPSと競合しています。</p>

<h3>新日本科学PPD（Thermo Fisher系）</h3>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>設立</td><td>2015年（PPDと新日本科学のJV）</td></tr>
<tr><td>売上高</td><td>約187億円（2023年12月期）</td></tr>
<tr><td>従業員数</td><td>1,061名</td></tr>
<tr><td>強み</td><td>PPDのグローバル治験プラットフォーム、前臨床〜臨床一貫</td></tr>
<tr><td>受賞</td><td>2024年DIA CRO Leadership Award</td></tr>
</table>

<h3>パレクセル・インターナショナル</h3>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>本社</td><td>米国ボストン</td></tr>
<tr><td>グローバル従業員</td><td>21,000人超（アジア太平洋で8,800人超）</td></tr>
<tr><td>強み</td><td>薬事コンサルティング、グローバル申請支援の老舗</td></tr>
<tr><td>受賞</td><td>2024年Asia-Pacific Top CRO</td></tr>
</table>

<h3>エイツーヘルスケア（伊藤忠系）</h3>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>親会社</td><td>伊藤忠商事</td></tr>
<tr><td>強み</td><td>eClinical/電子申請分野で業界トップクラス</td></tr>
<tr><td>データ資産</td><td>97,000の日本臨床サイトから8,400万患者レコード</td></tr>
<tr><td>展開</td><td>2024年に米ボストン支店設立</td></tr>
<tr><td>実績</td><td>スケジュール内登録コンプライアンス率96%</td></tr>
</table>

<h3>エムスリーグループ（MPI）</h3>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>CRO会社</td><td>メディサイエンスプラニング（MPI）</td></tr>
<tr><td>設立</td><td>1982年（日本最古のCROの一つ）</td></tr>
<tr><td>強み</td><td>m3.comの600万人以上の医師ネットワーク</td></tr>
<tr><td>SMO会社</td><td>ノイエス（提携施設約800施設）</td></tr>
<tr><td>グローバル比率</td><td>グローバル案件の受託率50%超</td></tr>
</table>

<h3>リニカル</h3>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>設立</td><td>2005年</td></tr>
<tr><td>売上高</td><td>約104億円（2025年3月期）</td></tr>
<tr><td>上場</td><td>東証グロース市場（2183）</td></tr>
<tr><td>展開</td><td>25カ国以上に自社展開</td></tr>
<tr><td>強み</td><td>日本発グローバルCRO、オンコロジー特化</td></tr>
<tr><td>課題</td><td>営業損益6.5億円の赤字（2025年3月期）</td></tr>
</table>

<h2>得意領域マップ</h2>
<table>
<tr><th>企業</th><th>CRO</th><th>SMO</th><th>CSO</th><th>CDMO</th><th>データ/IT</th><th>その他</th></tr>
<tr><td><strong>EPS</strong></td><td>○</td><td>○</td><td>○</td><td>—</td><td>△</td><td>中国事業</td></tr>
<tr><td>シミック</td><td>○</td><td>△</td><td>○</td><td><strong>○</strong></td><td>△</td><td>ヘルスケア</td></tr>
<tr><td>IQVIA</td><td>○</td><td>—</td><td>—</td><td>—</td><td><strong>○</strong></td><td>市場データ</td></tr>
<tr><td>エムスリー</td><td>○</td><td><strong>○</strong></td><td>—</td><td>—</td><td>△</td><td>医師PF</td></tr>
<tr><td>A2ヘルスケア</td><td>○</td><td>—</td><td>—</td><td>—</td><td>○</td><td>eClinical</td></tr>
<tr><td>リニカル</td><td>○</td><td>—</td><td>—</td><td>—</td><td>—</td><td>創薬支援</td></tr>
<tr><td>パレクセル</td><td>○</td><td>—</td><td>—</td><td>—</td><td>△</td><td>薬事コンサル</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">EPSの競争上のポジション</div>
EPSはCRO・SMO・CSOの三位一体と中国・アジア展開を武器に、<strong>総合力</strong>で競合と差別化しています。個別機能では各競合に優位性を持つ企業がありますが、総合的なサービス提供能力と地域カバレッジではEPSが独自のポジションを確立しています。
</div>
            `,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "エイツーヘルスケアの親会社はどれですか？",
                    options: ["三菱商事", "伊藤忠商事", "住友商事", "丸紅"],
                    answer: 1,
                    explanation: "エイツーヘルスケアは伊藤忠商事傘下のCROです。伊藤忠の商社ネットワークを活用した海外展開を進めています。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "エムスリーグループのCRO事業の独自の強みはどれですか？",
                    options: ["CDMO設備", "600万人以上の医師ネットワーク", "中国展開", "製造工場"],
                    answer: 1,
                    explanation: "エムスリーはm3.comの600万人以上の医師ネットワークを活用し、患者リクルーティングやサイト選定で独自の強みを持っています。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "リニカルの特徴として正しいものはどれですか？",
                    options: ["CDMO事業を持つ", "日本発のグローバルCROとして25カ国以上に展開", "中国市場に特化", "データアナリティクスが最大の強み"],
                    answer: 1,
                    explanation: "リニカルは2005年設立の比較的若い企業ですが、25カ国以上に自社展開する日本発のグローバルCROとしてユニークなポジションを確立しています。"
                },
                {
                    id: "q403_4",
                    type: "fill",
                    question: "PPDと新日本科学のジョイントベンチャーが設立されたのは何年ですか？（西暦4桁）",
                    answer: "2015",
                    explanation: "新日本科学PPDは2015年に設立されたPPD（現Thermo Fisher傘下）と新日本科学のジョイントベンチャーです。"
                }
            ]
        },
        {
            id: 404,
            title: "競合ポジショニングの総合比較",
            duration: "10分",
            content: `
<h2>競争力の5軸比較</h2>
<p>CRO業界の競争力を<strong>5つの軸</strong>で分析し、各社のポジショニングを比較します。</p>

<h3>評価軸と各社の位置づけ</h3>
<table>
<tr><th>評価軸</th><th>EPS</th><th>シミック</th><th>IQVIA</th><th>A2</th><th>リニカル</th></tr>
<tr><td>国内規模</td><td>★★★★</td><td>★★★★★</td><td>★★★★</td><td>★★★</td><td>★★</td></tr>
<tr><td>グローバル展開</td><td>★★★</td><td>★★★</td><td>★★★★★</td><td>★★</td><td>★★★★</td></tr>
<tr><td>テクノロジー/データ</td><td>★★</td><td>★★★</td><td>★★★★★</td><td>★★★★</td><td>★★</td></tr>
<tr><td>事業多角化</td><td>★★★★★</td><td>★★★★★</td><td>★★★</td><td>★★</td><td>★★</td></tr>
<tr><td>アジア展開</td><td>★★★★★</td><td>★★★</td><td>★★★★</td><td>★★</td><td>★★★</td></tr>
</table>

<h2>構造的な競争ダイナミクス</h2>

<h3>国内限定治験 vs 国際共同治験</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>国内限定治験</h4>
<p><strong>日本のCRO（EPS、シミック）が有利</strong></p>
<ul>
<li>低コスト構造</li>
<li>日本語能力と文化理解</li>
<li>深い現地の医療機関ネットワーク</li>
<li>PMDA対応のノウハウ</li>
</ul>
</div>
<div class="compare-card">
<h4>国際共同治験</h4>
<p><strong>グローバルCRO（IQVIA、ICON等）が有利</strong></p>
<ul>
<li>多国間の実施能力</li>
<li>統一されたテクノロジー基盤</li>
<li>グローバル規制への対応力</li>
<li>製薬企業の戦略的パートナー志向</li>
</ul>
</div>
</div>

<h2>EPSの競争戦略の方向性</h2>
<p>EPSが持続的な競争優位を築くための戦略的方向性：</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>アジア・ゲートウェイ戦略の深化</strong>
中国・アジア展開を一層強化し、「日本+アジア」のマルチリージョナル治験でグローバルCROとの差別化を図る。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>テクノロジー投資の加速</strong>
データマネジメント力を活かしたデジタル基盤の構築。AI・RWD活用への投資強化。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>三位一体モデルの進化</strong>
CRO+SMO+CSOの統合運営をさらに深化させ、顧客に対するワンストップサービスの価値を最大化。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>先端領域への特化</strong>
再生医療、細胞/遺伝子治療など、成長が見込まれる先端領域での専門性を強化。
</div>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">EPSの課題まとめ</div>
<ol>
<li><strong>シミックのブラックストーン提携</strong>による競争激化</li>
<li><strong>IQVIAのデータ/テクノロジー優位</strong>との差の拡大リスク</li>
<li><strong>MBO後の情報開示制限</strong>による透明性の課題</li>
<li><strong>人材獲得競争</strong>（CRA不足、外資系との争奪戦）</li>
<li><strong>テクノロジー投資の遅れ</strong>は将来の競争力に直結</li>
</ol>
</div>
            `,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "EPSが5軸評価で最も高い評価を得ている領域はどれですか？",
                    options: ["国内規模", "テクノロジー/データ", "事業多角化とアジア展開", "グローバル展開"],
                    answer: 2,
                    explanation: "EPSは事業多角化（CRO+SMO+CSO三位一体）とアジア展開の2軸で★5の最高評価を得ています。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "国際共同治験で有利なのはどのタイプのCROですか？",
                    options: ["国内CRO", "グローバルCRO", "SMO", "CDMO"],
                    answer: 1,
                    explanation: "国際共同治験では多国間の実施能力を持つグローバルCRO（IQVIA、ICON等）が構造的に有利です。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "EPSの競争戦略として挙げられていないのはどれですか？",
                    options: ["アジア・ゲートウェイ戦略の深化", "CDMO事業への参入", "テクノロジー投資の加速", "先端領域への特化"],
                    answer: 1,
                    explanation: "CDMO事業への参入はEPSの競争戦略として挙げられていません。EPSの戦略はアジア展開、テクノロジー投資、三位一体深化、先端領域特化です。"
                }
            ]
        }
    ]
};
