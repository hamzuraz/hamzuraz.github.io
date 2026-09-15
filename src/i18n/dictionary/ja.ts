import type { DictionaryShape } from "./en-US";

const homePage = {
	// HERO SECTION ============================================================
	"home.hero.eyebrow": "最終更新",
	"home.hero.role": "ソフトウェアエンジニア",
	"home.hero.subheading":
		"ユーザーの目に触れるインターフェースから、その裏側を支えるアーキテクチャまで —— どちらも自分の手で作り、スケールすることを見据えて設計しています。",
	"home.hero.seemore": "もっと見る",
	"home.hero.cta.primary": "レジュメを見る",
	"home.hero.cta.secondary": "連絡する",

	// PROJECTS SECTION ========================================================
	"home.projects.eyebrow": "01 / 制作実績",
	"home.projects.title": "プロジェクト",
	"home.projects.description":
		"これまでに作ってきたものの一部です —— どれも、実際に解決したかった課題から始まっています。",
	"home.projects.cta": "すべてのプロジェクトを見る",

	// SKILLS SECTION ==========================================================
	"home.skills.eyebrow": "02 / 専門分野",
	"home.skills.title": "スキル",
	"home.skills.description":
		"Web、モバイル、バックエンドを問わず、信頼性が高くスケーラブルなソリューションを構築するソフトウェアエンジニアです。知的好奇心を原動力に、常に新しい技術を学び、より良いプロダクトを作るためにスキルを磨き続けています。",
	"home.skills.table.category.all": "すべて",
	"home.skills.table.category.core": "コア",
	"home.skills.table.category.familiar": "経験あり",
	"home.skills.table.scope.languages": "言語・ランタイム",
	"home.skills.table.scope.web": "Web",
	"home.skills.table.scope.mobile": "モバイル",
	"home.skills.table.scope.databases": "データベース",
	"home.skills.table.scope.tooling": "ツール",
	"home.skills.table.scope.ide": "IDE・AI",
	"home.skills.table.scope.familiar": "経験あり",

	// CONTACT SECTION =========================================================
	"home.contact.eyebrow": "03 / お問い合わせ",
	"home.contact.title": "コンタクト",
	"home.contact.description":
		"プロジェクトの相談でも、ちょっとした質問でも、気軽な挨拶でも —— いつでもお気軽にご連絡ください。",
	"home.contact.cta.email": "メールを送る",
	"home.contact.cta.linkedin": "LinkedInで見る",
};

export const ja = {
	// HEAD ====================================================================
	"home.title": "Rifki Muhazzar — ソフトウェアエンジニア",
	"home.description":
		"Rifki Muhazzarのポートフォリオサイトです。企画から実装まで一貫して手がけるソフトウェアエンジニア。プロジェクトやスキル、連絡方法などを紹介しています。",

	// HEADER ==================================================================
	"header.nav.projects": "プロジェクト",
	"header.nav.skills": "スキル",
	"header.nav.contact": "コンタクト",
	"header.theme.system": "システム",
	"header.theme.light": "ライト",
	"header.theme.dark": "ダーク",

	// FOOTER ==================================================================
	"footer.copyright": "Rifki Muhazzar. 無断転載を禁じます。",

	// HOME PAGE ===============================================================
	...homePage,
} as const satisfies DictionaryShape;
