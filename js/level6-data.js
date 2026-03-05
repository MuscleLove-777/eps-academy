/* ============================================
   Level 6: 総合演習と戦略分析
   ============================================ */
const LEVEL6_DATA = {
    id: 6,
    title: "総合演習と戦略分析",
    icon: "🎓",
    description: "EPSとCRO業界の知識を統合し、戦略的思考力を養う",
    modules: [
        {
            id: 601,
            title: "SWOT分析で見るEPS",
            duration: "12分",
            content: `
<h2>EPSグループのSWOT分析</h2>
<p>これまで学んだ知識を統合し、EPSグループの<strong>SWOT分析</strong>（強み・弱み・機会・脅威）を整理します。</p>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #10b981;">
<h4 style="color:#10b981;">Strengths（強み）</h4>
<ul>
<li><strong>CRO+SMO+CSO三位一体</strong>モデルで開発から販売まで一貫支援</li>
<li><strong>国内CRO第2位</strong>の規模と実績</li>
<li><strong>中国・アジア展開</strong>で他の国内CROを圧倒</li>
<li>日中ブリッジングの<strong>30年以上の実績</strong></li>
<li><strong>オンコロジー</strong>を中心とした高い専門性</li>
<li><strong>再生医療</strong>の包括的支援能力</li>
<li>データマネジメントの<strong>創業以来の品質</strong></li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #ef4444;">
<h4 style="color:#ef4444;">Weaknesses（弱み）</h4>
<ul>
<li><strong>MBO後の情報開示制限</strong>（透明性の課題）</li>
<li>グローバルCROと比較した<strong>テクノロジー投資の遅れ</strong></li>
<li><strong>多国間治験</strong>を独自に実施する能力の制約</li>
<li>欧米市場での<strong>プレゼンスの弱さ</strong></li>
<li>MBOに伴う<strong>借入金負担</strong></li>
<li><strong>CDMO事業</strong>を持たない（シミックとの差別化ポイント）</li>
</ul>
</div>
</div>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #3b82f6;">
<h4 style="color:#3b82f6;">Opportunities（機会）</h4>
<ul>
<li><strong>中国バイオテック</strong>の日本市場参入支援の需要拡大</li>
<li><strong>再生医療・細胞/遺伝子治療</strong>市場の急成長</li>
<li><strong>ドラッグラグ解消政策</strong>による国際共同治験の増加</li>
<li><strong>DCT・AI</strong>の普及によるサービス革新</li>
<li><strong>FUMIDASU2027</strong>による成長投資の加速</li>
<li><strong>アジア全体</strong>の臨床試験市場の拡大</li>
<li>バイオテック企業の<strong>CRO全面依存</strong>ニーズの増加</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #f59e0b;">
<h4 style="color:#f59e0b;">Threats（脅威）</h4>
<ul>
<li><strong>シミック×ブラックストーン</strong>提携による国内競争激化</li>
<li><strong>IQVIA</strong>のデータ/テクノロジー優位の拡大</li>
<li>大手製薬の<strong>戦略的パートナーシップ</strong>集約化</li>
<li><strong>CRA・CRC人材</strong>の恒常的な不足</li>
<li>外資系CROとの<strong>人材争奪</strong>の激化</li>
<li>日本市場の<strong>薬価引き下げ</strong>による開発意欲低下</li>
<li><strong>地政学リスク</strong>（日中関係の変化が中国事業に影響）</li>
</ul>
</div>
</div>

<h2>SWOT分析から導かれる戦略的インプリケーション</h2>

<h3>SO戦略（強み×機会）</h3>
<p>「強みを活かして機会を掴む」戦略です。</p>
<ul>
<li>中国展開の強みを活かし、中国バイオテックの日本参入支援を拡大</li>
<li>三位一体モデルとオンコロジー専門性で、バイオテック企業をターゲットに受注拡大</li>
<li>再生医療支援能力を武器に、日本の先端治療開発のハブとなる</li>
</ul>

<h3>WO戦略（弱み×機会）</h3>
<p>「弱みを克服して機会を活かす」戦略です。</p>
<ul>
<li>FUMIDASU2027の投資でテクノロジー基盤を強化し、DCT・AIの波に乗る</li>
<li>IPO（再上場）を通じて情報開示を改善し、グローバルなプレゼンスを高める</li>
</ul>

<h3>ST戦略（強み×脅威）</h3>
<p>「強みで脅威を回避する」戦略です。</p>
<ul>
<li>中国展開とアジアゲートウェイ戦略で、シミック・IQVIAとの差別化を維持</li>
<li>三位一体モデルの独自性で、戦略的パートナーシップ集約化の影響を緩和</li>
</ul>

<h3>WT戦略（弱み×脅威）</h3>
<p>「弱みと脅威を最小化する」戦略です。</p>
<ul>
<li>人材育成・処遇改善で、外資系CROへの人材流出を防止</li>
<li>テクノロジー投資を加速し、IQVIA等との技術格差の拡大を阻止</li>
</ul>
            `,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "EPSのSWOT分析で「弱み」に該当しないのはどれですか？",
                    options: ["MBO後の情報開示制限", "中国・アジア展開力", "テクノロジー投資の遅れ", "CDMO事業を持たない"],
                    answer: 1,
                    explanation: "中国・アジア展開力はEPSの「強み」であり、他の国内CROを圧倒する差別化ポイントです。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "SO戦略（強み×機会）の例として最も適切なのはどれですか？",
                    options: ["テクノロジー基盤を強化してDCTに対応", "中国展開を活かし中国バイオテックの日本参入を支援", "人材育成で外資への流出を防止", "IPOで情報開示を改善"],
                    answer: 1,
                    explanation: "中国展開（強み）を活かして中国バイオテックの日本参入支援（機会）を拡大するのがSO戦略の代表例です。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "EPSにとっての地政学リスクとして挙げられているのは何ですか？",
                    options: ["米中対立による中国市場の影響", "日中関係の変化が中国事業に影響", "ロシア制裁の影響", "EU離脱の影響"],
                    answer: 1,
                    explanation: "EPSの中国事業は日中関係の変化に影響を受けるリスクがあり、地政学リスクとして認識されています。"
                }
            ]
        },
        {
            id: 602,
            title: "業界構造の総合理解",
            duration: "12分",
            content: `
<h2>CRO業界のバリューチェーン全体像</h2>
<p>ここまでの学習を総合し、CRO業界のバリューチェーンと各プレイヤーの関係性を整理します。</p>

<div class="visual-box">
<div class="visual-box-title">CRO業界のエコシステム</div>
<div style="text-align:left;max-width:600px;margin:0 auto;font-size:0.85rem;">
<p><strong>【顧客層】</strong></p>
<p>大手製薬企業（武田、アステラス等） → 戦略的パートナーCRO に委託</p>
<p>中堅製薬企業（小野、塩野義等） → 国内/グローバルCROを使い分け</p>
<p>バイオテック企業（ソーセイ等） → CROに全面的に依存</p>
<p>外資系製薬（ファイザー等） → 日本参入支援を国内CROに依頼</p>
<p style="margin-top:16px;"><strong>【CRO層】</strong></p>
<p>グローバルCRO（IQVIA、ICON等） → 国際共同治験を主導</p>
<p>国内大手CRO（EPS、シミック） → 国内治験＋アジア展開</p>
<p>専門特化CRO（リニカル等） → 特定領域で差別化</p>
<p style="margin-top:16px;"><strong>【支援層】</strong></p>
<p>SMO（EPLink、ノイエス等） → 医療機関の治験実施を支援</p>
<p>CSO（EPファーマライン等） → 販売・マーケティング支援</p>
<p>CDMO（シミック等） → 医薬品製造受託</p>
<p style="margin-top:16px;"><strong>【規制層】</strong></p>
<p>PMDA（日本） / FDA（米国） / NMPA（中国） / EMA（欧州）</p>
</div>
</div>

<h2>業界再編のキーファクター</h2>
<p>今後のCRO業界を動かす<strong>5つのキーファクター</strong>を理解しましょう。</p>

<h3>1. テクノロジーの進化</h3>
<p>AI、DCT、RWD、デジタルバイオマーカー等の技術革新が業界構造を変革。テクノロジーへの投資能力が競争力の鍵に。</p>

<h3>2. 資本の論理</h3>
<p>PE（プライベートエクイティ）ファンドによるCRO買収・統合が加速。シミック×ブラックストーン、EPS×MBKパートナーズ、Syneos Health×3PE連合など。</p>

<h3>3. 規制の調和と変化</h3>
<p>ICHによる国際的な規制調和が進む一方、各国独自の規制も存続。規制変化への対応力がCROの競争力を左右。</p>

<h3>4. 人材の確保と育成</h3>
<p>CRA数の減少トレンドの中、優秀な人材の確保・育成が業界全体の課題。特に専門領域（オンコロジー、再生医療等）の人材は希少。</p>

<h3>5. 地政学とサプライチェーン</h3>
<p>米中関係、ロシア制裁など地政学リスクが治験の実施地域選定に影響。サプライチェーンの多角化が進む。</p>

<h2>EPSの位置づけ：まとめ</h2>
<div class="info-box success">
<div class="info-box-title">EPSグループの総合評価</div>
<p>EPSホールディングスは、<strong>国内CRO第2位</strong>の規模を持ち、CRO+SMO+CSOの三位一体モデルと中国・アジア展開で独自のポジションを確立しています。FUMIDASU2027の下で売上1,000億円を目指す成長戦略を推進中ですが、シミック×ブラックストーンやIQVIAのテクノロジー優位など、競争環境は激化しています。</p>
<p>今後の鍵は、①テクノロジー投資の加速、②アジアゲートウェイ戦略の深化、③先端治療領域での専門性強化、④人材の確保・育成の4点です。</p>
</div>
            `,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "国際共同治験を主導するのは主にどのタイプのCROですか？",
                    options: ["国内大手CRO", "専門特化CRO", "グローバルCRO", "SMO"],
                    answer: 2,
                    explanation: "国際共同治験は多国間の実施能力を持つグローバルCRO（IQVIA、ICON等）が主導します。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "EPSとシミックに共通する最近のイベントはどれですか？",
                    options: ["ともにIPO（新規上場）を実施", "ともにPEファンドの資本を受け入れ", "ともにCDMO事業を開始", "ともにAI企業を買収"],
                    answer: 1,
                    explanation: "EPSはMBKパートナーズ（2021年MBO）、シミックはブラックストーン（2025年60%取得）と、ともにPEファンドの資本を受け入れています。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "FUMIDASU2027でEPSが目指す売上目標はいくらですか？",
                    options: ["500億円", "800億円", "1,000億円", "2,000億円"],
                    answer: 2,
                    explanation: "FUMIDASU2027では2027年にグループ売上高1,000億円を目標に掲げています。"
                }
            ]
        },
        {
            id: 603,
            title: "ケーススタディ：戦略的意思決定",
            duration: "15分",
            content: `
<h2>ケーススタディ演習</h2>
<p>ここではEPSの立場で戦略的意思決定を考える<strong>ケーススタディ</strong>に取り組みます。</p>

<h3>ケース1：中国バイオテックA社の日本参入支援</h3>
<div class="scenario-box">
<div class="scenario-box-title">シナリオ</div>
<p>中国のバイオテック企業A社は、がん免疫療法の新薬候補を持ち、日本での承認取得を目指しています。A社は日本の規制環境に不慣れで、日本語での対応も困難です。EPSに支援を依頼してきました。</p>

<h4>EPSが提供できるサービス</h4>
<ul>
<li class="good"><strong>EPS益新</strong>が中国側の窓口として対応（中国語・中国規制の知見）</li>
<li class="good"><strong>EPSのCRO</strong>が日本での治験計画・モニタリング・データ管理を実施</li>
<li class="good"><strong>EPLink</strong>が日本の医療機関での治験実施を支援</li>
<li class="good">PMDA対面助言の支援と承認申請サポート</li>
<li class="good">承認後は<strong>EPファーマライン</strong>が販売支援（MR派遣、コールセンター）</li>
</ul>
<p><strong>⇒ EPSの三位一体＋中国展開が最大限に活きるケース</strong></p>
</div>

<h3>ケース2：グローバル製薬企業B社のCROパートナー選定</h3>
<div class="scenario-box">
<div class="scenario-box-title">シナリオ</div>
<p>グローバル製薬企業B社は、20カ国で実施するPhase III国際共同治験のCROパートナーを選定中です。日本も参加国の一つです。EPSは提案に参加すべきでしょうか？</p>

<h4>分析</h4>
<ul>
<li class="bad"><strong>不利な点:</strong> EPSは20カ国をカバーする国際的なプラットフォームを持たない</li>
<li class="bad"><strong>不利な点:</strong> B社はCRO数を絞る「戦略的パートナー」モデルを志向</li>
<li class="good"><strong>有利な点:</strong> 日本＋アジア（中国、韓国、台湾等）パートだけの受託提案は可能</li>
<li class="good"><strong>有利な点:</strong> グローバルCROの下請け（サブCRO）として日本部分のみ受託する選択肢</li>
</ul>
<p><strong>⇒ 全体受託は困難だが、「日本＋アジア」パートの提案や、サブCRO参加は検討に値する</strong></p>
</div>

<h3>ケース3：再生医療スタートアップC社の支援</h3>
<div class="scenario-box">
<div class="scenario-box-title">シナリオ</div>
<p>日本の大学発スタートアップC社は、iPS細胞由来の再生医療等製品の臨床開発を計画しています。条件・期限付き承認の取得を目指していますが、臨床開発の経験がゼロです。</p>

<h4>EPSが活躍できる理由</h4>
<ul>
<li class="good">再生医療等製品の開発を支援できる<strong>数少ないCRO</strong>の一つ</li>
<li class="good">PMDA規制（条件・期限付き承認、SAKIGAKE指定）の<strong>専門知識</strong></li>
<li class="good">SMO（EPLink）による<strong>治験施設の確保</strong></li>
<li class="good">小規模企業にも柔軟に対応できる<strong>サービス提供体制</strong></li>
</ul>
<p><strong>⇒ 先端領域でのEPSの専門性が最も活きるケース。大手グローバルCROよりも柔軟な対応が可能</strong></p>
</div>

<h2>戦略的意思決定のフレームワーク</h2>
<p>EPSの営業・戦略担当が案件を評価する際の判断基準：</p>
<table>
<tr><th>評価軸</th><th>有利なケース</th><th>不利なケース</th></tr>
<tr><td>地域</td><td>日本、中国、アジア</td><td>欧米中心の多国間治験</td></tr>
<tr><td>企業規模</td><td>中堅製薬、バイオテック</td><td>大手グローバル製薬（戦略的パートナー型）</td></tr>
<tr><td>疾患領域</td><td>オンコロジー、再生医療</td><td>特殊な専門性が必要な稀少領域</td></tr>
<tr><td>サービス範囲</td><td>開発+施設支援+販売支援</td><td>製造受託（CDMO）を含む案件</td></tr>
<tr><td>開発段階</td><td>Phase I〜IV全般</td><td>グローバルPivotal試験のリード</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "ケース1（中国バイオテックの日本参入）でEPSの強みが最も活きるのはなぜですか？",
                    options: ["CDMOで製造もできるから", "三位一体＋中国展開の全てを活用できるから", "グローバル治験を統括できるから", "最もコストが安いから"],
                    answer: 1,
                    explanation: "EPS益新（中国）+CRO+SMO（EPLink）+CSO（EPファーマライン）の全リソースを統合して活用できるため、EPSの三位一体＋中国展開が最大限に活きるケースです。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "ケース2（20カ国の国際共同治験）でEPSの最適な対応はどれですか？",
                    options: ["全体受託を提案する", "案件を辞退する", "日本＋アジアパートの提案やサブCRO参加を検討", "シミックと共同で提案する"],
                    answer: 2,
                    explanation: "全体受託は困難ですが、「日本＋アジア」パートの提案やグローバルCROのサブCROとして日本部分を受託する選択肢は検討に値します。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "EPSにとって最も有利なクライアントセグメントはどれですか？",
                    options: ["欧米大手製薬企業のグローバル治験", "日本・アジアのバイオテック企業", "CDMOを含む統合案件", "Phase III専門の大規模治験"],
                    answer: 1,
                    explanation: "EPSの強み（アジア展開、三位一体、柔軟対応）が最も活きるのは日本・アジアのバイオテック企業やCROに全面的に依存する中堅企業です。"
                }
            ]
        },
        {
            id: 604,
            title: "総合確認テスト",
            duration: "10分",
            content: `
<h2>EPSアカデミー 総合確認テスト</h2>
<p>全6レベルの学習内容を網羅する<strong>総合確認テスト</strong>です。これまでの知識を総動員して挑みましょう。</p>

<div class="info-box formula">
<div class="info-box-title">テスト概要</div>
<ul>
<li>出題範囲：Level 1〜6の全内容</li>
<li>問題数：6問</li>
<li>合格基準：70%以上（4問以上正解）</li>
<li>全問正解を目指しましょう！</li>
</ul>
</div>

<h2>復習ポイント</h2>

<div class="collapsible">
<div class="collapsible-header">EPSグループの基本情報</div>
<div class="collapsible-body">
<ul>
<li>設立: 1991年、本社: 新宿区、従業員: 約7,900名</li>
<li>売上: 約666.89億円（2023年9月期）、CROセグメント: 約391億円</li>
<li>2021年MBO（MBKパートナーズ）、FUMIDASU2027で1,000億円目標</li>
<li>三位一体: CRO（イーピーエス）+ SMO（EPLink）+ CSO（EPファーマライン）</li>
<li>中国事業: EPS益新（15社以上）、グローバル: EPS創健</li>
</ul>
</div>
</div>

<div class="collapsible">
<div class="collapsible-header">CRO業界の構造</div>
<div class="collapsible-body">
<ul>
<li>日本CRO市場: 2023年に2,537億円（過去最高）、2024年は約2,300億円</li>
<li>国内ビッグ3: シミック（最大手）、EPS（第2位）、IQVIA（データ最強）</li>
<li>グローバルトップ: IQVIA（154億ドル）、ICON（83億ドル）</li>
<li>国際共同治験51%超 → グローバルCRO有利の構造</li>
<li>人材不足: CRA数7,165人→6,600人に減少</li>
</ul>
</div>
</div>

<div class="collapsible">
<div class="collapsible-header">主要競合の特徴</div>
<div class="collapsible-body">
<ul>
<li>シミック: 日本初CRO、CDMO保有、2025年ブラックストーン60%取得</li>
<li>IQVIA: 世界最大CRO、データ/テクノロジー優位、100カ国展開</li>
<li>エイツーヘルスケア: 伊藤忠系、eClinical強い、8,400万患者レコード</li>
<li>エムスリー/MPI: 600万人医師ネットワーク、グローバル案件50%超</li>
<li>リニカル: 日本発グローバルCRO、オンコロジー特化、25カ国以上</li>
</ul>
</div>
</div>

<div class="collapsible">
<div class="collapsible-header">業界トレンドと規制</div>
<div class="collapsible-body">
<ul>
<li>DCT（分散型治験）: 29%のCROが実装済み</li>
<li>AI/デジタル化: 「スケール勝負→テクノロジー勝負」への移行</li>
<li>RWD/RWE: 規制当局も活用推進</li>
<li>ICH-E6(R3): リスクベースドアプローチ中核のGCP改訂</li>
<li>ドラッグラグ/ドラッグロス: 治験エコシステム推進事業で対策</li>
<li>再生医療: 条件付き承認（最大7年）、SAKIGAKE指定</li>
</ul>
</div>
</div>

<p style="margin-top:24px;font-size:1.1rem;font-weight:700;">準備ができたら、下の「理解度チェック」ボタンから総合テストに挑戦しましょう！</p>
            `,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "EPSグループのCRO事業売上高（2023年9月期）は約いくらですか？",
                    options: ["約200億円", "約391億円", "約666億円", "約1,000億円"],
                    answer: 1,
                    explanation: "EPSのCROセグメント売上高は約391億円（2023年9月期）で、グループ全体（約666億円）の約6割を占めます。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "EPSが持ちシミックが持たない事業として最も適切なのはどれですか？",
                    options: ["CDMO（製造受託）", "中国事業（EPS益新）", "CSO（販売支援）", "CRO（開発受託）"],
                    answer: 1,
                    explanation: "EPSはEPS益新を通じた中国事業を持ちますが、シミックの中国展開は限定的です。CDMOはシミックが持ちEPSが持たない事業です。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "IQVIAが他のCROと比較して圧倒的に優位な資産はどれですか？",
                    options: ["製造工場のネットワーク", "医薬品市場データとテクノロジー", "SMO施設ネットワーク", "MR人材の数"],
                    answer: 1,
                    explanation: "IQVIAの最大の武器は旧IMS Health時代から蓄積した医薬品市場データとCOREテクノロジープラットフォームです。"
                },
                {
                    id: "q604_4",
                    type: "fill",
                    question: "CRO業界のビジネスモデルは「モニター数の○○○○勝負」から「テクノロジー勝負」へ変化しています。○○○○に入る言葉は？",
                    answer: "スケール",
                    explanation: "PwC Strategy&の分析では、CRO業界は「モニター数のスケール勝負」から「デジタルテクノロジーによるケイパビリティ勝負」へ変化すると予測されています。"
                },
                {
                    id: "q604_5",
                    type: "choice",
                    question: "ICH-E6(R3) GCPガイドラインの中核概念はどれですか？",
                    options: ["全症例SDVの義務化", "リスクベースドアプローチ", "電子データの廃止", "モニタリングの簡略化"],
                    answer: 1,
                    explanation: "ICH-E6(R3)はリスクベースドアプローチを中核とし、リスクに応じた最適なモニタリング戦略の策定を求めています。"
                },
                {
                    id: "q604_6",
                    type: "choice",
                    question: "EPSの成長戦略としてFUMIDASU2027が掲げる2027年の売上目標は？",
                    options: ["500億円", "800億円", "1,000億円", "1,500億円"],
                    answer: 2,
                    explanation: "FUMIDASU2027では2027年にグループ売上高1,000億円を目標に掲げ、現在の約666億円から約50%の成長を目指しています。"
                }
            ]
        }
    ]
};
